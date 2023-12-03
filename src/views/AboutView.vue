<template>
  <div>
    <div class="m-banner">
      <div class="m-banner-details">
        <span></span>
      </div>
    </div>
    <div class="container-fluid mt-3 about-main">
      <div class="row">
        <div class="col-12 d-flex justify-content-center section-one">
          <div class="w-50">
            <h1>GIỚI THIỆU CỬA HÀNG QUẦN ÁO DUY SHOP</h1>
            <hr />
            <p>
              Sứ mệnh của chúng tôi là điều thúc đẩy chúng tôi làm mọi thứ có
              thể để mở rộng tiềm năng của con người. Chúng tôi làm điều đó bằng
              cách tạo ra những đổi mới thể thao đột phá, bằng cách làm cho sản
              phẩm của chúng tôi bền vững hơn, bằng cách xây dựng một đội ngũ
              sáng tạo và đa dạng trên toàn cầu và bằng cách tạo ra tác động
              tích cực trong cộng đồng nơi chúng tôi sống và làm việc.
              <br /><br />
              Có trụ sở tại Beaverton, Oregon, NIKE, Inc. bao gồm các thương
              hiệu Nike, Converse và Jordan.
            </p>
          </div>
        </div>
        <div class="col-12 section-two">
          <div class="container">
            <div class="row">
              <!-- s-1 -->
              <div class="col-6 info-article__image">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/san-ho-do-an-dai-duong.appspot.com/o/banner%2Ft-shirts-pattern-the-simpsons-boozilla-dmedi-0.jpg?alt=media"
                  alt="" srcset="" />
              </div>
              <div class="col-6 align-self-center">
                <div class="pl-2 pb-3">
                  <p class="about-title w-100">SỰ ĐỔI MỚI</p>
                  <hr class="hr--accent" />
                </div>
                <div class="pl-2">
                  <h5>
                    CHÚNG TÔI DÁM TẠO RA CÁC THIẾT KẾ TƯƠNG LAI CHO THỂ THAO
                  </h5>
                  <p>
                    Để tạo những bước tiến lớn trong công việc, chúng tôi chấp
                    nhập rủ roi
                  </p>
                </div>
              </div>
              <!-- s-2 -->
              <div class="col-6 align-self-center">
                <div class="pl-2 pb-3">
                  <p class="about-title w-100">ĐỘI NGŨ CỦA CHÚNG TÔI</p>
                  <hr class="hr--accent" />
                </div>
                <div class="pl-2">
                  <h5>MỘT ĐỘI CÓ NHÂN LỰC, ĐA DẠNG VÀ HOÀ ĐỒNG</h5>
                  <p>Tình yêu gắn bó với chúng tôi</p>
                </div>
              </div>
              <div class="col-6 info-article__image">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/san-ho-do-an-dai-duong.appspot.com/o/banner%2FAbout-Nike-Team_original.jpg?alt=media"
                  alt="" srcset="" />
              </div>
              <!-- s-3 -->
              <div class="col-6 info-article__image">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/san-ho-do-an-dai-duong.appspot.com/o/banner%2FAbout-Nike-Community-Made-to-Play_original.jpg?alt=media"
                  alt="" srcset="" />
              </div>
              <div class="col-6 align-self-center">
                <div class="pl-2 pb-3">
                  <p class="about-title w-100">TÁC ĐỘNG XÃ HỘI & CỘNG ĐỒNG</p>
                  <hr class="hr--accent" />
                </div>
                <div class="pl-2">
                  <h5>THẾ GIỚI CỘNG ĐỒNG CỦA CHÚNG TA</h5>
                  <p>
                    Chúng tôi tin vào sức mạnh của thể thao có thế thay đổi đất
                    nước
                  </p>
                </div>
              </div>
              <!-- s-4 -->
              <div class="col-6 align-self-center">
                <div class="pl-2 pb-3">
                  <p class="about-title w-100">ĐỔI MỚI KINH ĐOANH</p>
                  <hr class="hr--accent" />
                </div>
                <div class="pl-2">
                  <h5>BẢO VỆ TƯƠNG LAI CỦA THẾ GIỚI</h5>
                  <p>
                    Chúng tôi tin tưởng vào một tương lai công bằng, vững
                    mạnh<br />
                    - Một tương lai mà ở đó mọi người cùng phát triển trên một
                    hành tinh lành mạnh và một sân chơi bình đẳng
                  </p>
                </div>
              </div>
              <div class="col-6 info-article__image">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/san-ho-do-an-dai-duong.appspot.com/o/banner%2FAbout-Nike-Sustainability_original.jpg?alt=media"
                  alt="" srcset="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    window.scrollTo(0, 0);
  },
};
</script>
<style>
.m-banner {
  width: 100%;
  background-color: rgb(5, 5, 5);
}

.m-banner-details {
  width: 87%;
  margin: auto;
  padding: 1rem;
}

.m-banner-details>span {
  margin: 0 1rem 0 1rem;
}

@import url("@/assets/user/css/about.css");
</style>
