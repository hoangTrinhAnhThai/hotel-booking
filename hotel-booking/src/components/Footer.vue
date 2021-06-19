<template>
 <footer>
      <div class="footer-container">
        <div class="footer-content about-us">
          <div class="footer-title">ABOUT US</div>
          <hr class="hr" />
          <div class="f-content">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
              eveniet quibusdam porro molestias eligendi laborum sint amet
              repellendus pariatur reiciendis praesentium numquam rem sed
              nostrum, asperiores quaerat quam facere officiis.
            </p>
          </div>
          <div class="logo">
            <router-link to="/">
                <span style="font-size: 30px">IrtAoh</span>
                <span>  --</span>
                <span>iah_thna</span>
            </router-link>
        </div>
        </div>
        
        
        <div class="footer-content social">
          <div class="footer-contact">
            <div class="footer-title">CONTACT INFOR</div>
            <hr class="hr" />
            <div class="f-content">
              <ul class="list-infor-footer">
                <li class="infor-footer">
                  <i class="bx bx-envelope-open icon-footer"></i>
                  bookingHotelCNPM@gmail.com
                </li>
                <li class="infor-footer">
                  <i class='bx bx-mobile icon-footer'></i> 01365484574
                </li>
                <li class="infor-footer">
                  <i class="bx bxs-map icon-footer"></i>154 - Nguyen Luong Bang -
                  Lien Chieu - Da Nang
                </li>
              </ul>
            </div>
          </div>
          <div class="footer-connect">
            <div class="footer-title">CONNECT WITH US</div>
            <hr class="hr" />
            <div class="f-content">
              <ul class="list-infor-footer connect">
                <li class="infor-footer">
                  <a href="https://www.instagram.com/" target="_blank">
                    <i class="bx bxl-instagram-alt icon-footer"></i>
                  </a>
                </li>
                <li class="infor-footer">
                  <a href="https://www.facebook.com/" target="_blank">
                    <i class="bx bxl-facebook-square icon-footer"></i>
                  </a>
                </li>
                <li class="infor-footer">
                  <a href="https://twitter.com/?lang=vi" target="_blank">
                    <i class="bx bxl-twitter icon-footer"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>


        <div class="footer-content payment">
          <div class="footer-title">PAYMENT ACCEPTED</div>
          <hr class="hr" />
          <div class="f-content payment-content">
            <span>VISA</span>
            <span>PayPal</span>
            <span>MasterCard</span>
          </div>
        </div>


        <div class="footer-content recent-post">
          <div class="footer-title">RECENT POST</div>
          <hr class="hr" />
          <div class="f-content recent-post-content">
            <a href="#"> post1</a>
            <a href="#"> post2</a>
            <a href="#"> post3</a>
            <a href="#"> post4</a>
            <a href="#"> post5</a>
          </div>
        </div>
      </div>
    </footer>
    
</template>
<script>
export default {
    name: 'Footer'
    
}
</script>
<style scoped>
ul {
    list-style: none;
}

:root {
    --text-color: rgba(253, 252, 253, 0.8);
    --line: rgba(248, 240, 240, .1)
}

body {
    font-family: "Open Sans", Helvetica, Arial, sans-serif;
    letter-spacing: 1px;
    font-weight: lighter;
}

.footer-container {
    
    background-color: rgba(41, 46, 49, 1);
    color:  rgba(253, 252, 253, 0.8);
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}

.hr {
    max-width: 100%;
    margin-left: 0;
    border: 0.5px solid var(--line);
}

.footer-content {
    flex: 1;
    margin: 2% 2%;
}

.about-us {
    margin-left: 5%;
}

.recent-post {
    margin-right: 5%;
}

span {
    margin: 2%;
    padding: 3%;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    border: 1px solid  rgba(253, 252, 253, 0.8);
}

.f-content {
    margin-top: 10%;
    margin-left: 1%;
    padding-left: 0;
}

.icon-footer {
    display: inline-block;
    color:  rgba(253, 252, 253, 0.8);
    max-width: 100%;
    font-size: 140%;
    margin-right: 5%;
}

.list-infor-footer {
    margin-left: 1%;
    padding-left: 1%;
}

.connect li {
    display: inline;
    font-size: 150%;
}

.icon-footer:hover {
    color: rgba(226, 226, 226, 0.5);
    cursor: pointer;
    font-size: 150%;
    transition: .3s ease;
}

.footer-title {
    font-size: 110%;
}

.recent-post-content a {
    display: block;
    text-decoration: none;
    color:  rgba(253, 252, 253, 0.8);
}

p li {
    font-weight: lighter;
    font-size: 50%;
}

.f-logo {
    width: 250px;
    height: 50px;
    /* background-color:  rgba(253, 252, 253, 0.8); */
}

.logo {
    max-width: 100%;
    max-height: 100%;
}
.logo span{
    margin: 0;
    padding: 0;
    border: 0;
    color: #fff;
}
.logo a {
    text-decoration: none;
}
</style>