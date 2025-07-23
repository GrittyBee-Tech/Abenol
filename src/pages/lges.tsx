import React from 'react';
import image from '/src/assets/images/project.jpg';
import Navbar from '../components/generic-layouts/navbar';
import image5 from '/src/assets/images/facebook2.png';
import image1 from '/src/assets/images/tiktok2.png';
import image2 from '/src/assets/images/instagram2.png';
import image3 from '/src/assets/images/twitter2.png';
import image4 from '/src/assets/images/youtube2.png';

const Lges = () => {
  return (
    <section>
      <Navbar />
      <div className="lg:px-40 lg:py-16 py-8 px-4 lg:justify-normal justify-items-center bg-[#99FF99]">
        <div className="grid lg:grid-flow-col lg:gap-7 gap-4">
          <div className="lg:w-[600px]">
            <img src={image} alt="" />
          </div>
          <div className="bg-white lg:p-14 p-4 lg:w-[600px] rounded-3xl grid gap-4">
            <p className="font-bold text-[#141414] font-Inter text-sm">
              LGES Project
            </p>
            <p className="font-bold text-[#141414] font-Inter text-xl">
              Project Overview
            </p>
            <p className="font-Inter text-sm">
              The LGES Project is a youth-led initiative dedicated to raising
              awareness and fostering civic engagement among Nigerian youth,
              particularly in the context of local government (LG) elections.
              Through our innovative approach, we have successfully reached and
              inspired thousands of young people across the country.
            </p>
            <div className="grid gap-3">
              {' '}
              <p className="font-bold text-[#141414] font-Inter text-sm">
                Key Achievements
              </p>
              <p className="font-Inter text-sm">
                Social Media Impact: Our social media campaign has garnered over
                350,000 views and reached over 200,000 accounts organically,
                sparking conversations and inspiring youth to take action. With
                our most viral video, the LG financial autonomy explanation.
                Youth Engagement: We have received numerous direct messages from
                young people expressing their desire to run for LG positions
                and/or learn about their LG. Conference Success: Our LGES
                Conference 1.0 was a resounding success, bringing together young
                leaders, influencers, and policymakers to discuss the importance
                of civic engagement and local governance. Educational Content:
                We have produced engaging and informative content, including
                podcasts, videos, and articles, to educate young people about
                the role of local government and the democratic process.
              </p>
            </div>
            <div className="grid gap-3">
              <p className="font-bold text-[#141414] font-Inter text-sm">
                UNIQUE VALUE PROPOSITION
              </p>
              <p className="font-Inter text-sm">
                ABENOL Foundation is the pioneering organization solely focused
                on sensitizing millennials and Gen-Z about local government
                elections, through creative means. Our 11-month commitment to
                this cause demonstrates our dedication and expertise in this
                area.
              </p>
            </div>
            <div className="grid gap-3">
              <p className="font-bold text-[#141414] font-Inter text-sm">
                LGES PROJECT GOALS:
              </p>
              <p className="font-Inter text-sm">
                Promote Civic Engagement: Encourage young people to participate
                actively in the democratic process. Educate on Local Governance:
                Provide comprehensive information about the roles and
                responsibilities of local government officials. Advocate for
                Financial Autonomy: Advocate for the financial autonomy of local
                governments to enhance their effectiveness and service delivery.
              </p>
            </div>
            <div className="grid gap-3">
              <p className="font-bold text-[#141414] font-Inter text-sm">
                NEXT STEPS:
              </p>
              <p className="font-Inter text-sm">
                Influencer Collaborations: We plan to conduct live sessions with
                influential figures to further promote civic engagement and
                reach a wider audience. Content Creation: We will continue to
                produce engaging podcasts and videos focused on LG financial
                autonomy, accountability, and running for office. Conference
                Planning: We are planning future conferences to target specific
                demographics, such as students and grassroots communities.
              </p>
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

export default Lges;
