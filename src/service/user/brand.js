var axios = require("axios");
import { getHost } from "@/service/get-host";
let url = getHost();

export async function getAllBrand() {
  try {
    const res = await axios.get(url + "/api/v1/user/brand", {
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
  //     method: "get",
  //     url: url + "/api/v1/user/brand",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   };
  //   axios(config)
  //     .then(function (response) {
  //       res(response.data.data);
  //     })
  //     .catch(function (error) {
  //       rej(error);
  //     });
  // });
}

export async function getProductByBrand(data) {
  try {
    const res = await axios.post(url + "/api/v1/user/brand", data, {
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
  //     method: "post",
  //     url: url + "/api/v1/user/brand",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     data: JSON.stringify(data),
  //   };
  //   axios(config)
  //     .then(function (response) {
  //       res(response.data.data);
  //     })
  //     .catch(function (error) {
  //       rej(error);
  //     });
  // });
}

export async function getTotalByBrand(data) {
  try {
    const res = await axios.post(url + "/api/v1/user/brand/total", data, {
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
  // return new Promise((res, rej) => {
  //   var config = {
  //     method: "post",
  //     url: url + "/api/v1/user/brand/total",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     data: JSON.stringify(data),
  //   };
  //   axios(config)
  //     .then(function (response) {
  //       res(response.data.data);
  //     })
  //     .catch(function (error) {
  //       rej(error);
  //     });
  // });
}
