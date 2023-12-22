var axios = require("axios");
import { getHost } from "@/service/get-host";
let url = getHost();
export function getAllCate() {
  return new Promise((res, rej) => {
    var config = {
      method: "get",
      url: url + "/api/v1/user/category",
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
//admin
export async function getAllParentCate() {
  try {
    const res = await axios.get(url + "/api/v1/admin/category/parent", {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return res.data.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
  // return new Promise((res, rej) => {
  //   var config = {
  //     method: 'get',
  //     url: url+'/api/v1/admin/category/parent',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //   };
  //   axios(config)
  //     .then(function (response) {
  //       res(response.data.data);
  //     })
  //     .catch(function (error) {
  //       rej(error);
  //     });

  // })
}

//add
export function addCate(data) {
  return new Promise((res, rej) => {
    var config = {
      method: "post",
      url: url + "/api/v1/admin/category",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };
    axios(config)
      .then(function (response) {
        res(response.data);
      })
      .catch(function (error) {
        rej(error);
      });
  });
}

//edit
export function editCate(data) {
  return new Promise((res, rej) => {
    var config = {
      method: "post",
      url: url + "/api/v1/admin/category",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };
    axios(config)
      .then(function (response) {
        res(response.data);
      })
      .catch(function (error) {
        rej(error);
      });
  });
}
//edit
export function updateStatusCate(id) {
  return new Promise((res, rej) => {
    var config = {
      method: "get",
      url: url + "/api/v1/admin/category/status/" + id,
      headers: {
        "Content-Type": "application/json",
      },
    };
    axios(config)
      .then(function (response) {
        res(response.data);
      })
      .catch(function (error) {
        rej(error);
      });
  });
}

///product
export function getAllCateInaddProduct() {
  return new Promise((res, rej) => {
    var config = {
      method: "get",
      url: url + "/api/v2/user/category",
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
        rej("Wrong email or password");
      });
  });
}
