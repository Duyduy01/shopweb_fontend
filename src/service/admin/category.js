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
    throw new Error(error);
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
export async function getAllCateInaddProduct() {
  try {
    const res = await axios.get(url + "/api/v2/user/category", {
      headers: {
        "Content-Type": "application/json",
      },
    });
    // Sắp xếp các key
    const sortedKeys = Object.keys(res.data.data).sort();
    // Tạo mảng mới để lưu trữ các khóa theo thứ tự mong muốn
    const sortedCateArray = sortedKeys.map((key) => ({
      [key]: res.data.data[key],
    }));
    // Kết hợp các phần tử trong mảng để tạo một đối tượng mới đã sắp xếp
    res.data.data = Object.assign({}, ...sortedCateArray);
    return res.data.data;
  } catch (error) {
    throw new Error(error);
  }
  // return new Promise((res, rej) => {
  //   var config = {
  //     method: "get",
  //     url: url + "/api/v2/user/category",
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
  //       rej("Wrong email or password");
  //     });
  // });
}
