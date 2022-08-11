import { Component } from 'react';

import Button from '../button/Button';

class WorkWithUs extends Component {
  render() {
    return (
      <div className='2xl:px-96 xl:px-80 px-6 2xl:pt-32 xl:pt-16 pt-8 2xl:pb-16 xl:pb-16 pb-8'>
        <div className='bg-red-50 2xl:rounded-3xl xl:rounded-3xl rounded-2xl overflow-hidden 2xl:p-24 xl:p-16 p-8 flex 2xl:flex-row xl:flex-row flex-col 2xl:justify-between xl:justify-between justify-center items-center relative'>
          <div className='2xl:text-left xl:text-left text-center z-20'>
            <h1 className='font-prompt text-black 2xl:text-4xl xl:text-2xl text-xl font-medium mb-4'>Work With Us</h1>
            <p className='font-poppins text-neutral-500 2xl:text-base xl:text-sm text-sm font-light !leading-relaxed'>Let's work together to create something great.</p>
          </div>
          <div className='2xl:mt-0 xl:mt-0 mt-8 z-20'>
            <a href='mailto:george@xsuve.com'>
              <Button color='bg-red-500 text-white'>GET IN TOUCH</Button>
            </a>
          </div>

          <div className='absolute bottom-0 left-0 z-0 opacity-60'>
            <svg viewBox='0 0 1440 320' className='max-w-full'>
              <path className='fill-red-100 z-10' d='M0,32L60,58.7C120,85,240,139,360,133.3C480,128,600,64,720,48C840,32,960,64,1080,101.3C1200,139,1320,181,1380,202.7L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z'></path>
            </svg>
          </div>
          <div className='absolute bottom-0 left-0 z-10 opacity-40'>
            <svg viewBox='0 0 1440 320' className='max-w-full'>
              <path className='fill-red-200 z-0' d='M0,256L120,250.7C240,245,480,235,720,208C960,181,1200,139,1320,117.3L1440,96L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z'></path>
            </svg>
          </div>
        </div>
      </div>
    );
  }
}

export default WorkWithUs;