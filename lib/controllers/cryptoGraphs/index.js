const axios = require('axios')
const moment = require('moment')
const ChartjsNode = require('chartjs-node')
const chartNode = new ChartjsNode(600,600)

// chartjs-node bug (?) : https://github.com/vmpowerio/chartjs-node/issues/26#issuecomment-354383865
if (global.CanvasGradient === undefined) {
  global.CanvasGradient = function() {};
}

function getOptions(arguments) {
    return {
        cryptoCode: arguments[1].toUpperCase(),
        exchangeCode: arguments[2].toUpperCase(),
        ndays: arguments[3], 
        color: arguments[4] || 'red',
        yLabel: "Preu",
        xLabel: "Temps"
    }
}

function getHelpText() {
    return `
      Usage:\n/gg <CURRENCY1> <CURRENCY2> <NDAYS> <color:optional>
    `
}

module.exports = (ctx) => {
    const text = ctx.update.message.text
    const arguments = text.split(" ")
  
    if(arguments[1]==="help") return ctx.reply(getHelpText())
  
    const options = getOptions(arguments)
  
    const fnCb = (data, err) => {
      if(err) return console.log(err)
      const values = getValuesArray(data)
      const times = getTimesArray(data)
      const config = getConfig(values, times, options)

      generateGraphPng(config, () => {
        ctx
          .replyWithPhoto({ source: './testimage.png' })
          .catch((err) => console.log(err))
      })
    }
    getHistoric(options, fnCb)
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

function getConfig(cryptoPricesArr1, cryptoTimesArr1, options){
    const title = options.cryptoCode + " en " + options.exchangeCode + " / " + options.ndays + " dies"

    const config = {
        type: 'line',
        data: {
            labels: cryptoTimesArr1,
            datasets: [
                {
                    label: options.cryptoCode,
                    backgroundColor: options.color,
                    borderColor: options.color,
                    data: cryptoPricesArr1,
                    fill: false
                }
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
                        labelString: options.xLabel
                    }
                }],
                yAxes: [{
                    display: true,
                    scaleLabel: {
                        display: true,
                        labelString: options.yLabel
                    }
                }]
            }
        }
    }

    return config
}

function generateGraphPng(config, cb){
  return chartNode
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
      return chartNode.writeImageToFile('image/png', './testimage.png');
    })
    .then(() => {
      return cb()
    })
}


function getHistoric(options, cb) {
  const query = {
      fsym: options.cryptoCode,
      tsym: options.exchangeCode,
      limit: options.ndays,
      aggregate: 1
  }

  const queryString = objectToQuerystring(query)
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
