import React from "react";

import Product from "./Product";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./Home.css";
function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <div className="home_image">
          <Carousel
            autoPlay={true}
            infiniteLoop={true}
            showArrows={false}
            showStatus={false}
            dynamicHeight={true}
            showThumbs={false}
          >
            <img src="https://m.media-amazon.com/images/I/71MwDPWV9XL._SX3000_.jpg" alt="" />
            <img src="https://m.media-amazon.com/images/I/61bRd1hd+CL._SX3000_.jpg" alt="" />
            <img src="https://m.media-amazon.com/images/I/719mRKY7JsL._SX3000_.jpg" alt="" />
          </Carousel>
        </div>
        <div className="home_row">
          <Product
            id="1"
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses "
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
            rating={4}
          />
          <Product
            id="2"
            title="Canon EOS 1500D 24.1 Digital SLR Camera (Black) with EF S18-55 is II Lens"
            price={159.0}
            image="https://images-eu.ssl-images-amazon.com/images/I/914hFeTU2-L._AC_UL200_SR200,200_.jpg"
            rating={5}
          />
        </div>
        <div className="home_row">
          <Product
            id="3"
            title="Mi Smart Band 5 – India’s No. 1 Fitness Band, 1.1-inch AMOLED Color Display, Magnetic Charging, 2 Weeks Battery Life, Personal Activity Intelligence (PAI), Women’s Health Tracking "
            price={199.0}
            image="https://m.media-amazon.com/images/I/719ZywAmvOL._SY450_.jpg"
            rating={3}
          />
          <Product
            id="4"
            title="boAt Airdopes 121v2 Truly Wireless Bluetooth in Ear Earbuds with Mic (Active Black) "
            price={169.69}
            image="https://m.media-amazon.com/images/I/71ByNT34bfL._SX450_.jpg"
            rating={4}
          />
          <Product
            id="5"
            title="ThePaper9Store Pack of 12 Jujutsu Kaisen Poster Glossy | Set Anime HD+ Photos Unframed Self Adhesive (21 x 29.7 CMS) (Size - A4) Paper Wall Poster, Multicolour, Boderless, Large | Exclusive Posters"
            price={69.69}
            image="https://images-eu.ssl-images-amazon.com/images/I/61oSXjH0dYS._SX300_SY300_QL70_FMwebp_.jpg"
            rating={5}
          />
        </div>

        <div className="home_row">
          <Product
            id="6"
            title="HP AlO Ryzen 3 3250U 54.6 cm (21.5-inch) FHD All-in-One Desktop with Alexa Built in (8GB/1TB HDD/Windows 10/MS Office 2019/Wired Keyboard & Mouse), 22-df0444in "
            price={459.99}
            image="https://m.media-amazon.com/images/I/71037GQ0U7L._SX679_.jpg"
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
