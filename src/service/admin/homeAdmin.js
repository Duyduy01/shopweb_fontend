var axios = require('axios');
import {
  getHost
} from "@/service/get-host"
let url = getHost()
export function getInforHomeAdmin() {
  return new Promise((res, rej) => {
    var config = {
      method: 'get',
      url: url + '/api/v1/admin/home',
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