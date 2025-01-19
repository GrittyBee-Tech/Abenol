import React from 'react';
import Hero from '../components/about-layout/hero';
import Team from '../components/about-layout/team';
import Join from '../components/home-layout/join/join';
import Support from '../components/home-layout/support';
import WhoWeAre from '../components/about-layout/about';
import Footer from '../components/generic-layouts/footer';

const About = () => {
  return (
    <section>
      <Hero />
      <WhoWeAre />
      <Team />
      <Join />
      <Support />
      <Footer />
    </section>
  );
};

export default About;
