const axios = require('axios')

const query = {
  fsym: 'ETH',
  tsym: 'USD',
  limit: 30,
  aggregate: 1
}
const querystring = Object.keys(query)
    .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(query[k]))
    .join('&');

console.log(querystring)

const url = "https://min-api.cryptocompare.com/data/histominute?fsym=ETH&tsym=USD&limit=30&aggregate=1"

const cbFn = (response) => {
  const data = response.data.Data




  
  console.log(data)

  const date = new Date(parseInt(data[0].time * 1000))
  console.log(date.toLocaleString())
}





axios
  .get(url)
  .then(cbFn)
  .catch((err) => console.log(err))
