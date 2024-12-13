import React from 'react';
import image from '/src/assets/images/facebook.png';
import image1 from '/src/assets/images/tiktok.png';
import image2 from '/src/assets/images/instagram.png';
import image3 from '/src/assets/images/twitter.png';
import image4 from '/src/assets/images/youtube.png';

const Footer = () => {
  return (
    <section className="lg:px-40 px-8 py-8 lg:py-3 ">
      <div className="bg-[#141414] px-7 py-4 rounded-3xl">
        <div className="grid lg:grid-flow-col items-center justify-between">
          <div className="grid grid-flow-col items-center gap-5">
            <img src={image1} alt="" />
            <img src={image3} alt="" />
            <img src={image2} alt="" />
            <img src={image4} alt="" />
            <img src={image} alt="" />
          </div>
          <div className="grid grid-flow-col gap-3">
            <p className="text-[#FFFFFF80] font-Inter text-sm ">
              Terms of Service
            </p>
            <p className="text-[#FFFFFF80] font-Inter text-sm ">
              Privacy policy
            </p>
          </div>
          <div className="grid grid-flow-col gap-3">
            <p className="text-[#FFFFFF80] font-Inter text-sm ">
              © 2024 ABENOL Foundation
            </p>
            <p className="text-[#FFFFFF80] font-Inter text-sm ">
              All Right Reserved
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
