import React from 'react';
import image from '/src/assets/images/project1.jpg';
import Navbar from '../components/generic-layouts/navbar';
import image5 from '/src/assets/images/facebook2.png';
import image1 from '/src/assets/images/tiktok2.png';
import image2 from '/src/assets/images/instagram2.png';
import image3 from '/src/assets/images/twitter2.png';
import image4 from '/src/assets/images/youtube2.png';

const Pvc = () => {
  return (
    <section>
      <Navbar />
      <div className="lg:px-40 lg:py-16 py-8 px-8 lg:justify-normal justify-items-center bg-[#99FF99]">
        <div className="grid lg:grid-flow-col lg:gap-7 gap-4">
          <div className="lg:w-[600px]">
            <img src={image} alt="" />
          </div>
          <div className="bg-white lg:p-14 p-4 lg:w-[600px] rounded-3xl grid gap-4">
            <p className="font-bold text-[#141414] font-Inter text-sm">
              PVC WAKA
            </p>
            <p className="font-bold text-[#141414] font-Inter text-xl">
              Project Overview
            </p>
            <p className="font-Inter text-sm">
              PVC WAKA is a youth-led campaign dedicated to increasing voter
              registration and participation among young Nigerians. Launched in
              November 2021, the project has successfully mobilized thousands of
              young people to exercise their civic duty.
            </p>
            <div className="grid gap-3">
              {' '}
              <p className="font-bold text-[#141414] font-Inter text-sm">
                Key Achievements
              </p>
              <ul>
                <li className="font-Inter text-sm">
                  Successfully registered over 500,000 Nigerian citizens, online
                  and offline, for their PVCs during the 2023 general elections.
                </li>
                <li>
                  {' '}
                  Established a network of over 300 volunteers across 8 states.
                </li>
                <li>
                  Selected to represent Nigeria in the ongoing UNDP SAHEL
                  campaign, showcasing the impact of youth-led initiatives in
                  promoting civic engagement.
                </li>
              </ul>
            </div>
            <div className="grid gap-3">
              <p className="font-bold text-[#141414] font-Inter text-sm">
                UNIQUE VALUE PROPOSITION
              </p>
              <p className="font-Inter text-sm">
                PVC WAKA stands out by leveraging technology and grassroots
                mobilization to empower young people. Our innovative approach,
                utilizing digital platforms and a dedicated network of
                volunteers, has proven highly effective in reaching and engaging
                young voters.
              </p>
            </div>
            <div className="grid gap-">
              <p className="font-bold text-[#141414] font-Inter text-sm">
                PVC PROJECT GOALS:
              </p>
              <ul className="grid gap-2">
                <li className="font-Inter text-sm">
                  Increase voter registration among young Nigerians
                </li>
                <li className="font-Inter text-sm">
                  Promote informed and active participation in elections.
                </li>
                <li className="font-Inter text-sm">
                  Advocate for electoral reforms and improved voter education
                </li>
              </ul>
            </div>
            <div className="grid gap-3">
              <p className="font-bold text-[#141414] font-Inter text-sm">
                NEXT STEPS:
              </p>
              <ul className="grid gap-2">
                <li className="font-Inter text-sm">
                  Expand outreach efforts to reach a wider audience of young
                  people
                </li>
                <li className="font-Inter text-sm">
                  Strengthen partnerships with civil society organizations and
                  youth groups.
                </li>
                <li className="font-Inter text-sm">
                  Advocate for policies that enhance voter access and
                  participation.
                </li>
              </ul>
            </div>
            <div className="grid grid-flow-col w-max items-center gap-3">
              <p className="font-bold text-[#141414] font-Inter text-sm">
                Follow us to learn more
              </p>
              <a
                href="https://www.tiktok.com/@abenolng"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={image1} alt="tiktok" />
              </a>
              <a
                href="https://x.com/Abenolng"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={image3} alt="x" />
              </a>
              <a
                href="https://www.instagram.com/abenolng/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={image2} alt="instagram" />
              </a>
              <a
                href="https://www.youtube.com/@abenolng"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={image4} alt="youtube" />
              </a>
              <a
                href="https://www.facebook.com/abenolng"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="w-7 h-7" src={image5} alt="facebook" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pvc;
