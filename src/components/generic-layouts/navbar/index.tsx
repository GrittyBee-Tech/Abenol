import { useEffect, useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import logo from '/src/assets/brand/logo.png';

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
      <nav className="lg:px-40 px-6 py-2 grid items-center">
        <div className=" grid grid-flow-col justify-between items-center gap-6 ">
          <NavLink to={''}>
            <span>
              {' '}
              <img src={logo} alt="abenol logo" />
            </span>
          </NavLink>
          <div className="grid grid-flow-col gap-6">
            <ul className="hidden lg:grid lg:grid-flow-col items-center gap-8">
              {NAV_SCHEMA.map(({ link, name }) => (
                <li className="group relative" key={link}>
                  <NavLink
                    to={link}
                    className={({ isActive }) =>
                      `${
                        isActive
                          ? 'border-b-4 text-[#39af39] border-[#2b7d2b] font-medium'
                          : ''
                      } py-2 text-[#000000] font-Inter cursor-pointer`
                    }
                  >
                    {name}
                  </NavLink>
                </li>
              ))}
            </ul>

            <button
              onClick={() => navigate('/donate')}
              className=" lg:block hidden bg-[#99FF99] hover:text-white hover:bg-[#F8931F] font-medium font-Inter rounded-3xl py-3 px-7 text-black"
            >
              Donate
            </button>
          </div>

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
