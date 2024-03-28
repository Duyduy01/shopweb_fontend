var axios = require("axios");
import { getHost } from "@/service/get-host";
let url = getHost();
export async function getAllUserManu() {
  try {
    const res = await axios.get(url + "/api/v1/admin/user-manager/manu", {
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
  //     url: url + "/api/v1/admin/user-manager/manu",
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

export function getUserManager(data) {
  return new Promise((res, rej) => {
    var config = {
      method: "get",
      url: url + "/api/v1/supper/admin/customer/" + data,
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

export function addUserManager(data) {
  return new Promise((res, rej) => {
    var config = {
      method: "post",
      url: url + "/api/v1/supper/admin/customer/add",
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
        console.log(error);
        rej(error);
      });
  });
}

export async function updateUserManager(data) {
  try {
    const res = await axios.post(
      url + "/api/v1/supper/admin/customer/status/" + data,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return res.data.data;
  } catch (error) {
    throw new Error(error);
  }
  // return new Promise((res, rej) => {
  //   var config = {
  //     method: "post",
  //     url: url + "/api/v1/supper/admin/customer/status/" + data,
  //     headers: {
  //       "Content-Type": "application/json",
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
  // });
}
