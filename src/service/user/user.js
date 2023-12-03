var axios = require("axios");
import { getHost } from "@/service/get-host";
let url = getHost();
export async function getUserDetail() {
  try {
    const res = await axios.get(url + "/api/v3/user/detail", {
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
  //     var config = {
  //         method: 'get',
  //         url: url + '/api/v3/user/detail',
  //         headers: {
  //             'Content-Type': 'application/json'
  //         },
  //     };
  //     axios(config)
  //         .then(function (response) {
  //             console.log(response.data.data)
  //             res(response.data.data);
  //         })
  //         .catch(function (error) {
  //             rej(error);
  //         });

  // })
}

export function updateUserInfo(data) {
  return new Promise((res, rej) => {
    var config = {
      method: "post",
      url: url + "/api/v3/user/detail",
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
        rej(error.response.data);
      });
  });
}
