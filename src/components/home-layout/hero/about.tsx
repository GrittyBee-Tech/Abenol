import React from 'react';
// import icon from '/src/assets/images/about-icon.png';
// import icon2 from '/src/assets/images/about-icon2.png';

const About = () => {
  return (
    <section className="bg-about-pattern bg-no-repeat bg-cover -mt-32 ">
      <div className="relative">
        <div className="lg:px-40 px-8 lg:py-32 py-8">
          <div className=" grid lg:grid-flow-col pt-32 lg:pt-24 justify-between lg:gap-52">
            <p className="grid lg:justify-start xt:text-3xl justify-items-center font-semibold font-Inter text-lg text-white">
              About Us
            </p>
            <p className="lg:text-5xl text-2xl text-center lg:text-left font-semibold font-Inter  text-white">
              ABENOL, short for "A Better Nation in Our Lifetime," encapsulates
              our belief that young people are the key to building a better
              future, and we are committed to providing them with the resources
              and support they need to succeed.
            </p>
          </div>
        </div>
        {/* <span className=" lg:block hidden absolute top-32  left-0">
          <img className="" src={icon} alt="hero-image" />
        </span>
        <span className=" lg:block hidden absolute top-32  right-0">
          <img className="" src={icon2} alt="hero-image" />
        </span> */}
      </div>
    </section>
  );
};

export default About;
