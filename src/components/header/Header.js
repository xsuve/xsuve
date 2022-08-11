import { Component } from 'react';
import Button from '../button/Button';

class Header extends Component {
  scrollToContact() {
    const target = document.querySelector('.contact');
    target?.scrollIntoView({
      behavior: 'smooth'
    });
  }

  render() {
    return (
      <div className='grid grid-cols-3 2xl:gap-32 xl:gap-16 gap-8 2xl:h-screen xl:h-screen h-auto 2xl:pl-80 xl:pl-64 pl-0 relative'>
        <div className='flex items-center 2xl:col-span-1 xl:col-span-1 col-span-3 2xl:px-0 xl:px-0 px-6 2xl:pt-0 xl:pt-0 pt-32 2xl:pb-0 xl:pb-0 pb-8'>
          <div className='2xl:text-left xl:text-left text-center'>
            <h1 className='font-prompt text-black 2xl:text-5xl xl:text-4xl text-4xl font-medium !leading-tight'>Seeing solutions where others just see problems.</h1>
            <h6 className='font-poppins text-black 2xl:text-lg xl:text-base text-sm font-normal 2xl:my-16 xl:my-8 my-8 tracking-wider'>FRONT-END WEB DEVELOPMENT EXPERTS</h6>
            <p className='font-poppins text-neutral-400 2xl:text-base xl:text-sm text-sm font-light'>Creative digital experiences through modern solutions.</p>
            <Button color='bg-neutral-800 text-white' className='2xl:mt-16 xl:mt-16 mt-16' onClick={this.scrollToContact}>GET IN TOUCH <span className='ml-4'>&rarr;</span></Button>
          </div>
        </div>
        <div className='2xl:flex xl:flex items-center 2xl:col-span-2 xl:col-span-2 col-span-3 2xl:pb-0 xl:pb-0 pb-8'>
          <img src='header.png' alt='' />
        </div>
      </div>
    );
  }
}

export default Header;