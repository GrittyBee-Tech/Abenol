import React from 'react';
import { useNavigate } from 'react-router-dom';
import image from '/src/assets/images/lges.png';
import { PROJECTS_SCHEMA } from '../../../constants/home-layout/projects';

const Projects = () => {
  const navigate = useNavigate();
  return (
    <section className="lg:px-40 px-8 lg:py-24 py-8">
      <div className="grid lg:grid-cols-2 gap-11">
        {PROJECTS_SCHEMA.map(() => {
          return (
            <div className="relative">
              <div>
                <span>
                  <img src={image} alt="Lges" />
                </span>
              </div>
              <div className=" grid justify-items-center">
                <div className="bg-white shadow-md rounded-2xl p-5 absolute  w-[90%] bottom-7">
                  <p>LGES Project</p>
                  <p>
                    Our Local Government Election Sensitization, coined LGES
                    Project, is a storytelling and content creation
                    sensitization campaign dedicated to increasing civic
                    awareness and participation, particularly at the local
                    government level.
                  </p>
                  <button
                    onClick={() => navigate('/donate')}
                    className=" lg:block hidden bg-[#99FF99] hover:text-white hover:bg-[#F8931F] font-medium font-Inter rounded-3xl py-3 px-7 text-[#000100]"
                  >
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
