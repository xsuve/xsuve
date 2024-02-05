import Nav from './components/Nav/Nav';
import Menu from './components/Menu/Menu';
import Header from './sections/Header/Header';
import Presentation from './sections/Presentation/Presentation';
import About from './sections/About/About';
import Projects from './sections/Projects/Projects';
import Testimonials from './sections/Testimonials/Testimonials';
import WhatWeOffer from './sections/Specializations/Specializations';
import WorkTogether from './sections/WorkTogether/WorkTogether';
import Footer from './sections/Footer/Footer';
import DownButton from './components/DownButton/DownButton';
import Logo from './components/Logo/Logo';

export default function Home() {
  return (
    <main className='bg-black'>
      <Logo color='black' isFixed isMixBlendMode />

      <Nav />

      <Menu />

      <Header />

      <Presentation />

      <About />

      <Projects />

      <Testimonials />

      <WhatWeOffer />

      <WorkTogether />

      <Footer />

      <DownButton />
    </main>
  );
}
