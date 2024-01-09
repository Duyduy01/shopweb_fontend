var axios = require("axios");
import { getHost } from "@/service/get-host";
let url = getHost();

// Lấy tất cả loại sản phẩm
export async function getAllCate() {
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
    console.error(error);
    throw error;
  }
  // return new Promise((res, rej) => {
  //   var config = {
  //     method: 'get',
  //     url: url+'/api/v2/user/category',
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
  //       rej("Wrong email or password");
  //     });

  // })
}
