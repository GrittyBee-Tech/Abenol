import React from 'react';
import Hero from '../components/home-layout/hero/hero';
import About from '../components/home-layout/hero/about';
import Projects from '../components/home-layout/projects/projects';
import Join from '../components/home-layout/join/join';
import Support from '../components/home-layout/support';
import Footer from '../components/generic-layouts/footer';

import AbenolPartners from '../components/home-layout/partners';

const Home = () => {
  return (
    <section>
      <Hero />
      <About />
      <AbenolPartners />
      <Projects />
      <Join />
      <Support />
      <Footer />
    </section>
  );
};

export default Home;
