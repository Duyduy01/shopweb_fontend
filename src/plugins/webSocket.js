import { connect } from "net";
import SockJS from "sockjs-client";
import Stomp from "stompjs";
import { getHost } from "@/service/get-host";

let url = getHost();

// Kết nối đến WebSocket backend
let socket = new SockJS("/spring-websocket-portfolio/portfolio");
var stompClient = Stomp.over(socket);
console.log(stompClient);
var self = this;

// Khi kết nối thành công
function connectWS() {
  stompClient.connect({
    
  }, function (frame) {
    console.log("Connected: " + frame);

    // Đăng ký để nhận dữ liệu từ backend
    stompClient.subscribe("/topic/new-bill", function (message) {
      // Xử lý dữ liệu nhận được từ backend
      const newBillAdded = JSON.parse(message.body);
      console.log(newBillAdded);
      self.$store.dispatch("addBill", newBillAdded);
    });
  });
}

connectWS();

// Gửi tin nhắn tới backend
export function sendBillAdded(billId) {
  if (stompClient != null) {
    stompClient.send("/ws/billAdded", {}, JSON.stringify({ billId: billId }));
  }
}

//dóng kết nối
export function stopTask() {
  if (stompClient != null) {
    stompClient.send("/ws/stop");
  }
}
