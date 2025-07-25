import React from 'react';
import about from '/src/assets/images/about-image.jpg';
import Navbar from '../../generic-layouts/navbar';

const Hero = () => {
  return (
    <section className="bg-hero-pattern">
      <Navbar />
      <div className="relative lg:px-40 px-8 lg:py-16 py-8">
        <div className="grid lg:grid-flow-col items-center gap-3 justify-between">
          <div className="lg:pt-14">
            <p className="text-[#000100] lg:w-7/12 lg:text-left text-center font-bold font-Inter  text-3xl lg:text-5xl">
              Empowering Young Nigerians to Drive Positive Change
            </p>
          </div>
          <div className="relative">
            <div>
              <img className="rounded-3xl" src={about} alt="about" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
