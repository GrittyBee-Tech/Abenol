import React from 'react';
import Hero from '../components/home-layout/hero/hero';
import About from '../components/home-layout/hero/about';
import Projects from '../components/home-layout/projects/projects';
import Join from '../components/home-layout/join/join';
import Support from '../components/home-layout/support';

const Home = () => {
  return (
    <section>
      <Hero />
      <About />
      <Projects />
      <Join />
      <Support />
    </section>
  );
};

export default Home;
