var axios = require("axios");
import { getHost } from "@/service/get-host";
let url = getHost();
export async function getProductDetailById(data) {
  try {
    const res = await axios.get(url + "/api/v1/user/product-detail/" + data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return res.data.data;
  } catch (error) {
    throw new Error(error);
  }
  // return new Promise((res, rej) => {
  //   var config = {
  //     method: "get",
  //     url: url + "/api/v1/user/product-detail/" + data,
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

export function getProductDetailBySpe(data) {
  return new Promise((res, rej) => {
    var config = {
      method: "post",
      url: url + "/api/v1/user/product-detail",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
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

export function totaPageProductSearch(data) {
  return new Promise((res, rej) => {
    var config = {
      method: "post",
      url: url + "/api/v1/user/product/search/totalPage",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
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

// comment
export function getAllComment(data) {
  return new Promise((res, rej) => {
    var config = {
      method: "get",
      url: url + "/api/v1/user/comment" + data,
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
