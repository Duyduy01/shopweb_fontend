var axios = require('axios');
import {
    getHost
  } from "@/service/get-host"
  let url = getHost()
export function getAllCampaign() {
    return new Promise((res, rej) => {
        var config = {
            method: 'get',
            url: url + '/api/v1/admin/campaign',
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

export function getCampaignDetailById(data) {
    return new Promise((res, rej) => {
        var config = {
            method: 'get',
            url: url + '/api/v1/admin/campaign/detail/' + data,
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

export function addCampaign(data) {
    return new Promise((res, rej) => {
        var config = {
            method: 'post',
            url: url + '/api/v1/admin/campaign/add',
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

export function addCampaignDetail(data) {
    return new Promise((res, rej) => {
        var config = {
            method: 'post',
            url: url + '/api/v1/admin/campaign/detail/add',
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

export function campaignGetProduct() {
    return new Promise((res, rej) => {
        var config = {
            method: 'get',
            url: url + '/api/v1/admin/campaign/detail/product',
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

export function finishCampaign(data) {
    return new Promise((res, rej) => {
        var config = {
            method: 'get',
            url: url + '/api/v1/admin/campaign/finish?campaignId=' + data,
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