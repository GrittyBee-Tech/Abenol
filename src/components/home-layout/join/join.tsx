import React from 'react';
// import image3 from '/src/assets/images/project3.png';
import { useNavigate } from 'react-router-dom';
import ReactPlayer from 'react-player';

const Join = () => {
  const navigate = useNavigate();
  return (
    <section>
      <div className="lg:px-40 px-8 lg:py-10 py-8">
        <div className="grid lg:grid-cols-2  gap-8">
          <div className="pt-10 ">
            <p className="text-[#023002] grid lg:justify-start justify-items-center font-bold lg:text-6xl text-2xl font-Inter">
              Join Us
            </p>
            <p className="text-[#000100] lg:mt-10 mt-3 lg:text-left text-center  lg:w-9/12 font-medium font-Inter">
              We invite you to join us in our mission to build a better Nigeria.
              Whether you're a young person looking to make a difference, a
              seasoned professional seeking to give back, or an organization
              interested in partnering with us, we welcome your support.
            </p>
            <div className="grid lg:justify-start justify-center">
              <button
                onClick={() => navigate('/about')}
                className=" lg:block  mt-9 bg-[#023002] hover:text-white hover:bg-[#F8931F] text-sm font-medium font-Inter rounded-3xl py-3 px-7 text-white"
              >
                Learn More
              </button>
            </div>
          </div>
          <div className=" grid lg:justify-normal md:justify-items-center">
            <ReactPlayer
              url="https://www.youtube.com/watch?v=UTSV5248Ots&t=82s"
              width="100%"
              height="100%"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Join;
