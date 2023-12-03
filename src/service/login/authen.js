var axios = require("axios");
import { getHost } from "@/service/get-host";
let url = getHost();

export async function verifyEmail(data) {
  try {
    const res = axios.post(url + "/api/v1/user/email/verify", data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return res.data.status;
  } catch (error) {
    console.error(error);
    const rej = "Verify code failed";
    throw rej;
  }
}

export async function sendToCode(data) {
  try {
    const res = await axios.post(url + "/api/v1/user/sendCode/verify", data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(res.data.status);
    return res.data.status;
  } catch (error) {
    console.error(error);
    const rej = "Sending code failed";
    throw rej;
  }
}

export async function registerUserNew(data) {
  try {
    const res = await axios.post(url + "/api/v1/user/register", data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(res.data.status);
    return res.data.status;
  } catch (error) {
    console.error(error);
    const rej = "Email already exists";
    throw rej;
  }
}

// export function registerUserNew(data) {
//   return new Promise((res, rej) => {
//     var config = {
//       method: "post",
//       url: url + "/api/v1/user/register",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       data: data,
//     };
//     axios(config)
//       .then(function (response) {
//         console.log(response.data.data)
//         res(response.data.data);
//       })
//       .catch(function (error) {
//         console.log(error);
//         rej("Wrong email or password");
//       });
//   });
// }
