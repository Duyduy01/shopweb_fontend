var axios = require("axios");
import { getHost } from "@/service/get-host";
let url = getHost();
export async function login(credential) {
  try {
    const data = JSON.stringify(credential);
    const res = await axios.post(url + "/api/v1/user/login", data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return res.data;
  } catch (error) {
    throw new Error(error);
  }
}

// export function register(credential) {
//     return new Promise((res, rej) => {
//         axios.post('/api/auth/register', credential)
//             .then(result => {
//                 res(result.data);
//             })
//             .catch(err => {
//                 rej(err);
//             })
//     })
// }

export function currentUser() {
  const user = localStorage.getItem("user");

  if (!user) {
    return null;
  }

  return JSON.parse(user);
}
