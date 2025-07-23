import React from 'react';
import image from '/src/assets/images/hero-image.jpg';
import image1 from '/src/assets/images/hero-image1.png';
import image2 from '/src/assets/images/hero-image2.png';
import image3 from '/src/assets/images/hero-image3.jpg';
import image4 from '/src/assets/images/hero-image4.jpg';
// import image5 from '/src/assets/images/hero-image5.jpg';
import image6 from '/src/assets/images/hero-image6.jpg';
import image7 from '/src/assets/images/hero-image7.jpg';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../generic-layouts/navbar';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import '../../../App.css';
import 'swiper/css';
import 'swiper/css/pagination';

const Hero = () => {
  const navigate = useNavigate();
  return (
    <section className="bg-hero-pattern bg-no-repeat ">
      <Navbar />
      <div className="lg:px-40 lg:pt-10">
        <div className=" relative grid justify-items-center lg:pt-28 gap-6">
          <p className="font-bold lg:text-6xl text-2xl  w-8/12 lg:w-5/12 text-[#000100] font-Inter pt-9 text-center">
            Participate, unite & take action
          </p>
          <p className="lg:w-5/12  text-center font-Inter">
            We strive to foster a generation of informed, active, and socially
            responsible citizens capable of driving positive change in their
            communities and the nation.
          </p>
          <button
            onClick={() => navigate('/about')}
            className=" lg:block  bg-[#99FF99] hover:text-white hover:bg-[#F8931F] text-sm font-medium font-Inter rounded-3xl py-4 px-7 text-[#000100]"
          >
            Learn More
          </button>
        </div>
        <div className="lg:px-0 px-4 lg:pt-36 pt-8 z-50">
          <div
            id="bullets"
            className="absolute !top-[15.5rem] md:!top-[9rem] !left-1/2 !-translate-x-1/2 !bottom-auto !mx-auto !w-fit z-10"
          />
          <Swiper
            slidesPerView={1}
            modules={[Autoplay, Pagination]}
            pagination={{
              type: 'bullets',
              el: '#bullets',
              bulletActiveClass: 'active-bullet',
              bulletClass: 'bullet',
              clickable: true,
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            loop
            speed={1000}
            spaceBetween={32}
          >
            <SwiperSlide className="">
              <span>
                <img
                  className="lg:h-[580px] rounded-3xl lg:w-full"
                  src={image}
                  alt="hero-image"
                />
              </span>
            </SwiperSlide>
            <SwiperSlide className="">
              <span>
                <img
                  className="lg:h-[580px] rounded-3xl lg:w-full"
                  src={image1}
                  alt="hero-image"
                />
              </span>
            </SwiperSlide>
            <SwiperSlide className="">
              <span>
                <img
                  className="lg:h-[580px] rounded-3xl lg:w-full"
                  src={image2}
                  alt="hero-image"
                />
              </span>
            </SwiperSlide>
            <SwiperSlide className="">
              <span>
                <img
                  className="lg:h-[580px] rounded-3xl lg:w-full"
                  src={image3}
                  alt="hero-image"
                />
              </span>
            </SwiperSlide>
            <SwiperSlide className="">
              <span>
                <img
                  className="lg:h-[580px] rounded-3xl lg:w-full"
                  src={image4}
                  alt="hero-image"
                />
              </span>
            </SwiperSlide>
            {/* <SwiperSlide className="">
              <span>
                <img
                  className="lg:h-[580px] rounded-3xl lg:w-full"
                  src={image5}
                  alt="hero-image"
                />
              </span>
            </SwiperSlide> */}
            {/* <SwiperSlide className="">
              <span>
                <img
                  className="lg:h-[580px] rounded-3xl lg:w-full"
                  src={image6}
                  alt="hero-image"
                />
              </span>
            </SwiperSlide> */}
            <SwiperSlide className="">
              <span>
                <img
                  className="lg:h-[580px] rounded-3xl lg:w-full"
                  src={image7}
                  alt="hero-image"
                />
              </span>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Hero;
