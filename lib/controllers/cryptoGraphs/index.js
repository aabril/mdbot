const axios = require('axios')
const moment = require('moment')
const ChartjsNode = require('chartjs-node')
const chartNode = new ChartjsNode(600,600)

// chartjs-node bug (?) : https://github.com/vmpowerio/chartjs-node/issues/26#issuecomment-354383865
if (global.CanvasGradient === undefined) {
  global.CanvasGradient = function() {};
}

function objectToQuerystring (obj) {
    return Object.keys(obj).reduce(function (str, key, i) {
      var delimiter, val;
      delimiter = (i === 0) ? '?' : '&';
      key = encodeURIComponent(key);
      val = encodeURIComponent(obj[key]);
      return [str, delimiter, key, '=', val].join('');
    }, '');
  }

function getConfig(cryptoPricesArr1, cryptoTimesArr1, cryptoPricesArr2, title){
    const TITLE = "ETH en USD"
    
    const config = {
        type: 'line',
        data: {
            labels: cryptoTimesArr1,
            datasets: [
                {
                    label: "ETH",
                    backgroundColor: "red",
                    borderColor: "red",
                    data: cryptoPricesArr1,
                    fill: false
                }
                // ,
                // {
                //     label: "BTC",
                //     backgroundColor: "red",
                //     borderColor: "red",
                //     data: cryptoPricesArr1,
                //     fill: false
                // }
            ]
        },
        options: {
            responsive: true,
            canvas: {
              backgroundColor: "rgba(75, 192, 192, 1)"
            },
            title:{
                display:true,
                text: title
            },
            tooltips: {
                mode: 'index',
                intersect: false,
            },
            hover: {
                mode: 'nearest',
                intersect: true
            },
            scales: {
                xAxes: [{
                    display: true,
                    scaleLabel: {
                        display: true,
                        labelString: 'Mes'
                    }
                }],
                yAxes: [{
                    display: true,
                    scaleLabel: {
                        display: true,
                        labelString: 'Preu'
                    }
                }]
            }
        }
    }

    return config
}

function generateGraphPng(config, cb){
  chartNode
    .drawChart(config)
    .then(() => {
      return chartNode.getImageBuffer('image/png')
    })
    .then(buffer => {
      return chartNode.getImageStream('image/png')
    })
    .then(streamResult => {
      return chartNode.getImageStream('image/png')
    })
    .then(streamResult => {
      // using the length property you can do things like
      // directly upload the image to s3 by using the
      // stream and length properties
      // streamResult.stream // => Stream object
      // streamResult.length // => Integer length of stream
      // write to a file
      return chartNode.writeImageToFile('image/png', './testimage.png');
  })
  .then(() => {
      // chart is now written to the file path
      // ./testimage.png
      cb()
  });


}


function getHistoric(options, cb) {

  const query = {
      fsym: options.cryptoCode,
      tsym: options.exchangeCode,
      limit: options.ndays,
      aggregate: 1
  }

  const queryString = objectToQuerystring(query)

  console.log(queryString)

  const url = "https://min-api.cryptocompare.com/data/histoday" + queryString

  const cbFn = (response) => {
    const data = response.data.Data
    cb(data)
  }

  axios
    .get(url)
    .then(cbFn)
    .catch((err) => cb(null, err))
}

function getValuesArray(arrObjects) {
  const result = []
  arrObjects.forEach(element => {
    result.push(element.close)
  });
  return result
}

function getTimesArray(arrObjects) {
    const result = []
    arrObjects.forEach(element => {
      const date = moment(element.time * 1000).endOf('day').fromNow();
      result.push(date)
    });
    result[result.length] = "now"
    return result
}

module.exports = (ctx) => {
  const text = ctx.update.message.text
  const arguments = text.split(" ")

  if(arguments[1]==="help") ctx.reply('Proximament, paciència cabrons')

  const options = {
    cryptoCode: arguments[1].toUpperCase(),
    exchangeCode: arguments[2].toUpperCase(),
    ndays: arguments[3]
  }

  const fnCb = (data, err) => {
    if(err) return console.log(err)
    const values = getValuesArray(data)
    const times = getTimesArray(data)
    const title = options.cryptoCode + " en " + options.exchangeCode + " / " + options.ndays + " dies"
    const config = getConfig(values, times, "", title)
    generateGraphPng(config, () => {
      ctx
        .replyWithPhoto({ source: './testimage.png' })
        .catch((err) => {
          console.log(err)
        })
    })
}

  getHistoric(options, fnCb)
}