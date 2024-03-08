<template>
  <footer>
    <div class="footer_content">
      <div class="ctnr">
        <div class="row">
          <div class="footer_content_main col-12 col-sm-6 col-lg-3">
            <div class="footer_content_item xs-flex ai-center">
              <div class="footer_ct_it_img">
                <img
                  class="h-100"
                  src="@/assets/img/ship-img.png"
                  alt="ship cod toàn quốc"
                />
              </div>
              <div class="footer_ct_it_context">
                <h4>Ship cod toàn quốc</h4>
              </div>
            </div>
          </div>
          <div class="footer_content_main col-12 col-sm-6 col-lg-3">
            <div class="footer_content_item xs-flex ai-center">
              <div class="footer_ct_it_img">
                <img class="h-100" src="@/assets/img/calendar.png" alt="" />
              </div>
              <div class="footer_ct_it_context">
                <h4>Đổi trả trong 7 ngày</h4>
              </div>
            </div>
          </div>
          <div class="footer_content_main col-12 col-sm-6 col-lg-3">
            <div class="footer_content_item xs-flex ai-center">
              <div class="footer_ct_it_img">
                <img class="h-100" src="@/assets/img/like.png" alt="" />
              </div>
              <div class="footer_ct_it_context">
                <h4>Cam kết chất lượng sản phẩm</h4>
              </div>
            </div>
          </div>
          <div class="footer_content_main col-12 col-sm-6 col-lg-3">
            <div class="footer_content_item xs-flex ai-center">
              <div class="footer_ct_it_img">
                <img class="h-100" src="@/assets/img/lock.png" alt="" />
              </div>
              <div class="footer_ct_it_context">
                <h4>Bảo vệ thông tin khách hàng</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer_menu ctnr">
      <div class="row">
        <div class="col-12 col-sm-6 col-lg-3">
          <div class="footer_menu_item">
            <h4>Liên hệ</h4>
            <ul class="ft_menu_it_contact">
              <li class="xs-flex ai-center">
                <font-awesome-icon icon="fas fa-map-marker-alt" />
                <p class="d-inline-block">Số 5 Phùng Khoang, Hà Nội</p>
              </li>
              <li class="xs-flex ai-center">
                <font-awesome-icon icon="fas fa-envelope" />
                <a href="mailto:duyduy210701@gmail.com"
                  >duyduy210701@gmail.com</a
                >
              </li>
              <li class="xs-flex ai-center">
                <font-awesome-icon icon="fa-solid fa-phone" />
                <a href="tel:0327386876">0327386876</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-12 col-sm-6 col-lg-3">
          <div class="footer_menu_item">
            <h4>Chính sách</h4>
            <ul class="">
              <li><a href="#">Chính sách đổi trả 7 ngày</a></li>
              <li><a href="#">Chính sách khuyến mãi</a></li>
              <li><a href="#">Chính sách bảo mật</a></li>
              <li><a href="#">Chính sách giao hàng</a></li>
            </ul>
          </div>
        </div>
        <div class="col-12 col-sm-6 col-lg-3">
          <div class="footer_menu_item">
            <h4>Kiến thức mặc đẹp</h4>
            <ul class="">
              <li><a href="#">Blog</a></li>
              <li><a href="#">Group mặc đẹp sống chất</a></li>
            </ul>
          </div>
        </div>
        <div class="col-12 col-sm-6 col-lg-3">
          <div class="footer_menu_icon">
            <h4>Theo dõi chúng tôi</h4>
            <ul class="footer_menu_it_icon icon_wrapper">
              <li class="icon facebook p-relative xs-flex js-center ai-center">
                <a
                  href="https://www.facebook.com/profile.php?id=100008695233283"
                  target="_blank"
                >
                  <div class="tooltip">Facebook</div>
                  <span class="xs-flex js-center ai-center"
                    ><font-awesome-icon icon="fa-brands fa-facebook-f" />
                  </span>
                </a>
              </li>
              <li class="icon twitter p-relative xs-flex js-center ai-center">
                <a href="">
                  <div class="tooltip">Twitter</div>
                  <span class="xs-flex js-center ai-center"
                    ><font-awesome-icon icon="fa-brands fa-twitter"
                  /></span>
                </a>
              </li>
              <li class="icon instagram p-relative xs-flex js-center ai-center">
                <a href="">
                  <div class="tooltip">Instagram</div>
                  <span class="xs-flex js-center ai-center"
                    ><font-awesome-icon icon="fa-brands fa-instagram"
                  /></span>
                </a>
              </li>
              <li class="icon tiktok p-relative xs-flex js-center ai-center">
                <a href="">
                  <div class="tooltip">Tiktok</div>
                  <span class="xs-flex js-center ai-center"
                    ><font-awesome-icon icon="fa-brands fa-tiktok"
                  /></span>
                </a>
              </li>
              <!-- <div class="icon linkedin">
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
                  ><font-awesome-icon
                    icon="fa-brands fa-whatsapp-square"
                    size="2x"
                /></span>
              </div> -->
            </ul>
          </div>
          <!-- <div class="footer_menu_item">
            <h4>Đăng kí bản tin</h4>
            <ul class="">
              <li>
                <p>
                  Đăng ký bản tin của chúng tôi và được giảm giá 10% khi
                  mua hàng lần đầu tiên
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
          </div> -->
        </div>
      </div>
    </div>
    <div class="footer-copyright">
      <!-- <div class="day-sell">
        Thời gian mở cửa: Thứ 2 đến Chủ Nhật từ 8h30 đến 22h (Trừ ngày lễ, ngày
        Tết).
      </div> -->
      <div class="ctnr">
        <div class="xs-block ta-center">
          © Bản quyền thuộc về. Thiết kế website
          <a
            href="https://www.facebook.com/profile.php?id=100008695233283"
            target="_blank"
            ><strong>Duy Nguyen</strong></a
          >
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="css" scoped>
/*------------------------------------*/
/* footer content */
/*------------------------------------*/
.footer_content,
.footer-copyright {
  padding-top: 3rem;
  background-color: var(--color-second);
  color: var(--color-primary);
}
.footer_ct_it_img {
  flex: 0 0 auto;
  width: 4.5rem;
  margin-right: 1.5rem;
}
.footer_ct_it_context {
  flex: 1 1 0px;
}
.footer_content .footer_content_item {
  padding-bottom: 3rem;
}
.footer_content_item h4 {
  font-size: 2.1rem;
  line-height: 1.286;
  margin: 0;
}
/*------------------------------------*/
/* footer main */
/*------------------------------------*/
.footer_menu {
  padding-top: 4rem;
  padding-bottom: 1rem;
}
.footer_menu_item,
.footer_menu_icon {
  padding-bottom: 3rem;
}
.footer_menu_item h4 {
  text-transform: uppercase;
  font-weight: 600;
  margin-bottom: 1rem;
}
.footer_menu_item ul li:not(:first-child) {
  margin-top: 1rem;
}
.footer_menu_item a,
.footer_menu_item p,
.footer_menu_item svg {
  margin: 0;
  font-size: 1.3rem;
  color: var(--color-7);
  transition: color 0.2s;
}
.footer_menu_item a:hover,
.footer_menu_item p:hover {
  color: var(--color-second);
}
.ft_menu_it_contact li svg {
  margin-right: 1rem;
}
.footer_menu_icon a {
  color: var(--color-second);
}
.footer_menu_it_icon li {
  margin-top: 1rem;
}
.footer_menu_it_icon li:not(:first-child) {
  margin-left: 1.5rem;
}
.footer_menu_it_icon li svg {
  width: 1.8rem;
  height: 1.8rem;
}
.icon_wrapper {
  display: inline-flex;
}

