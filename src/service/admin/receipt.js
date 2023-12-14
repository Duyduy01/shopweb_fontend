var axios = require("axios");
import { getHost } from "@/service/get-host";
let url = getHost();
export function getAllReceipt() {
  return new Promise((res, rej) => {
    var config = {
      method: "get",
      url: url + "/api/v1/admin/receipt",
      headers: {
        "Content-Type": "application/json",
      },
    };
    axios(config)
      .then(function (response) {
        res(response.data.data);
      })
      .catch(function (error) {
        rej(error);
      });
  });
}

export function getReceiptDetail(id) {
  return new Promise((res, rej) => {
    var config = {
      method: "get",
      url: url + "/api/v1/admin/receipt/" + id,
      headers: {
        "Content-Type": "application/json",
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
  });
}

export async function getAllProduct() {
  try {
    const res = await axios.get(url + "/api/v1/admin/receipt/product", {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return res.data.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
  // return new Promise((res, rej) => {
  //   var config = {
  //     method: 'get',
  //     url: url+'/api/v1/admin/receipt/product',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //   };
  //   axios(config)
  //     .then(function (response) {

  //       res(response.data.data);
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //       rej(error);
  //     });

  // })
}

// add
export function addReceipt(data) {
  return new Promise((res, rej) => {
    var config = {
      method: "post",
      url: url + "/api/v1/admin/receipt",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };
    axios(config)
      .then(function (response) {
        res(response);
      })
      .catch(function (error) {
        console.log(error);
        rej(error);
      });
  });
}

// update user manu
export function updateUserManu(data) {
  return new Promise((res, rej) => {
    var config = {
      method: "post",
      url: url + "/api/v1/admin/receipt/user-manu",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };
    axios(config)
      .then(function (response) {
        res(response);
      })
      .catch(function (error) {
        console.log(error);
        rej(error);
      });
  });
}

// update status
export function updateStatusReceipt(id) {
  return new Promise((res, rej) => {
    var config = {
      method: "put",
      url: url + "/api/v1/admin/receipt/status/" + id,
      headers: {
        "Content-Type": "application/json",
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
  });
}

// cancel status
export function cancelBill(id) {
  return new Promise((res, rej) => {
    var config = {
      method: "put",
      url: url + "/api/v1/admin/receipt/cancel/" + id,
      headers: {
        "Content-Type": "application/json",
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
  });
}

export function exportReceipt(data) {
  return new Promise((res, rej) => {
    var config = {
      method: "get",
      url: url + "/api/v1/admin/receipt/export/pdf/" + data,
      headers: {
        "Content-Type": "application/json",
      },
      responseType: "blob",
    };
    axios(config)
      .then(function (response) {
        res(response);
      })
      .catch(function (error) {
        console.log(error);
        rej(error);
      });
  });
}
