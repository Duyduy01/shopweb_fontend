var axios = require('axios');
import {
    getHost
  } from "@/service/get-host"
  let url = getHost()
// one day
export function getAllRpOneDay(data) {
    return new Promise((res, rej) => {
        var config = {
            method: 'post',
            url: url + '/api/v1/admin/report/one-day',
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
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


export function totalOneDay(data) {
    return new Promise((res, rej) => {
        var config = {
            method: 'post',
            url: url + '/api/v1/admin/report/total/one-day',
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
                console.log(error);
                rej(error);
            });

    })
}

// excel
export function exportExcel(data) {
    return new Promise((res, rej) => {
        var config = {
            method: 'get',
            url: url + '/api/v1/admin/report/one-day/export/excel/' + data,
            headers: {
                'Content-Type': 'application/json'
            },
            responseType: 'blob',
        };
        axios(config)
            .then(function (response) {
                res(response);
            })
            .catch(function (error) {
                console.log(error);
                rej(error);
            });

    })
}

// pdf
export function exportPdf(data) {
    return new Promise((res, rej) => {
        var config = {
            method: 'get',
            url: url + '/api/v1/admin/report/one-day/export/pdf/' + data,
            headers: {
                'Content-Type': 'application/json'
            },
            responseType: 'blob',
        };
        axios(config)
            .then(function (response) {
                res(response);
            })
            .catch(function (error) {
                console.log(error);
                rej(error);
            });

    })
}
// one day


// several day
export function getAllRpSeveralDay(data) {
    return new Promise((res, rej) => {
        var config = {
            method: 'post',
            url: url + '/api/v1/admin/report/several-days',
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
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
export function totalSeveralDays(data) {
    return new Promise((res, rej) => {
        var config = {
            method: 'post',
            url: url + '/api/v1/admin/report/total/several-days',
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
                console.log(error);
                rej(error);
            });

    })
}

// excel
export function exportExcelSeveralDay(fromDate, toDate) {
    return new Promise((res, rej) => {
        var config = {
            method: 'get',
            url: url + '/api/v1/admin/report/several-days/export/excel/' + fromDate + "/to/" + toDate,
            headers: {
                'Content-Type': 'application/json'
            },
            responseType: 'blob',
        };
        axios(config)
            .then(function (response) {
                res(response);
            })
            .catch(function (error) {
                console.log(error);
                rej(error);
            });

    })
}

// pdf
export function exportPdfSeveralDay(fromDate, toDate) {
    return new Promise((res, rej) => {
        var config = {
            method: 'get',
            url: url + '/api/v1/admin/report/several-days/export/pdf/' + fromDate + "/to/" + toDate,
            headers: {
                'Content-Type': 'application/json'
            },
            responseType: 'blob',
        };
        axios(config)
            .then(function (response) {
                res(response);
            })
            .catch(function (error) {
                console.log(error);
                rej(error);
            });

    })
}
// several day