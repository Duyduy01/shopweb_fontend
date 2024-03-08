import { getHost } from "@/service/get-host";

var axios = require("axios");
let url = getHost();

export async function addBill(data) {
  try {
    const res = await axios.post(url + "/api/v3/user/bill", data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(res.data.data)
    return res.data.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export function getAllBillUser(data) {
  return new Promise((res, rej) => {
    var config = {
      method: "post",
      url: url + "/api/v3/user/bill",
      headers: {
        "Content-Type": "application/json",
      },
      data,
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

// quản lý bill của user
export async function getAllBillByStatus(status, page) {
  try {
    const res = await axios.get(
      url + "/api/v3/user/bill/status/" + status + "/?page=" + page,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return res.data.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

// tổng page
export async function getTotalByStatus(status) {
  try {
    const res = await axios.get(url + "/api/v3/user/bill/total/" + status, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return res.data.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

// cancel bill
export async function cancelBill(id) {
  try {
    const res = await axios.put(url + "/api/v3/user/bill/cancel/" + id, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return res.data.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

// detail bill user

export function getDetailById(billId) {
  return new Promise((res, rej) => {
    var config = {
      method: "get",
      url: url + "/api/v3/user/bill/detail/" + billId,
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
// review
// export function addReviewProduct(data) {
//   return new Promise((res, rej) => {
//     var config = {
//       method: "post",
//       url: url + "/api/v3/user/comment/review",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       data: data,
//     };
//     axios(config)
//       .then(function (response) {
//         res(response.data.data);
//       })
//       .catch(function (error) {
//         rej(error);
//       });
//   });
// }
export async function addReviewProduct(data) {
  try {
    const res = await axios.post(url + "/api/v3/user/comment/review", data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return res.data.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
// pay now
export async function getBillPayNow(data) {
  try {
    // Log the Authorization header
    const res = await axios.get(url + "/api/v3/user/bill/pay-now" + data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(res.data);
    return res.data.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function addBillPayNow(data) {
  try {
    const res = await axios.post(url + "/api/v3/user/bill/pay-now", data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return res.data.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
