var axios = require('axios');
import {
    getHost
  } from "@/service/get-host"
  let url = getHost()
export function getAllAdminBanner() {
    return new Promise((res, rej) => {
        var config = {
            method: 'get',
            url: url + '/api/v1/admin/banner',
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

export function getBannerById(id) {
    return new Promise((res, rej) => {
        var config = {
            method: 'get',
            url: url + '/api/v1/admin/banner/' + id,
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

export function editBanner(data) {
  return new Promise((res, rej) => {
    var config = {
      method: 'post',
      url: url + "/api/v1/admin/banner",
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