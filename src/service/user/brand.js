import { getHost } from "@/service/get-host";

var axios = require("axios");
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
}
