import { Component } from 'react';

import Navbar from '../../components/navbar/Navbar';
import WorkWithUs from '../../components/work-with-us/WorkWithUs';
import Contact from '../../components/contact/Contact';
import Footer from '../../components/footer/Footer';

class Project extends Component {
  constructor() {
    super();
    this.state = {
      project: undefined
    };
  }

  componentDidMount() {
    //
  }

  render() {
    return (
      <>
        <Navbar />

        <div className='2xl:px-96 xl:px-80 px-6 2xl:pt-64 xl:pt-32 pt-8 2xl:pb-16 xl:pb-16 pb-8 text-center font-poppins text-2xl'>Comming soon!</div>

        <WorkWithUs />

        <Contact />

        <Footer />
      </>
    );
  }
}

export default Project;