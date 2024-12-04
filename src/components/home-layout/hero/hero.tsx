import React from 'react';
import image from '/src/assets/images/hero-image.png';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();
  return (
    <section className="lg:px-40">
      <div className="grid justify-items-center gap-6">
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
          className=" lg:block  bg-[#99FF99] hover:text-white hover:bg-[#F8931F] text-sm font-medium font-Inter rounded-3xl py-3 px-7 text-[#000100]"
        >
          Learn More
        </button>
      </div>
      <div className="lg:px-0 px-4 pt-8 z-50">
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
