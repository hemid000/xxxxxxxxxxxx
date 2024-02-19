import React, { useContext, useEffect, useRef, useState } from "react";
import Swiper from "swiper";
import gsap from "gsap";
import "../../../sass/Home.css";
import "swiper/css";
import "swiper/css/scrollbar";
import "../../../../node_modules/swiper/swiper-bundle";
import Navbar from "../../../Layout/Navbar/Navbar";
import { useShowData } from "../Home/Secondtextsect";

import Firstextsect from "../../Pages/Home/Firstextsect";
import Secondtextsect from "../../Pages/Home/Secondtextsect";
import Project from "./Project";
import Footer from "./Footer";

import Listdata1 from "./Listdata1";
import Listdata2 from "./Listdata2";
import Listdata3 from "./Listdata3";
import Listdata4 from "./Listdata4";

const interleaveOffset = 0.75;

const Home = () => {
  const swiperRef = useRef(null);

  const [showListData1, setShowListData1] = useState();
  const [showListData2, setShowListData2] = useState();
  const [showListData3, setShowListData3] = useState();
  const [showListData4, setShowListData4] = useState();

  useEffect(() => {
    const swiper = new Swiper(".swiper-container", {
      direction: "vertical",
      speed: 800,
      mousewheelControl: true,
      mousewheel: {
        releaseOnEdges: true,
      },
      watchSlidesProgress: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: false,
        type: "bullets",
        renderBullet: function (index, className) {
          return (
            '<span class="' + className + '">' + ("0" + (index + 1)) + "</span>"
          );
        },
      },
      on: {
        progress: function () {
          let swiper = this;

          for (let i = 0; i < swiper.slides.length; i++) {
            let slideProgress = swiper.slides[i].progress;
            let innerOffset = swiper.height * interleaveOffset;
            let innerTranslate = slideProgress * innerOffset;

            gsap.set(swiper.slides[i].querySelector(".slide-inner"), {
              y: innerTranslate,
            });
          }
        },
        setTransition: function (slider, speed) {
          let swiper = this;
          for (let i = 0; i < swiper.slides.length; i++) {
            swiper.slides[i].style.transition = speed + "ms";
            swiper.slides[i].querySelector(".slide-inner").style.transition =
              speed + "ms";
          }
        },
      },
    });
    swiperRef.current = swiper;

    swiper.slideTo(0);
  }, []);

  const scrollToSection = (sectionId) => {
    const sectionIndex = [
      "Listdata1",
      "Listdata2",
      "Listdata3",
      "Listdata4",
    ].indexOf(sectionId);

    if (swiperRef.current && sectionIndex == 0) {
      swiperRef.current.slideTo(sectionIndex + 3);
    }
    if (swiperRef.current && sectionIndex == 1) {
      swiperRef.current.slideTo(sectionIndex + 2);
    }
    if (swiperRef.current && sectionIndex == 2) {
      swiperRef.current.slideTo(sectionIndex + 1);
    }
    if (swiperRef.current && sectionIndex == 3) {
      swiperRef.current.slideTo(sectionIndex);
    }
  };

  const scrollToBack = (sectionId) => {
    const sectionIndex = ["Secondtextsect"].indexOf(sectionId);

    swiperRef.current.slideTo(sectionIndex + 2);
  };

  const updateListData = (index) => {
    switch (index) {
      case 1:
        setShowListData1(true);
        break;
      case 2:
        setShowListData2(true);
        break;
      case 3:
        setShowListData3(true);
        break;
      case 4:
        setShowListData4(true);
        break;
      default:
        break;
    }
  };
  const [activeList, setActiveList] = useState(null);
  const handleSetActiveList = (listName) => {
    setActiveList(listName);
  };

  return (
    <div>
      <div className="swiper-container">
        <div className="slider swiper-wrapper">
          <div className="swiper-slide">
            <div className="slide-inner">
              <Navbar />
            </div>
          </div>
          <div className="swiper-slide">
            <div className="slide-inner">
              <Firstextsect />
            </div>
          </div>
          <div className="swiper-slide">
            <div className="slide-inner">
              <Secondtextsect
                scrollToSection={scrollToSection}
                updateListData={updateListData}
                setActiveList={handleSetActiveList}
              />
            </div>
          </div>
          {activeList === "Listdata1" && showListData1 && (
            <>
              <div className="swiper-slide">
                <div className="slide-inner">
                  <Listdata1
                    setBackactive={setActiveList}
                    scrollToBack={scrollToBack}
                  />
                </div>
              </div>
            </>
          )}

          {activeList === "Listdata2" && showListData2 && (
            <>
              <div className="swiper-slide">
                <div className="slide-inner">
                  <Listdata2
                    setBackactive={setActiveList}
                    scrollToBack={scrollToBack}
                  />
                </div>
              </div>
            </>
          )}

          {activeList === "Listdata3" && showListData3 && (
            <>
              <div className="swiper-slide">
                <div className="slide-inner">
                  <Listdata3
                    setBackactive={setActiveList}
                    scrollToBack={scrollToBack}
                  />
                </div>
              </div>
            </>
          )}

          {activeList === "Listdata4" && showListData4 && (
            <>
              <div className="swiper-slide">
                <div className="slide-inner">
                  <Listdata4
                    setBackactive={setActiveList}
                    scrollToBack={scrollToBack}
                  />
                </div>
              </div>
            </>
          )}

          <div className="swiper-slide">
            <div className="slide-inner">
              <Project />
            </div>
          </div>
          <div className="swiper-slide">
            <div className="slide-inner">
              <Footer />
            </div>
          </div>
        </div>
        <div className="swiper-pagination"></div>
      </div>
    </div>
  );
};

export default Home;
