import React from 'react';
import hero1 from '../img/hero-1.jpg';
import hero2 from '../img/hero-2.jpg';
import hero3 from '../img/hero-3.jpg';
import { HiOutlineRocketLaunch } from 'react-icons/hi2';
import { BsFillCollectionPlayFill } from 'react-icons/bs';


const Hero = () => {
  return (
    <div class="hero">
      <div class="container">
        <div class="row d-flex align-items-center">
          <div class="col-lg-6 hero-left">
            <h1 class="display-4 mb-5">We Love <br />Delicious Foods!</h1>
            <div class="mb-2">
              <a class="primary btn-shadow btn-lg" href="/" role="button">Explore Menu</a>
              <a class="btn btn-icon btn-lg" href="https://player.vimeo.com/video/33110953"
                data-featherlight="iframe" data-featherlight-iframe-allowfullscreen="true">
                <span class="lnr lnr-film-play"><BsFillCollectionPlayFill /></span>
                Play Video
              </a>
            </div>

            <ul class="hero-info list-unstyled d-flex text-center mb-0">
              <li class="border-right">
                <span class="lnr lnr-rocket"><HiOutlineRocketLaunch /></span>
                <h5>
                  Fast Delivery
                </h5>
              </li>
              <li class="border-right">
                <span class="lnr lnr-leaf"></span>
                <h5>
                  Fresh Food
                </h5>
              </li>
              <li class="">
                <span class="lnr lnr-bubble"></span>
                <h5>
                  24/7 Support
                </h5>
              </li>
            </ul>

          </div>
          <div class="col-lg-6 hero-right">
            
            <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
              <div class="carousel-inner">
                <div class="carousel-item active">
                <img class="img-fluid" src={hero1} alt="" />
                </div>
                <div class="carousel-item">
                <img class="img-fluid" src={hero2} alt="" />
                </div>
                <div class="carousel-item">
                <img class="img-fluid" src={hero3} alt="" />
                </div>
              </div>
              <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
