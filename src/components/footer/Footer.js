import { Component } from 'react';

class Footer extends Component {
  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  render() {
    return (
      <div className='flex justify-between items-center 2xl:px-80 xl:px-64 px-6 2xl:py-8 xl:py-8 py-6 bg-white'>
        <div className='2xl:w-28 xl:w-24 w-20'>
          <img src='/xsuve-logo.svg' alt='xsuve - Seeing solutions where others just see problems.' className='max-w-full' />
        </div>
        <div>
          <button className='2xl:w-10 xl:w-8 w-8 2xl:h-10 xl:h-8 h-8 rounded-full bg-neutral-100 text-neutral-500 flex items-center justify-center cursor-pointer 2xl:text-base xl:text-sm text-sm animate-bounce' onClick={this.scrollToTop}>&uarr;</button>
        </div>
        <div className='font-poppins text-neutral-400 font-normal 2xl:text-sm xl:text-xs text-xs tracking-wider leading-none'>&copy; 2022 XSUVE</div>
      </div>
    );
  }
}

export default Footer;