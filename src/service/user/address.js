var axios = require('axios');
export function getCity() {
    return new Promise((res, rej) => {
        var config = {
            method: 'get',
            url: 'https://online-gateway.ghn.vn/shiip/public-api/master-data/province',
            headers: {
                'Content-Type': 'application/json',
                'token': 'f3c6e338-c3a8-11ec-9bdc-f620c30e1b62'
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
export function getDistrict(data) {
    return new Promise((res, rej) => {
        var config = {
            method: 'post',
            url: 'https://online-gateway.ghn.vn/shiip/public-api/master-data/district',
            headers: {
                'Content-Type': 'application/json',
                'token': 'f3c6e338-c3a8-11ec-9bdc-f620c30e1b62'
            },
            data:data
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

export function getWard(data) {
    return new Promise((res, rej) => {
        var config = {
            method: 'post',
            url: 'https://online-gateway.ghn.vn/shiip/public-api/master-data/ward?district_id',
            headers: {
                'Content-Type': 'application/json',
                'token': 'f3c6e338-c3a8-11ec-9bdc-f620c30e1b62'
            },
            data:data
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