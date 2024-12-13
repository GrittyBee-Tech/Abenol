import React from 'react';
import image from '/src/assets/images/hero-image.png';
import icon from '/src/assets/images/hero-icon.png';
import icon2 from '/src/assets/images/hero-icon2.png';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();
  return (
    <section className="lg:px-40 lg:pt-10">
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

        <span className=" lg:block hidden absolute top-0 right-0">
          <img className=" " src={icon} alt="hero-image" />
        </span>
        <span className=" lg:block hidden absolute -bottom-40  left-0">
          <img className="" src={icon2} alt="hero-image" />
        </span>
      </div>
      <div className="lg:px-0 px-4 lg:pt-36 pt-8 z-50">
        <span>
          <img
            className="lg:h-[580px] rounded-3xl lg:w-full"
            src={image}
            alt="hero-image"
          />
        </span>
      </div>
    </section>
  );
};

export default Hero;
