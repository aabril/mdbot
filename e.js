const axios = require('axios')
const moment = require('moment')
const ChartjsNode = require('chartjs-node')
const chartNode = new ChartjsNode(600,600)

// chartjs-node bug (?) : https://github.com/vmpowerio/chartjs-node/issues/26#issuecomment-354383865
if (global.CanvasGradient === undefined) {
  global.CanvasGradient = function() {};
}

chartNode.on('beforeDraw', function (chartInstance) {
    chartInstance.defaults.line.backgroundColor = "white"
    // const ctx = chartInstance.Line.ctx;
    // ctx.fillStyle = "white";
    // ctx.fillRect(0, 0, chartInstance.line.width, chartInstance.line.height);
});


function objectToQuerystring (obj) {
    return Object.keys(obj).reduce(function (str, key, i) {
      var delimiter, val;
      delimiter = (i === 0) ? '?' : '&';
      key = encodeURIComponent(key);
      val = encodeURIComponent(obj[key]);
      return [str, delimiter, key, '=', val].join('');
    }, '');
  }

function getConfig(cryptoPricesArr1, cryptoTimesArr1, cryptoPricesArr2){
    const TITLE = "ETH en USD"
    
    const ethPrices = [55, 32, 40, 45, 50, 55, 60, 54, 50, 48, 40, 42]
    const btcPrices = [60, 55, 54, 50, 48, 42, 40, 44, 48, 50, 52, 58]
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
                text: TITLE
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

function generateGraphPng(config){
  chartNode.drawChart(config).then(buffer => {
    return chartNode.writeImageToFile('image/png', './testimage.png');
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

function getValuesArray(arrObjects){
  const result = []
  arrObjects.forEach(element => {
    result.push(element.close)
  });
  return result
}

function getTimesArray(arrObjects){
    const result = []
    arrObjects.forEach(element => {
      const date = moment(element.time * 1000).endOf('day').fromNow();
      result.push(date)
    });
    result[result.length] = "now"
    return result
  }


function main() {
    const options = {
        cryptoCode: 'BTC',
        exchangeCode: 'USD',
        ndays: 365
    }

    const fnCb = (data, err) => {
        if(err) return console.log(err)
        const values = getValuesArray(data)
        const times = getTimesArray(data)
        const config = getConfig(values, times)
        generateGraphPng(config)
    }

    getHistoric(options, fnCb)
}


main()