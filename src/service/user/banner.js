// var axios = require("axios");
import axios from "axios";
import { getHost } from "@/service/get-host";
let url = getHost();
export async function getAllBannerByCode(code) {
  try {
    var config = {
      method: "get",
      url: url + "/api/v1/user/banner/?code=" + code,
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await axios(config);
    return response.data.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
