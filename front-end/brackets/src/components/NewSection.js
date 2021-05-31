import React from 'react';

export default function NewSection(){
    return(<section class="recent-game-section spad set-bg" data-setbg="assests/img/recent-game-bg.png">
    <div class="container">
    <div class="section-title">
    <div class="cata new">new</div>
    <h2>Recent Games</h2>
    </div>
    <div class="row">
    <div class="col-lg-4 col-md-6">
    <div class="recent-game-item">
    <div class="rgi-thumb set-bg" data-setbg="assests/img/recent-game/1.jpg">
    <div class="cata new">new</div>
    </div>
    <div class="rgi-content">
    <h5>Free-Fire</h5>
    <p>Play with your friend</p>
        <div class="rgi-extra">
    <div class="rgi-star"><img src="assests/img/icons/star.png" alt="" /></div>
    <div class="rgi-heart"><img src="assests/img/icons/heart.png" alt="" /></div>
    </div>
    </div>
    </div>
    </div>
    <div class="col-lg-4 col-md-6">
    <div class="recent-game-item">
    <div class="rgi-thumb set-bg" data-setbg="assests/img/recent-game/2.jpg">
    <div class="cata racing">racing</div>
    </div>
    <div class="rgi-content">
    <h5>Need for Speed </h5>
    <p>Race to your heart fill</p>
    <div class="rgi-extra">
    <div class="rgi-star"><img src="assests/img/icons/star.png" alt="" /></div>
    <div class="rgi-heart"><img src="assests/img/icons/heart.png" alt="" /></div>
    </div>
    </div>
    </div>
    </div>
    <div class="col-lg-4 col-md-6">
    <div class="recent-game-item">
    <div class="rgi-thumb set-bg" data-setbg="assests/img/recent-game/3.jpg">
    <div class="cata adventure">Adventure</div>
    </div>
    <div class="rgi-content">
    <h5>Mobile Legends</h5>
    <p>Gain extraOrdinary Power to fight along side with your friends </p>
    <div class="rgi-extra">
    <div class="rgi-star"><img src="assests/img/icons/star.png" alt="" /></div>
    <div class="rgi-heart"><img src="assests/img/icons/heart.png" alt="" /></div>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    </section>);
}