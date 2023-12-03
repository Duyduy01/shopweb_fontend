var axios = require('axios');
import {
  getHost
} from "@/service/get-host"
let url = getHost()
export function getTotalPriceBillByMonth() {
  return new Promise((res, rej) => {
    var config = {
      method: 'get',
      url: url + '/api/v1/admin/chart/bill',
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

export function getTotalPriceReceiptByMonth() {
  return new Promise((res, rej) => {
    var config = {
      method: 'get',
      url: url + '/api/v1/admin/chart/receipt',
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

export function planetChartData(month, dataReceipt, dataBill) {
  return {
    type: "bar",
    data: {
      labels: month,
      datasets: [{
          label: "Tổng nhập",
          data: dataReceipt,
          backgroundColor: "rgba(54,73,93,.5)",
          borderColor: "#36495d",
          borderWidth: 3
        },
        {
          label: "Tổng bán",
          data: dataBill,
          backgroundColor: "rgba(71, 183,132,.5)",
          borderColor: "#47b784",
          borderWidth: 3
        }
      ]
    },
    options: {
      responsive: true,
      lineTension: 1,

      tooltips: {
        callbacks: {
          label: function (tooltipItem) {
            return tooltipItem.yLabel.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + ' VND';
          }
        }
      },
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true,
            padding: 25,
            callback: function (value) {
              if (parseInt(value) != 0) {

                return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + ' VND';

              } else {
                return value + ' VND';
              }

            }

          }
        }],

      }
    }
  };
}

export function roundChartData() {
  return {
    type: 'pie',
    data: {
      datasets: [{
        data: [10, 20, 30],
        backgroundColor: "rgba(54,73,93,.5)",
    }],

    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: [
        'Red',
        'Yellow',
        'Blue'
    ]
    },
    options: {}
  };
}