var axios = require('axios');
import {
  getHost
} from "@/service/get-host"
let url = getHost()
export function getAllBill() {
  return new Promise((res, rej) => {
    var config = {
      method: 'get',
      url: url + '/api/v1/admin/bill',
      headers: {
        'Content-Type': 'application/json'
      },
    };
    axios(config)
      .then(function (response) {

        res(response.data.data);
      })
      .catch(function (error) {

        rej(error)
      });

  })
}

export function getBillDetail(id) {
  return new Promise((res, rej) => {
    var config = {
      method: 'get',
      url: url + '/api/v1/admin/bill/' + id,
      headers: {
        'Content-Type': 'application/json'
      },
    };
    axios(config)
      .then(function (response) {

        res(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
        rej(error);
      });

  })
}

export function verifyBill(id) {
  return new Promise((res, rej) => {
    var config = {
      method: 'put',
      url: url + '/api/v1/admin/bill/verify/' + id,
      headers: {
        'Content-Type': 'application/json'
      },
    };
    axios(config)
      .then(function (response) {

        res(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
        rej(error);
      });

  })
}

export function cancelBill(id) {
  return new Promise((res, rej) => {
    var config = {
      method: 'put',
      url: url + '/api/v1/admin/bill/cancel/' + id,
      headers: {
        'Content-Type': 'application/json'
      },
    };
    axios(config)
      .then(function (response) {

        res(response.data);
      })
      .catch(function (error) {
        console.log(error);
        rej(error);
      });

  })
}
export function updateStatusBill(id) {
  return new Promise((res, rej) => {
    var config = {
      method: 'put',
      url: url + '/api/v1/admin/bill/status/' + id,
      headers: {
        'Content-Type': 'application/json'
      },
    };
    axios(config)
      .then(function (response) {

        res(response.data);
      })
      .catch(function (error) {
        console.log(error);
        rej(error);
      });

  })
}

export function exportBill(data) {
  return new Promise((res, rej) => {
    var config = {
      method: 'get',
      url: url + '/api/v1/admin/bill/export/pdf/' + data,
      headers: {
        'Content-Type': 'application/json'
      },
      responseType: 'blob'
    };
    axios(config)
      .then(function (response) {
        res(response);
      })
      .catch(function (error) {
        console.log(error);
        rej("Wrong email or password");
      });

  })
}