<template>
  <footer>
    <div class="banner-footer">
      <div class="ship-detail">
        <div class="ship-icon">
          <img src="@/assets/img/ship-img.png" alt="" />
        </div>
        <div class="ship-context">
          Ship cod
          <br />
          toàn quốc
        </div>
      </div>
      <div class="ship-detail">
        <div class="ship-icon">
          <img src="@/assets/img/calendar.png" alt="" />
        </div>
        <div class="ship-context">
          Đổi Trả
          <br />
          Trong 7 Ngày
        </div>
      </div>
      <div class="ship-detail">
        <div class="ship-icon">
          <img src="@/assets/img/like.png" alt="" />
        </div>
        <div class="ship-context">
          CAM KẾT CHẤT LƯỢNG
          <br />
          SẢN PHẨM
        </div>
      </div>
      <div class="ship-detail">
        <div class="ship-icon">
          <img src="@/assets/img/lock.png" alt="" />
        </div>
        <div class="ship-context">
          BẢO VỆ THÔNG TIN
          <br />
          KHÁCH HÀNG
        </div>
      </div>
    </div>
    <div class="footer-container">
      <div class="get-in-touch">
        <ul class="list-touch">
          <li>
            <h3>Liên hệ</h3>
          </li>
          <li>
            <font-awesome-icon icon="fas fa-map-marker-alt" />
            <a href="">Số 5 Phùng Khoang, Hà Nội</a>
          </li>
          <li>
            <font-awesome-icon icon="fas fa-envelope" />
            <a href="#">duyduy210701@gmail.com</a>
          </li>
          <li>
            <font-awesome-icon icon="fa-solid fa-phone" />
            <a href="#">0327386876</a>
          </li>
        </ul>
      </div>
      <div class="about-us">
        <ul class="list-touch">
          <li>
            <a href="#"><h3>Thông tin khác</h3></a>
          </li>
          <li><a href="#">Thông tin về cửa hàng</a></li>
          <li><a href="#">Vận chuyển</a></li>
          <li><a href="#">Chính sách bảo mật</a></li>
          <li><a href="#">Điền khoản và điều kiện</a></li>
        </ul>
      </div>
      <div class="my-account">
        <ul class="list-touch">
          <li>
            <a href="#"><h3>Tài Khoản</h3></a>
          </li>
          <li><a href="#">Tài Khoản của tôi</a></li>
          <li><a href="#">lịch sử mua hàng</a></li>
          <li><a href="#">giỏ hàng</a></li>
          <li><a href="#">bản tin</a></li>
        </ul>
      </div>
      <div class="news-signup">
        <ul class="list-touch">
          <li><h3>Đăng kí bản tin</h3></li>
          <li>
            <p>
              Đăng ký bản tin của chúng tôi và được giảm <br />giá 10% khi mua
              hàng lần đầu tiên của bạn
            </p>
          </li>
          <li id="subscribe">
            <input
              id="email"
              class="email"
              type="text"
              placeholder="Địa chỉ email của bạn"
            />
            <button id="btn-subscribe">Subscribe</button>
          </li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="day-sell">
        Thời gian mở cửa: Thứ 2 đến Chủ Nhật từ 8h30 đến 22h (Trừ ngày lễ, ngày
        Tết).
      </div>
      <div class="wrapper">
        <div class="icon facebook">
          <div class="tooltip">Facebook</div>
          <span
            ><font-awesome-icon icon="fa-brands fa-facebook" size="2x"
          /></span>
        </div>
        <div class="icon twitter">
          <div class="tooltip">Twitter</div>
          <span
            ><font-awesome-icon icon="fa-brands fa-twitter" size="2x"
          /></span>
        </div>
        <div class="icon instagram">
          <div class="tooltip">Instagram</div>
          <span
            ><font-awesome-icon icon="fa-brands fa-instagram-square" size="2x"
          /></span>
        </div>
        <div class="icon github">
          <div class="tooltip">Github</div>
          <span
            ><font-awesome-icon icon="fa-brands fa-github" size="2x"
          /></span>
        </div>
        <div class="icon linkedin">
          <div class="tooltip">LinkedIn</div>
          <span
            ><font-awesome-icon icon="fa-brands fa-linkedin" size="2x"
          /></span>
        </div>
        <div class="icon youtube">
          <div class="tooltip">Youtube</div>
          <span
            ><font-awesome-icon icon="fa-brands fa-youtube" size="2x"
          /></span>
        </div>
        <div class="icon whatsapp">
          <div class="tooltip">WhatsApp</div>
          <span
            ><font-awesome-icon icon="fa-brands fa-whatsapp-square" size="2x"
          /></span>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="css" scoped>
