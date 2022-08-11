import { Component } from 'react';

import config from '../../config';

class WhatWeDo extends Component {
  scrollToProjects() {
    const target = document.querySelector('.projects');
    target?.scrollIntoView({
      behavior: 'smooth'
    });
  }

  render() {
    return (
      <div className='2xl:px-44 xl:px-32 px-6 2xl:py-32 xl:py-16 py-8'>

        <div className='bg-[#eff9fa] 2xl:rounded-3xl xl:rounded-3xl rounded-2xl overflow-hidden grid grid-cols-5 2xl:mr-36 xl:mr-24 mr-0 2xl:mb-32 xl:mb-16 mb-6'>
          <div className='2xl:px-36 xl:px-24 px-12 2xl:py-32 py-12 2xl:col-span-2 xl:col-span-2 col-span-5'>
            <div className='bg-[#b3e2e7] rounded-full flex items-center justify-center 2xl:w-16 xl:w-12 w-10 2xl:h-16 h-10 xl:h-12 mb-8'>
              <svg viewBox='0 0 1024 1024' className='2xl:w-7 xl:w-6 w-5 2xl:h-7 xl:h-6 h-5'><path fill='black' d='M435.2 1024c-116.246 0-225.534-45.269-307.733-127.467s-127.467-191.488-127.467-307.733c0-116.246 45.269-225.534 127.467-307.733s191.486-127.467 307.733-127.467c14.138 0 25.6 11.462 25.6 25.6v384h384c14.139 0 25.6 11.461 25.6 25.6 0 116.245-45.269 225.534-127.467 307.733s-191.488 127.467-307.733 127.467zM409.6 205.643c-199.842 13.226-358.4 180.026-358.4 383.157 0 211.739 172.262 384 384 384 203.131 0 369.931-158.558 383.157-358.4h-383.157c-14.138 0-25.6-11.461-25.6-25.6v-383.157z'></path><path fill='black' d='M947.2 512h-409.6c-14.139 0-25.6-11.462-25.6-25.6v-409.6c0-14.138 11.461-25.6 25.6-25.6 116.245 0 225.534 45.269 307.733 127.467s127.467 191.486 127.467 307.733c0 14.138-11.461 25.6-25.6 25.6zM563.2 460.8h357.557c-12.664-191.374-166.184-344.891-357.557-357.557v357.557z'></path></svg>
            </div>
            <h1 className='font-prompt text-black 2xl:text-4xl xl:text-3xl text-2xl font-medium mb-4'>Research</h1>
            <p className='font-poppins text-neutral-500 2xl:text-base xl:text-sm text-sm font-light 2xl:mb-16 xl:mb-16 mb-12 !leading-relaxed'>We explore and research what needs to be improved.</p>
            <button className='font-poppins text-black 2xl:text-sm xl:text-xs text-xs font-medium tracking-wider cursor-pointer' onClick={this.scrollToProjects}>SEE OUR WORK</button>
          </div>
          <div className='2xl:col-span-3 xl:col-span-3 col-span-5 order-last relative flex justify-center'>
            <img src={config.api + '/projects/papers/1.png'} alt='' className='rounded-tl-3xl 2xl:absolute xl:absolute relative max-h-full 2xl:-bottom-8 xl:-bottom-8 -bottom-0 2xl:-right-0 xl:-right-0 -right-8' />
          </div>
        </div>

        <div className='bg-[#eef9f2] 2xl:rounded-3xl xl:rounded-3xl rounded-2xl overflow-hidden grid grid-cols-5 2xl:ml-36 xl:ml-24 ml-0 2xl:mb-32 xl:mb-16 mb-6'>
          <div className='2xl:col-span-3 xl:col-span-3 col-span-5 2xl:order-first xl:order-first order-last relative flex justify-center 2xl:pl-32 xl:pl-16'>
            <img src={config.api + '/projects/arhivaulbs/mobile.png'} alt='' className='2xl:absolute xl:absolute relative max-h-full' />
          </div>
          <div className='2xl:px-36 xl:px-24 px-12 2xl:py-32 py-12 2xl:col-span-2 xl:col-span-2 col-span-5'>
            <div className='bg-[#ceedd8] rounded-full flex items-center justify-center 2xl:w-16 xl:w-12 w-10 2xl:h-16 xl:h-12 h-10 mb-8'>
              <svg viewBox='0 0 1024 1024' className='2xl:w-7 xl:w-6 w-5 2xl:h-7 xl:h-6 h-5'><path fill='black' d='M390.71 1008.755c-2.109 0-4.248-0.262-6.378-0.81-45.976-11.803-90.149-30.042-131.291-54.21-11.923-7.003-16.13-22.21-9.501-34.344 8.15-14.925 12.459-31.866 12.459-48.992 0-56.464-45.936-102.4-102.4-102.4-17.125 0-34.066 4.309-48.992 12.459-12.133 6.627-27.339 2.421-34.342-9.501-24.17-41.142-42.408-85.315-54.211-131.293-3.333-12.989 3.92-26.349 16.629-30.629 41.699-14.037 69.717-53.034 69.717-97.037s-28.018-83-69.718-97.040c-12.707-4.278-19.962-17.638-16.627-30.627 11.803-45.976 30.042-90.149 54.211-131.291 7.003-11.923 22.21-16.13 34.344-9.501 14.923 8.15 31.864 12.459 48.99 12.459 56.464 0 102.4-45.936 102.4-102.4 0-17.126-4.309-34.067-12.459-48.99-6.629-12.134-2.422-27.341 9.501-34.344 41.141-24.168 85.314-42.408 131.291-54.211 12.994-3.334 26.349 3.92 30.627 16.627 14.040 41.701 53.037 69.718 97.040 69.718s83-28.018 97.038-69.717c4.28-12.71 17.645-19.965 30.629-16.629 45.976 11.802 90.15 30.042 131.293 54.211 11.922 7.003 16.128 22.208 9.501 34.342-8.152 14.926-12.461 31.867-12.461 48.992 0 56.464 45.936 102.4 102.4 102.4 17.126 0 34.067-4.309 48.992-12.459 12.138-6.629 27.341-2.421 34.344 9.501 24.166 41.141 42.406 85.314 54.21 131.291 3.334 12.989-3.918 26.349-16.627 30.627-41.701 14.040-69.718 53.037-69.718 97.040s28.018 83 69.718 97.038c12.707 4.28 19.962 17.638 16.627 30.629-11.803 45.976-30.042 90.15-54.21 131.291-7.005 11.925-22.208 16.128-34.344 9.502-14.926-8.152-31.867-12.461-48.992-12.461-56.464 0-102.4 45.936-102.4 102.4 0 17.125 4.309 34.066 12.461 48.992 6.627 12.136 2.421 27.341-9.502 34.344-41.141 24.166-85.314 42.406-131.291 54.21-12.992 3.336-26.349-3.918-30.629-16.627-14.038-41.701-53.035-69.718-97.038-69.718s-83 28.018-97.040 69.718c-3.578 10.624-13.502 17.437-24.25 17.437zM512 870.4c57.715 0 109.693 32.138 135.917 82.029 26.637-8.218 52.507-18.875 77.299-31.846-5.541-16.077-8.416-33.075-8.416-50.182 0-84.696 68.904-153.6 153.6-153.6 17.107 0 34.106 2.875 50.181 8.418 12.971-24.792 23.63-50.662 31.846-77.299-49.89-26.226-82.027-78.203-82.027-135.918s32.138-109.691 82.029-135.918c-8.218-26.637-18.875-52.506-31.846-77.299-16.077 5.542-33.074 8.418-50.182 8.418-84.696 0-153.6-68.904-153.6-153.6 0-17.107 2.875-34.106 8.418-50.181-24.792-12.971-50.662-23.63-77.299-31.846-26.226 49.89-78.203 82.027-135.918 82.027s-109.691-32.138-135.917-82.027c-26.637 8.216-52.507 18.874-77.299 31.846 5.542 16.075 8.416 33.072 8.416 50.181 0 84.696-68.904 153.6-153.6 153.6-17.109 0-34.106-2.874-50.181-8.418-12.973 24.794-23.63 50.662-31.846 77.299 49.89 26.227 82.027 78.203 82.027 135.918s-32.138 109.693-82.027 135.917c8.216 26.637 18.875 52.507 31.846 77.299 16.075-5.541 33.074-8.416 50.181-8.416 84.696 0 153.6 68.904 153.6 153.6 0 17.109-2.875 34.106-8.418 50.181 24.794 12.971 50.662 23.63 77.299 31.846 26.227-49.89 78.203-82.027 135.918-82.027z'></path><path fill='black' d='M512 665.6c-84.696 0-153.6-68.904-153.6-153.6s68.904-153.6 153.6-153.6 153.6 68.904 153.6 153.6-68.904 153.6-153.6 153.6zM512 409.6c-56.464 0-102.4 45.936-102.4 102.4s45.936 102.4 102.4 102.4c56.464 0 102.4-45.936 102.4-102.4s-45.936-102.4-102.4-102.4z'></path></svg>
            </div>
            <h1 className='font-prompt text-black 2xl:text-4xl xl:text-3xl text-2xl font-medium mb-4'>Build</h1>
            <p className='font-poppins text-neutral-500 2xl:text-base xl:text-sm text-sm font-light 2xl:mb-16 xl:mb-16 mb-12 !leading-relaxed'>We build using robust and modern technologies.</p>
            <button className='font-poppins text-black 2xl:text-sm xl:text-xs text-xs font-medium tracking-wider cursor-pointer' onClick={this.scrollToProjects}>SEE OUR WORK</button>
          </div>
        </div>

        <div className='bg-[#eef3fd] 2xl:rounded-3xl xl:rounded-3xl rounded-2xl overflow-hidden grid grid-cols-5 2xl:mr-36 xl:mr-24 mr-0 2xl:mb-32 xl:mb-16 mb-6'>
          <div className='2xl:px-36 xl:px-24 px-12 2xl:py-32 py-12 2xl:col-span-2 xl:col-span-2 col-span-5'>
            <div className='bg-[#ccdcf9] rounded-full flex items-center justify-center 2xl:w-16 xl:w-12 w-10 2xl:h-16 xl:h-12 h-10 mb-8'>
              <svg viewBox='0 0 1024 1024' className='2xl:w-7 xl:w-6 w-5 2xl:h-7 xl:h-6 h-5'><path fill='black' d='M967.68 368.64l-153.6-204.8c-3.95-5.267-9.776-8.81-16.272-9.891l-307.2-51.2c-2.786-0.464-5.632-0.464-8.418 0l-307.2 51.2c-6.494 1.082-12.322 4.626-16.27 9.891l-153.6 204.8c-7.339 9.786-6.731 23.395 1.451 32.486l460.8 512c4.856 5.394 11.771 8.474 19.029 8.474s14.173-3.080 19.029-8.475l460.8-512c8.182-9.091 8.79-22.699 1.451-32.485zM654.65 358.4l-168.25 462.691-168.251-462.691h336.501zM343.405 307.2l142.995-142.995 142.995 142.995h-285.99zM560.989 166.384l189.349 31.558-63.115 94.674-126.234-126.232zM285.579 292.616l-63.117-94.674 189.349-31.558-126.232 126.232zM239.096 315.194l-152.813 30.563 91.688-122.25 61.125 91.686zM265.058 362.216l152.285 418.784-342.642-380.712 190.357-38.072zM707.744 362.216l190.357 38.072-342.643 380.712 152.286-418.784zM733.704 315.194l61.125-91.688 91.688 122.25-152.813-30.562z'></path></svg>
            </div>
            <h1 className='font-prompt text-black 2xl:text-4xl xl:text-3xl text-2xl font-medium mb-4'>Value</h1>
            <p className='font-poppins text-neutral-500 2xl:text-base xl:text-sm text-sm font-light 2xl:mb-16 xl:mb-16 mb-12 !leading-relaxed'>We launch solutions that bring real value to the people.</p>
            <button className='font-poppins text-black 2xl:text-sm xl:text-xs text-xs font-medium tracking-wider cursor-pointer' onClick={this.scrollToProjects}>SEE OUR WORK</button>
          </div>
          <div className='2xl:col-span-3 xl:col-span-3 col-span-5 order-last relative flex justify-center 2xl:pt-8 xl:pt-4 2xl:px-0 xl:px-0 px-4'>
            <img src={config.api + '/projects/parklo/mobile.png'} alt='' className='2xl:absolute xl:absolute relative max-h-full' />
          </div>
        </div>

        <div className='bg-[#f5effc] 2xl:rounded-3xl xl:rounded-3xl rounded-2xl overflow-hidden grid grid-cols-5 2xl:ml-36 xl:ml-24 ml-0'>
          <div className='2xl:col-span-3 xl:col-span-3 col-span-5 2xl:order-first xl:order-first order-last relative flex justify-center'>
            <img src={config.api + '/projects/vault/1.png'} alt='' className='rounded-tr-3xl 2xl:absolute xl:absolute relative max-h-full 2xl:-bottom-8 xl:-bottom-8 -bottom-0 2xl:-left-0 xl:-left-0 -left-8' />
          </div>
          <div className='2xl:px-36 xl:px-24 px-12 2xl:py-32 py-12 2xl:col-span-2 xl:col-span-2 col-span-5'>
            <div className='bg-[#e1d1f6] rounded-full flex items-center justify-center 2xl:w-16 xl:w-12 w-10 2xl:h-16 xl:h-12 h-10 mb-8'>
              <svg viewBox='0 0 1024 1024' className='2xl:w-7 xl:w-6 w-5 2xl:h-7 xl:h-6 h-5'><path fill='black' d='M691.2 460.8c-70.579 0-128-57.421-128-128s57.421-128 128-128 128 57.421 128 128-57.421 128-128 128zM691.2 256c-42.347 0-76.8 34.453-76.8 76.8s34.453 76.8 76.8 76.8 76.8-34.453 76.8-76.8-34.453-76.8-76.8-76.8z'></path><path fill='black' d='M25.603 1024c-6.675 0-13.219-2.613-18.106-7.499-7.034-7.034-9.355-17.502-5.957-26.85 78.781-216.648 161.613-326.499 246.195-326.499 27.883 0 53.979 11.96 77.566 35.546 37.283 37.283 38.611 74.394 33.162 98.96-17.125 77.187-126.171 152.822-324.115 224.802-2.853 1.038-5.813 1.541-8.746 1.541zM247.736 714.354c-25.354 0-55.19 22.214-86.282 64.237-30.578 41.33-61.274 100.205-91.525 175.477 68.352-27.478 123.302-55.379 163.806-83.205 54.648-37.542 70.808-66.562 74.742-84.294 3.944-17.779-2.395-34.682-19.382-51.667-13.826-13.826-27.354-20.547-41.36-20.547z'></path><path fill='black' d='M998.4 0c-132.848 0-251.256 22.534-351.939 66.981-82.997 36.638-154.075 88.075-211.258 152.882-10.674 12.098-20.552 24.334-29.691 36.586-44.142 2.942-89.275 20.47-134.362 52.221-38.13 26.851-76.459 64.014-113.923 110.458-62.965 78.054-101.706 154.987-103.325 158.226-5.605 11.211-2.25 24.814 7.904 32.166 4.501 3.258 9.758 4.856 14.992 4.856 6.573 0 13.109-2.52 18.064-7.434 0.243-0.24 24.714-24.299 66.469-47.926 34.41-19.474 87.461-42.336 151.613-46.384 16.219 41.541 62.662 91.181 84.954 113.47 22.291 22.291 71.931 68.734 113.472 84.955-4.046 64.152-26.91 117.202-46.382 151.611-23.629 41.757-47.686 66.227-47.89 66.432-8.878 8.878-10.006 22.885-2.666 33.070 4.952 6.87 12.77 10.634 20.782 10.634 3.867 0 7.779-0.877 11.434-2.704 3.237-1.619 80.17-40.36 158.226-103.325 46.443-37.464 83.606-75.794 110.458-113.922 31.75-45.088 49.278-90.221 52.221-134.363 12.251-9.139 24.49-19.019 36.586-29.693 64.806-57.181 116.243-128.259 152.883-211.258 44.443-100.682 66.979-219.091 66.979-351.939v-25.6h-25.6zM159.102 502.187c48.797-70.8 123.384-158.595 207.446-186.232-33.222 58.203-50.422 111.691-56.611 145.555-59.323 3.626-110.467 20.89-150.835 40.677zM521.87 864.781c19.762-40.35 36.995-91.453 40.619-150.718 33.859-6.187 87.336-23.384 145.528-56.597-27.658 83.92-115.381 158.49-186.147 207.315zM770.262 550.405c-106.48 93.952-216.794 115.195-232.662 115.195-0.102 0-10.581-0.23-38.867-20.136-19.728-13.883-42.682-33.618-64.63-55.566-21.95-21.95-41.683-44.902-55.566-64.632-19.906-28.285-20.136-38.763-20.136-38.866 0-15.869 21.243-126.182 115.197-232.662 112.416-127.406 284.533-197.059 498.894-202.227-5.17 214.358-74.822 386.477-202.229 498.894z'></path></svg>
            </div>
            <h1 className='font-prompt text-black 2xl:text-4xl xl:text-3xl text-2xl font-medium mb-4'>Results</h1>
            <p className='font-poppins text-neutral-500 2xl:text-base xl:text-sm text-sm font-light 2xl:mb-16 xl:mb-16 mb-12 !leading-relaxed'>We find out the best way to reach the desired result.</p>
            <button className='font-poppins text-black 2xl:text-sm xl:text-xs text-xs font-medium tracking-wider cursor-pointer' onClick={this.scrollToProjects}>SEE OUR WORK</button>
          </div>
        </div>

      </div>
    );
  }
}

export default WhatWeDo;