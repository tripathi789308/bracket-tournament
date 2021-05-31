import React from 'react';
 export default function FooterSection(){
     return(<>
        <section class="footer-top-section">
        <div class="container">
        <div class="footer-top-bg">
        <img src="assests/img/footer-top-bg.png" alt="" />
        </div>
        <div class="row">
        <div class="col-lg-4">
        <div class="footer-logo text-white">
        <img src="assests/img/logo.png" style={{width:"90px"}} alt="" />
        </div>
        </div>
        <div class="col-lg-4 col-md-6">
        <div class="footer-widget mb-5 mb-md-0">
        <h4 class="fw-title">Latest Posts</h4>
        <div class="latest-blog">
        <div class="lb-item">
        <div class="lb-thumb set-bg" data-setbg="assests/img/latest-blog/1.jpg"></div>
        <div class="lb-content">
        <div class="lb-date">June 21, 2018</div>
        <p>Play and win awesome Prizes </p>
        <a href="#" class="lb-author">By Goku</a>
        </div>
        </div>
        <div class="lb-item">
        <div class="lb-thumb set-bg" data-setbg="assests/img/latest-blog/2.jpg"></div>
        <div class="lb-content">
        <div class="lb-date">June 21, 2018</div>
        <p>Play and win awesome Prizes  </p>
        <a href="/tournament" class="lb-author">By GodofWar</a>
        </div>
        </div>
        <div class="lb-item">
        <div class="lb-thumb set-bg" data-setbg="assests/img/latest-blog/3.jpg"></div>
        <div class="lb-content">
        <div class="lb-date">June 21, 2018</div>
        <p>Play and win awesome Prizes  </p>
        <a href="/tournament" class="lb-author">By RazorArt</a>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </section>
        
        
        <footer class="footer-section">
        <div class="container">
        <ul class="footer-menu">
        <li><a href="/">Home</a></li>
        <li><a href="/">Games</a></li>
        <li><a href="/tournament">Tournament</a></li>
        <li><a href="/team">Teams</a></li>
        </ul>
        </div>
        </footer>
        </>
     )
 }