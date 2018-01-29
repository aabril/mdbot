const axios = require('axios')
const ChartjsNode = require('chartjs-node')
const chartNode = new ChartjsNode(600,600)

// chartjs-node bug (?) : https://github.com/vmpowerio/chartjs-node/issues/26#issuecomment-354383865
if (global.CanvasGradient === undefined) {
  global.CanvasGradient = function() {};
}


function getConfig(){
    const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const TITLE = "Preu ETH en USD - 1y"
    
    const ethPrices = [55, 32, 40, 45, 50, 55, 60, 54, 50, 48, 40, 42]
    const btcPrices = [60, 55, 54, 50, 48, 42, 40, 44, 48, 50, 52, 58]
    const config = {
        type: 'line',
        data: {
            labels: MONTHS,
            datasets: [{
                label: "ETH",
                backgroundColor: "red",
                borderColor: "red",
                data: ethPrices,
                fill: false
            }, {
                label: "BTC",
                fill: false,
                backgroundColor: "blue",
                borderColor: "blue",
                data: btcPrices
            }]
        },
        options: {
            responsive: true,
            canvas: {
              backgroundColor: 'white'
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

function generateGraphPng(){
  const config = getConfig()
  chartNode.drawChart(config).then(buffer => {
    return chartNode.writeImageToFile('image/png', './testimage.png');
  })
}

generateGraphPng()





