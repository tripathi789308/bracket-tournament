import React from 'react';

export default function ReviewSection(){
    return(
        <section class="review-section spad set-bg" data-setbg="assests/img/review-bg.png">
    <div class="container">
    <div class="section-title">
    <div class="cata new">new</div>
    <h2>Recent Reviews</h2>
    </div>
    <div class="row">
    <div class="col-lg-3 col-md-6">
    <div class="review-item">
    <div class="review-cover set-bg" data-setbg="assests/img/review/1.jpg">
    <div class="score yellow">9.3</div>
    </div>
    <div class="review-text">
    <h5>Assasin’’s Creed</h5>
    </div>
    </div>
    </div>
    <div class="col-lg-3 col-md-6">
    <div class="review-item">
    <div class="review-cover set-bg" data-setbg="assests/img/review/2.jpg">
    <div class="score purple">9.5</div>
    </div>
    <div class="review-text">
    <h5>Doom</h5>
    </div>
    </div>
    </div>
    <div class="col-lg-3 col-md-6">
    <div class="review-item">
    <div class="review-cover set-bg" data-setbg="assests/img/review/3.jpg">
    <div class="score green">9.1</div>
    </div>
    <div class="review-text">
    <h5>Overwatch</h5>
    </div>
    </div>
    </div>
    <div class="col-lg-3 col-md-6">
    <div class="review-item">
    <div class="review-cover set-bg" data-setbg="assests/img/review/4.jpg">
    <div class="score pink">9.7</div>
    </div>
    <div class="review-text">
    <h5>GTA</h5>
    </div>
    </div>
    </div>
    </div>
    </div>
    </section>
    )
}