var axios = require('axios');
import {
  getHost
} from "@/service/get-host"
let url = getHost()
export function getAllProduct() {
  return new Promise((res, rej) => {
    var config = {
      method: 'get',
      url: url + '/api/v1/user/product',
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

export function filterProduct(data) {
  return new Promise((res, rej) => {
    var config = {
      method: 'post',
      url: url + '/api/v1/user/product/filter',
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
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


export function filterTotalPage(data) {
  return new Promise((res, rej) => {
    var config = {
      method: 'post',
      url: url + '/api/v1/user/product/filter/total/page',
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
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

export function searchProductByNameSearch(data) {
  return new Promise((res, rej) => {
    var config = {
      method: 'post',
      url: url + '/api/v1/user/product/search',
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
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

export function totalProductSearch(data) {
  return new Promise((res, rej) => {
    var config = {
      method: 'post',
      url: url + '/api/v1/user/product/search/total',
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
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

export function totaPageProductSearch(data) {
  return new Promise((res, rej) => {
    var config = {
      method: 'post',
      url: url + '/api/v1/user/product/search/totalPage',
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
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