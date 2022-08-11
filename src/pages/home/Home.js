import { Component } from 'react';

import Navbar from '../../components/navbar/Navbar';
import Header from '../../components/header/Header';
import WhatWeDo from '../../components/what-we-do/WhatWeDo';
import Testimonials from '../../components/testimonials/Testimonials';
import WorkWithUs from '../../components/work-with-us/WorkWithUs';
import Projects from '../../components/projects/Projects';
import Contact from '../../components/contact/Contact';
import Footer from '../../components/footer/Footer';

class Home extends Component {
  render() {
    return (
      <>
        <Navbar />

        <Header />

        <WhatWeDo />

        <Testimonials />

        <Projects />

        <WorkWithUs />

        <Contact />

        <Footer />
      </>
    );
  }
}

export default Home;