var axios = require("axios");
import { getHost } from "@/service/get-host";
let url = getHost();
export function getAllBrand() {
  return new Promise((res, rej) => {
    var config = {
      method: "get",
      url: url + "/api/v1/user/brand",
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
export function getAllBrandAdmin() {
  return new Promise((res, rej) => {
    var config = {
      method: "get",
      url: url + "/api/v1/admin/brand",
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

//edit
//admin
export function addBrand(data) {
  return new Promise((res, rej) => {
    var config = {
      method: "post",
      url: url + "/api/v1/admin/brand",
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
        console.log(error);
        rej(error);
      });
  });
}

//add
//admin
export function editBrand(data) {
  return new Promise((res, rej) => {
    var config = {
      method: "put",
      url: url + "/api/v1/admin/brand",
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

//update status
export function updateStatusBrand(id) {
  return new Promise((res, rej) => {
    var config = {
      method: "get",
      url: url + "/api/v1/admin/brand/status/" + id,
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

export async function deleteBrand(id) {
  try {
    const res = await axios.delete(url + "/api/v1/admin/brand/delete/" + id, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(res.data);
    return res.data;
  } catch (error) {
    throw new Error(error);
  }
}
