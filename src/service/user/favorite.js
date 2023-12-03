var axios = require('axios');
import {
    getHost
  } from "@/service/get-host"
  let url = getHost()
export function favorite(productId) {
    return new Promise((res, rej) => {
        var config = {
            method: 'get',
            url: url + '/api/v3/user/favorite/?productId=' + productId,
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
                rej("Wrong email or password");
            });

    })
}

export function getQuantityItem() {
    return new Promise((res, rej) => {
        var config = {
            method: 'get',
            url: url + '/api/v3/user/favorite-info/quantity',
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
                rej("Wrong email or password");
            });

    })
}



export function getAllFavorite(page) {
    return new Promise((res, rej) => {
        var config = {
            method: 'get',
            url: url + '/api/v3/user/favorite-info'+page,
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
                rej("Wrong email or password");
            });

    })
}


export function getTotalPage() {
    return new Promise((res, rej) => {
        var config = {
            method: 'get',
            url: url + '/api/v3/user/favorite-info/total',
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
                rej("Wrong email or password");
            });

    })
}