html {
  font-size: 14px;
}
/* footer */
.banner-footer {
  margin: 3rem 0 0 0;
  width: 100%;
  background-color: black;
  display: flex;
  justify-content: space-around;
}
.ship-detail {
  display: flex;
  padding: 2rem 0;
}
.banner-footer > .ship-icon {
  width: 2.8rem;
  height: 2.8rem;
}
.banner-footer .ship-icon > img {
  width: 2.8rem;
  height: 2.8rem;
}
.ship-context {
  color: #fff;
  font-size: 1rem;
  text-transform: uppercase;
}
/* get-in-touch */

.footer-container {
  width: 100%;
  display: flex;
  justify-content: space-around;
}

.list-touch {
  margin: 2rem 0;
}
.list-touch > li {
  margin: 2rem 0 0 0;
  font-size: 1rem;
  list-style: none;
}
.list-touch > li > a {
  text-decoration: none;
  color: black;
  font-size: 1.1rem;
}
.design::before {
  content: "\f3c5";
  font-size: 1.2rem;
}
#subscribe {
  position: relative;
}
.email {
  width: 18rem;
  height: 3rem;
  border-radius: 2rem;
  padding: 0 1rem;
}
#btn-subscribe {
  position: absolute;
  height: 3rem;
  border-radius: 2rem;
  font-size: 1rem;
  color: #ffffff;
  background-color: black;
  top: 1;
  bottom: 0;
  left: 63%;
  right: 0;
}
/* footer-bottom */
.footer-bottom {
  background-color: black;
  display: flex;
  justify-content: space-between;
}
.day-sell {
  padding: 1rem;
  color: #ffffff;
}
/* icon */
@import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");

*:focus,
*:active {
  outline: none !important;
  -webkit-tap-highlight-color: transparent;
}

.wrapper {
  display: inline-flex;
}

.wrapper .icon {
  position: relative;
  background-color: #f3f3f3;
  border-radius: 50%;
  padding: 1rem;
  margin: 0.7rem;
  width: 2rem;
  height: 2rem;
  font-size: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-shadow: 0 10px 19px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.wrapper .tooltip {
  left: 50%;
  position: absolute;
  top: 0;
  font-size: 1rem;
  background-color: #ffffff;
  color: #ffffff;
  padding: 5px 8px;
  border-radius: 5px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
  opacity: 0;
  pointer-events: none;
  transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.wrapper .tooltip::before {
  position: absolute;
  content: "";
  height: 8px;
  width: 8px;
  background-color: #ffffff;
  bottom: -3px;
  left: 50%;
  transform: translate(-50%) rotate(45deg);
  transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.wrapper .icon:hover .tooltip {
  top: -45px;
  left: 50%;
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
}

.wrapper .icon:hover span,
.wrapper .icon:hover .tooltip {
  text-shadow: 0px -1px 0px rgba(0, 0, 0, 0.1);
}

.wrapper .facebook:hover,
.wrapper .facebook:hover .tooltip,
.wrapper .facebook:hover .tooltip::before {
  background-color: #3b5999;
  color: #ffffff;
}

.wrapper .twitter:hover,
.wrapper .twitter:hover .tooltip,
.wrapper .twitter:hover .tooltip::before {
  background-color: #46c1f6;
  color: #ffffff;
}

.wrapper .instagram:hover,
.wrapper .instagram:hover .tooltip,
.wrapper .instagram:hover .tooltip::before {
  background-color: #e1306c;
  color: #ffffff;
}

.wrapper .github:hover,
.wrapper .github:hover .tooltip,
.wrapper .github:hover .tooltip::before {
  background-color: #333333;
  color: #ffffff;
}

.wrapper .linkedin:hover,
.wrapper .linkedin:hover .tooltip,
.wrapper .linkedin:hover .tooltip::before {
  background-color: #0077b5;
  color: #ffffff;
}

.wrapper .youtube:hover,
.wrapper .youtube:hover .tooltip,
.wrapper .youtube:hover .tooltip::before {
  background-color: #de463b;
  color: #ffffff;
}

.wrapper .whatsapp:hover,
.wrapper .whatsapp:hover .tooltip,
.wrapper .whatsapp:hover .tooltip::before {
  background-color: #25d366;
  color: #ffffff;
}

@media screen and (max-width: 991px) {
  .wrapper .icon {
    position: relative;
    background-color: #f3f3f3;
    border-radius: 50%;
    padding: 15px;
    margin: 7px;
    width: 35px;
    height: 35px;
    font-size: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    box-shadow: 0 10px 19px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    transition: all 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }
  .wrapper .tooltip {
    position: absolute;
    top: 0;
    font-size: 12px;
    background-color: #ffffff;
    color: #ffffff;
    padding: 2.5px 4px;
    border-radius: 5px;
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
    opacity: 0;
    pointer-events: none;
    transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }
}
</style>
