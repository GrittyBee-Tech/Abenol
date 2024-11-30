import { useEffect, useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';

import { HashLink } from 'react-router-hash-link';

import React from 'react';
import { NAV_SCHEMA } from '../../../constants/home-layout/nav';

const Navbar = () => {
  const [navOpen, setNavOpen] = useState<Boolean>(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setNavOpen(false);
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [location.pathname]);

  useEffect(() => {
    setNavOpen(false);
  }, [location]);

  return (
    <section className="">
      {/* <MobileNavbar navOpen={navOpen} setNavOpen={setNavOpen} /> */}
      <nav className="lg:px-40 px-6 py-1 grid items-center">
        <div className=" grid grid-flow-col justify-between items-center gap-6 ">
          <NavLink to={''}>
            <span>{/* <img src={logo} alt="Proof logo" /> */}</span>
          </NavLink>
          <ul className="hidden lg:grid lg:grid-flow-col items-center gap-8">
            {NAV_SCHEMA.map(({ link, name, children }) => (
              <li className="group relative" key={link}>
                <NavLink
                  to={link}
                  className={({ isActive }) =>
                    `${
                      isActive
                        ? 'border-b-4 text-[#F8931F] border-[#ED1C24] font-medium'
                        : ''
                    } py-2 text-[#000000] font-Inter cursor-pointer`
                  }
                >
                  {name}
                </NavLink>
                <div className="group-hover:flex hidden pt-2 absolute top-8 left-1/2 -translate-x-1/2 z-10">
                  {children?.length && (
                    <ul
                      className={`bg-white rounded-lg z-10 shadow-md shadow-[#F8931F] text-nowrap ease-in-out duration-500 transition-all flex flex-col font-Inter overflow-hidden`}
                    >
                      {children.map(({ name, link, type }) => {
                        if (type == 'link') {
                          return (
                            <NavLink
                              to={link}
                              key={link}
                              className={({ isActive }) =>
                                `${
                                  isActive ? 'bg-gray-300' : ''
                                } py-2 pl-6 pr-14 hover:bg-gray-100`
                              }
                            >
                              {name}
                            </NavLink>
                          );
                        } else {
                          const basePath = link.includes('#')
                            ? '/get-involved'
                            : location.pathname;
                          return (
                            <HashLink
                              to={`${link}`}
                              key={link}
                              className="py-2 px-6 hover:bg-gray-200"
                            >
                              {name}
                            </HashLink>
                          );
                        }
                      })}
                    </ul>
                  )}
                </div>
              </li>
            ))}
          </ul>

          <button
            onClick={() => navigate('/contact')}
            className=" lg:block hidden bg-[#ED1C24] hover:bg-[#F8931F] font-medium font-Inter rounded-lg py-3 px-7 text-white"
          >
            Contact Us
          </button>
          <div className="lg:hidden">
            <span
              onClick={() => setNavOpen(true)}
              className={navOpen ? 'rotate-90' : 'rotate-0'}
            >
              {/* <Icon type={ICONS.hamburger_icon} size={25} color="#090909" /> */}
            </span>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
