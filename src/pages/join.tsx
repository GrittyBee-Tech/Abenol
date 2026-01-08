import React from 'react';
import Join from '../components/home-layout/join/join';
import Footer from '../components/generic-layouts/footer';
import Navbar from '../components/generic-layouts/navbar';
import Projects from '../components/home-layout/projects/projects';

const JoinAbenol = () => {
  return (
    <section>
      <Navbar />
      <Join />
      <Projects/>
      <Footer />
    </section>
  );
};

export default JoinAbenol;
