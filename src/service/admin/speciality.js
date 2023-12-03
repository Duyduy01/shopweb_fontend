var axios = require("axios");
import { getHost } from "@/service/get-host";
let url = getHost();
export function getAllSpe() {
  return new Promise((res, rej) => {
    var config = {
      method: "get",
      url: url + "/api/v1/user/speciality",
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

export async function getSpeById(id) {
  try {
    const res = await axios.get(url + `/api/v1/user/speciality/${id}`, {
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

export async function getParentSpeById(id) {
  try {
    const res = await axios.get(url + `/api/v1/admin/speciality/parent/${id}`, {
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

export async function getAllChildSpeByParentId(id) {
  try {
    const res = await axios.get(url + `/api/v1/admin/speciality/child/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return res.data.data;
  } catch (error) {
    console.error(error);
    return error;
  }
}

// Lấy tất cả loại nhãn (màu sắc, chất liệu, kích thước)
export async function getTypeSpe() {
  try {
    const res = await axios.get(url + "/api/v1/user/speciality/key", {
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
  //     url: url + '/api/v1/user/speciality/key',
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
// manager speciality

export function getAdminSpe() {
  return new Promise((res, rej) => {
    var config = {
      method: "get",
      url: url + "/api/v1/admin/speciality",
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

export function addSpeNew(data) {
  return new Promise((res, rej) => {
    var config = {
      method: "post",
      url: url + "/api/v1/admin/speciality/new",
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

export function addSpeOld(data) {
  return new Promise((res, rej) => {
    var config = {
      method: "post",
      url: url + "/api/v1/admin/speciality/old",
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

export function editSpe(data) {
  return new Promise((res, rej) => {
    var config = {
      method: "put",
      url: url + "/api/v1/admin/speciality",
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

export function updateStatus(data) {
  return new Promise((res, rej) => {
    var config = {
      method: "post",
      url: url + "/api/v1/admin/speciality/status/" + data,
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
// manager speciality