.icon_wrapper .icon {
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  flex-direction: column;
  box-shadow: 0 10px 19px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.icon_wrapper .tooltip {
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

.icon_wrapper .tooltip::before {
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

.icon_wrapper .icon:hover .tooltip {
  top: -45px;
  left: 50%;
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
}

.icon_wrapper .icon:hover a span,
.icon_wrapper .icon:hover .tooltip {
  text-shadow: 0px -1px 0px rgba(0, 0, 0, 0.1);
}

.icon_wrapper .facebook:hover,
.icon_wrapper .facebook:hover .tooltip,
.icon_wrapper .facebook:hover .tooltip::before {
  background-color: #3b5999;
  /* color: #ffffff; */
}

.icon_wrapper .twitter:hover,
.icon_wrapper .twitter:hover .tooltip,
.icon_wrapper .twitter:hover .tooltip::before {
  background-color: #46c1f6;
  /* color: #ffffff; */
}

.icon_wrapper .instagram:hover,
.icon_wrapper .instagram:hover .tooltip,
.icon_wrapper .instagram:hover .tooltip::before {
  background-color: #e1306c;
  /* color: #ffffff; */
}

.icon_wrapper .tiktok:hover,
.icon_wrapper .tiktok:hover .tooltip,
.icon_wrapper .tiktok:hover .tooltip::before {
  background-color: #333333;
  /* color: #ffffff; */
}

.icon_wrapper .facebook:hover svg,
.icon_wrapper .twitter:hover svg,
.icon_wrapper .instagram:hover svg,
.icon_wrapper .tiktok:hover svg {
  color: #ffffff;
}
/*------------------------------------*/
/* footer copyright */
/*------------------------------------*/
.footer-copyright {
  padding-top: 1rem;
  padding-bottom: 1.5rem;
  font-size: 1.3rem;
}
.footer-copyright a {
  color: var(--color-primary);
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

/* @media screen and (max-width: 991px) {
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
} */
@media only screen and (min-width: 576px) {
}
@media only screen and (min-width: 768px) {
  .footer_menu_item h4 {
    margin-bottom: 1.5rem;
  }
}
@media only screen and (min-width: 992px) {
}
@media only screen and (min-width: 1200px) {
}
@media only screen and (min-width: 1400px) {
}
</style>
