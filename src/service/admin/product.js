var axios = require('axios');
import {
  getHost
} from "@/service/get-host"
let url = getHost()
export function getAllProduct() {
  return new Promise((res, rej) => {
    var config = {
      method: 'get',
      url: url + '/api/v1/admin/product',
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

export function getAllProductByActive() {
  return new Promise((res, rej) => {
    var config = {
      method: 'get',
      url: url + '/api/v1/admin/product/parent',
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

export function getAllProductById(id) {
  return new Promise((res, rej) => {
    var config = {
      method: 'get',
      url: url + '/api/v1/admin/product/?id=' + id,
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
//update status
export function updateStatus(id) {
  return new Promise((res, rej) => {
    var config = {
      method: 'POST',
      url: url + '/api/v1/admin/product/status/?id=' + id,
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
// add product
export function addProduct(data) {
  return new Promise((res, rej) => {
    var config = {
      method: 'post',
      url: url + "/api/v1/admin/product",
      headers: {},
      data: data
    };
    axios(config)
      .then(function (response) {


        res(response.data);
      })
      .catch(function (error) {
        rej(error);
      });

  })
}
// get detail
export function getOneProductById(id) {
  return new Promise((res, rej) => {
    var config = {
      method: 'get',
      url: url + '/api/v1/admin/product/detail/?id=' + id,
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
// edit
export function editProduct(data) {
  return new Promise((res, rej) => {
    var config = {
      method: 'PUT',
      url: url + "/api/v1/admin/product",
      headers: {},
      data: data
    };
    axios(config)
      .then(function (response) {


        res(response);
      })
      .catch(function (error) {
        rej(error);
      });

  })
}