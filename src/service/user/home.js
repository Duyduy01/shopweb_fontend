import { getHost } from "@/service/get-host";
let url = getHost();
var axios = require("axios");
// let url = "http://localhost:8082"

export function getAllProductAll() {
  return new Promise((res, rej) => {
    var config = {
      method: "get",
      url: url + "/api/v1/user/product-home",
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

export async function getAllProductByOption(option) {
  try {
    const res = await axios.get(
      url + "/api/v1/user/product/option?option=" + option,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return res.data.data;
  } catch (error) {
    console.log(error);
  }
}
