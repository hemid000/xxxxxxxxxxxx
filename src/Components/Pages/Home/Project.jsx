import React, { useRef, useState } from "react";
import "../../../sass/Project.scss"; // Import your stylesheet here
import secimg1 from "../../../images/Rectangle 1497 (1).png";
import secimg2 from "../../../images/Rectangle 1503.png";
import secimg3 from "../../../images/Rectangle 1505.png";
import secimg4 from "../../../images/Rectangle 1504.png";
import secimg6 from "../../../images/Rectangle 1502.png";
//

import secimg5 from "../../../images/Rectangle 1503.png";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../../../sass/Project.scss";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
const Project = () => {
  return (
    <section id="project">
      <div className="inner_project">
        <h2>Layihələr</h2>
        <div className="cards">
          <>
            <Swiper
              spaceBetween={30}
              loop={true}
              centeredSlides={true}
              slidesPerView={3}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
                loop: true,
              }}
              navigation={true}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper"
            >
              <SwiperSlide>
                {" "}
                <img src={secimg6} alt="Card 1" />
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <img src={secimg2} alt="Card 2" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={secimg3} alt="Card 2" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={secimg4} alt="Card 2" />
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <img src={secimg5} alt="Card 2" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={secimg2} alt="Card 2" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={secimg1} alt="Card 2" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={secimg4} alt="Card 2" />
              </SwiperSlide>
            </Swiper>
          </>
        </div>
      </div>
    </section>
  );
};

export default Project;
