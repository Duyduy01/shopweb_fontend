import {
  getHost
} from "@/service/get-host"
let url = getHost()
var axios = require('axios');
// let url = "http://localhost:8082"

console.log(url)

export function getAllProductAll() {
  return new Promise((res, rej) => {
    var config = {
      method: 'get',
      url: url + '/api/v1/user/product-home',
      headers: {
        'Content-Type': 'application/json'
      },
    };
    axios(config)
      .then(function (response) {

        res(response.data.data);
      })
      .catch(function (error) {
        rej(error);
      });

  })
}

export function getAllProductByOption(option) {
  return new Promise((res, rej) => {
    var config = {
      method: 'get',
      url: url + '/api/v1/user/product/option?option=' + option,
      headers: {
        'Content-Type': 'application/json'
      },
    };
    axios(config)
      .then(function (response) {

        res(response.data.data);
      })
      .catch(function (error) {
        rej(error);
      });

  })
}