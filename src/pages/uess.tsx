import React from 'react';
import image from '/src/assets/images/project.png';
import Navbar from '../components/generic-layouts/navbar';
import image5 from '/src/assets/images/facebook2.png';
import image1 from '/src/assets/images/tiktok2.png';
import image2 from '/src/assets/images/instagram2.png';
import image3 from '/src/assets/images/twitter2.png';
import image4 from '/src/assets/images/youtube2.png';

const Uess = () => {
  return (
    <section>
      <Navbar />
      <div className="lg:px-40 lg:py-16 py-8 px-8 lg:justify-normal justify-items-center bg-[#99FF99]">
        <div className="grid lg:grid-flow-col lg:gap-16 gap-4">
          <div className="lg:w-[600px]">
            <img className="w-full" src={image} alt="" />
          </div>
          <div className="bg-white lg:p-14 p-4 lg:w-[600px]  rounded-3xl grid gap-4">
            <p className="font-bold text-[#141414] font-Inter text-sm">
              UESS Project (COMING SOON)
            </p>
            <p className="font-bold text-[#141414] font-Inter text-xl">
              Project Overview
            </p>
            <p className="font-Inter text-sm">
              The University Empowerment and Skill Sharing (UESS) Project aims
              to empower a minimum of 100,000 undergraduates across 20 tertiary
              institutions.
            </p>
            <div className="grid gap-3">
              <p className="font-bold text-[#141414] font-Inter text-sm">
                UNIQUE VALUE PROPOSITION
              </p>
              <p className="font-Inter text-sm">
                UESS provides a unique platform for students to acquire
                in-demand skills, connect with industry professionals and
                develop their entrepreneurial potential and employability skills
                by bridging the gap between academia and the professional world.
                UESS will equip students with the knowledge and tools they need
                to succeed in the 21st centuary job market.
              </p>
            </div>
            <div className="grid gap-3">
              <p className="font-bold text-[#141414] font-Inter text-sm">
                UESS PROJECT GOALS:
              </p>
              <ul className="font-Inter text-sm">
                <li>Empower Young Entrepreneurs</li>
                <li>Enhance Employability Skills</li>
                <li>Create a Mentorship Pathway through Our Alumni System</li>
                <li>Sensitize youths on their civic responsibilities</li>
              </ul>
            </div>
            <div className="grid gap-3">
              <p className="font-bold text-[#141414] font-Inter text-sm">
                NEXT STEPS:
              </p>
              <ul className="font-Inter text-sm">
                <li>
                  Secure funding and partnerships to support the implementation
                  of the project.
                </li>
                <li>
                  Develop a robust curriculum and recruit skilled instructors
                </li>
                <li>
                  Establish partnerships with universities and industry
                  professionals
                </li>
                <li>Launch the pilot program</li>
              </ul>
            </div>

            <div className="grid grid-flow-col w-max items-center gap-3">
              <p className="font-bold text-[#141414] font-Inter text-sm">
                Follow us to learn more
              </p>
              <a href="https://www.tiktok.com/@abenolng">
                <img src={image1} alt="tiktok" />
              </a>
              <a href="https://x.com/Abenolng">
                <img src={image3} alt="x" />
              </a>
              <a href="https://www.instagram.com/abenolng/">
                <img src={image2} alt="instagram" />
              </a>
              <a href="https://www.youtube.com/@abenolng">
                <img src={image4} alt="youtube" />
              </a>
              <a href="https://www.facebook.com/abenolng">
                <img className="w-7 h-7" src={image5} alt="facebook" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Uess;
