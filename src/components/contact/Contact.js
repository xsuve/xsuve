import { Component } from 'react';

class Contact extends Component {
  render() {
    return (
      <div className='2xl:px-80 xl:px-64 px-6 2xl:py-32 xl:py-16 py-8 flex justify-center contact'>
        <div className='text-center'>
          <h5 className='font-prompt text-black 2xl:text-2xl xl:text-xl text-lg font-normal 2xl:mb-16 xl:mb-12 mb-6'>Say a warm Hello</h5>
          <p className='font-poppins text-neutral-400 2xl:text-lg xl:text-base text-sm font-light mt-1'>Sibiu, Romania</p>
          <h2 className='font-poppins text-black 2xl:text-3xl xl:text-2xl text-xl font-light !leading-relaxed cursor-pointer'>
            <a href='mailto:george@xsuve.com'>george@xsuve.com</a>
          </h2>
          <div className='flex justify-between 2xl:w-96 xl:w-64 w-full mt-8 mx-auto'>
            <a href='https://dribbble.com/xsuve' target='_blank' rel='noreferrer'>
              <div className='2xl:w-16 xl:w-10 w-10 2xl:h-16 xl:h-10 h-10 rounded-full flex items-center justify-center bg-pink-50 cursor-pointer'>
                <svg viewBox='0 0 1000 1000' className='fill-pink-500 2xl:w-7 xl:w-5 w-5 2xl:h-7 xl:h-5 h-5'>
                  <path d='M0 500c0-90.667 22.334-174.333 67-251 44.667-76.667 105.334-137.333 182-182C325.667 22.333 409.334 0 500 0c90.667 0 174.334 22.333 251 67 76.667 44.667 137.334 105.333 182 182 44.667 76.667 67 160.333 67 251s-22.333 174.333-67 251c-44.666 76.667-105.333 137.333-182 182-76.666 44.667-160.333 67-251 67-90.666 0-174.333-22.333-251-67-76.666-44.667-137.333-105.333-182-182C22.334 674.333 0 590.667 0 500zm83 0c0 104 35 195.667 105 275 32-62.667 82.667-122.333 152-179 69.334-56.667 137-92.333 203-107-10-23.333-19.666-44.333-29-63-114.666 36.667-238.666 55-372 55-26 0-45.333-.333-58-1 0 2.667-.166 6-.5 10-.333 4-.5 7.333-.5 10zm13-103c14.667 1.333 36.334 2 65 2 111.334 0 217-15 317-45-50.666-90-106.333-165-167-225-52.666 26.667-97.833 63.667-135.5 111-37.666 47.333-64.166 99.667-79.5 157zm149 432c75.334 58.667 160.334 88 255 88 49.334 0 98.334-9.333 147-28-13.333-114-39.333-224.333-78-331-61.333 13.333-123.166 47-185.5 101C321.167 713 275 769.667 245 829zM398 97c58.667 60.667 113 136.333 163 227 90.667-38 159-86.333 205-145-77.333-64-166-96-266-96-34 0-68 4.667-102 14zm199 298c10 21.333 21.334 48.333 34 81 49.334-4.667 103-7 161-7 41.334 0 82.334 1 123 3-5.333-90.667-38-171.333-98-242-43.333 64.667-116.666 119.667-220 165zm59 151c34 98.667 57 200 69 304 52.667-34 95.667-77.667 129-131 33.334-53.333 53.334-111 60-173-48.666-3.333-93-5-133-5-36.666 0-78.333 1.667-125 5z'/>
                </svg>
              </div>
            </a>
            <a href='https://www.linkedin.com/in/xsuve' target='_blank' rel='noreferrer'>
              <div className='2xl:w-16 xl:w-10 w-10 2xl:h-16 xl:h-10 h-10 rounded-full flex items-center justify-center bg-blue-50 cursor-pointer'>
                <svg viewBox='0 5 1036 990' className='fill-blue-500 2xl:w-7 xl:w-5 w-5 2xl:h-7 xl:h-5 h-5'>
                  <path d='M0 120c0-33.334 11.667-60.834 35-82.5C58.333 15.833 88.667 5 126 5c36.667 0 66.333 10.666 89 32 23.333 22 35 50.666 35 86 0 32-11.333 58.666-34 80-23.333 22-54 33-92 33h-1c-36.667 0-66.333-11-89-33S0 153.333 0 120zm13 875V327h222v668H13zm345 0h222V622c0-23.334 2.667-41.334 8-54 9.333-22.667 23.5-41.834 42.5-57.5 19-15.667 42.833-23.5 71.5-23.5 74.667 0 112 50.333 112 151v357h222V612c0-98.667-23.333-173.5-70-224.5S857.667 311 781 311c-86 0-153 37-201 111v2h-1l1-2v-95H358c1.333 21.333 2 87.666 2 199 0 111.333-.667 267.666-2 469z'/>
                </svg>
              </div>
            </a>
            <a href='https://github.com/xsuve' target='_blank' rel='noreferrer'>
              <div className='2xl:w-16 xl:w-10 w-10 2xl:h-16 xl:h-10 h-10 rounded-full flex items-center justify-center bg-gray-100 cursor-pointer'>
                <svg viewBox='0 0 256 249' className='fill-gray-800 2xl:w-7 xl:w-5 w-5 2xl:h-7 xl:h-5 h-5'>
                  <path d='M127.505 0C57.095 0 0 57.085 0 127.505c0 56.336 36.534 104.13 87.196 120.99 6.372 1.18 8.712-2.766 8.712-6.134 0-3.04-.119-13.085-.173-23.739-35.473 7.713-42.958-15.044-42.958-15.044-5.8-14.738-14.157-18.656-14.157-18.656-11.568-7.914.872-7.752.872-7.752 12.804.9 19.546 13.14 19.546 13.14 11.372 19.493 29.828 13.857 37.104 10.6 1.144-8.242 4.449-13.866 8.095-17.05-28.32-3.225-58.092-14.158-58.092-63.014 0-13.92 4.981-25.295 13.138-34.224-1.324-3.212-5.688-16.18 1.235-33.743 0 0 10.707-3.427 35.073 13.07 10.17-2.826 21.078-4.242 31.914-4.29 10.836.048 21.752 1.464 31.942 4.29 24.337-16.497 35.029-13.07 35.029-13.07 6.94 17.563 2.574 30.531 1.25 33.743 8.175 8.929 13.122 20.303 13.122 34.224 0 48.972-29.828 59.756-58.22 62.912 4.573 3.957 8.648 11.717 8.648 23.612 0 17.06-.148 30.791-.148 34.991 0 3.393 2.295 7.369 8.759 6.117 50.634-16.879 87.122-64.656 87.122-120.973C255.009 57.085 197.922 0 127.505 0'/><path d='M47.755 181.634c-.28.633-1.278.823-2.185.389-.925-.416-1.445-1.28-1.145-1.916.275-.652 1.273-.834 2.196-.396.927.415 1.455 1.287 1.134 1.923M54.027 187.23c-.608.564-1.797.302-2.604-.589-.834-.889-.99-2.077-.373-2.65.627-.563 1.78-.3 2.616.59.834.899.996 2.08.36 2.65M58.33 194.39c-.782.543-2.06.034-2.849-1.1-.781-1.133-.781-2.493.017-3.038.792-.545 2.05-.055 2.85 1.07.78 1.153.78 2.513-.019 3.069M65.606 202.683c-.699.77-2.187.564-3.277-.488-1.114-1.028-1.425-2.487-.724-3.258.707-.772 2.204-.555 3.302.488 1.107 1.026 1.445 2.496.7 3.258M75.01 205.483c-.307.998-1.741 1.452-3.185 1.028-1.442-.437-2.386-1.607-2.095-2.616.3-1.005 1.74-1.478 3.195-1.024 1.44.435 2.386 1.596 2.086 2.612M85.714 206.67c.036 1.052-1.189 1.924-2.705 1.943-1.525.033-2.758-.818-2.774-1.852 0-1.062 1.197-1.926 2.721-1.951 1.516-.03 2.758.815 2.758 1.86M96.228 206.267c.182 1.026-.872 2.08-2.377 2.36-1.48.27-2.85-.363-3.039-1.38-.184-1.052.89-2.105 2.367-2.378 1.508-.262 2.857.355 3.049 1.398'/>
                </svg>
              </div>
            </a>
            <a href='https://www.instagram.com/xsuvecom' target='_blank' rel='noreferrer'>
              <div className='2xl:w-16 xl:w-10 w-10 2xl:h-16 xl:h-10 h-10 rounded-full flex items-center justify-center bg-purple-50 cursor-pointer'>
                <svg viewBox='0 0 2476 2476' className='fill-purple-500 2xl:w-7 xl:w-5 w-5 2xl:h-7 xl:h-5 h-5'>
                  <path d='M825.4 1238c0-227.9 184.7-412.7 412.6-412.7 227.9 0 412.7 184.8 412.7 412.7 0 227.9-184.8 412.7-412.7 412.7-227.9 0-412.6-184.8-412.6-412.7m-223.1 0c0 351.1 284.6 635.7 635.7 635.7s635.7-284.6 635.7-635.7-284.6-635.7-635.7-635.7S602.3 886.9 602.3 1238m1148-660.9c0 82 66.5 148.6 148.6 148.6 82 0 148.6-66.6 148.6-148.6s-66.5-148.5-148.6-148.5-148.6 66.5-148.6 148.5M737.8 2245.7c-120.7-5.5-186.3-25.6-229.9-42.6-57.8-22.5-99-49.3-142.4-92.6-43.3-43.3-70.2-84.5-92.6-142.3-17-43.6-37.1-109.2-42.6-229.9-6-130.5-7.2-169.7-7.2-500.3s1.3-369.7 7.2-500.3c5.5-120.7 25.7-186.2 42.6-229.9 22.5-57.8 49.3-99 92.6-142.4 43.3-43.3 84.5-70.2 142.4-92.6 43.6-17 109.2-37.1 229.9-42.6 130.5-6 169.7-7.2 500.2-7.2 330.6 0 369.7 1.3 500.3 7.2 120.7 5.5 186.2 25.7 229.9 42.6 57.8 22.4 99 49.3 142.4 92.6 43.3 43.3 70.1 84.6 92.6 142.4 17 43.6 37.1 109.2 42.6 229.9 6 130.6 7.2 169.7 7.2 500.3 0 330.5-1.2 369.7-7.2 500.3-5.5 120.7-25.7 186.3-42.6 229.9-22.5 57.8-49.3 99-92.6 142.3-43.3 43.3-84.6 70.1-142.4 92.6-43.6 17-109.2 37.1-229.9 42.6-130.5 6-169.7 7.2-500.3 7.2-330.5 0-369.7-1.2-500.2-7.2M727.6 7.5c-131.8 6-221.8 26.9-300.5 57.5-81.4 31.6-150.4 74-219.3 142.8C139 276.6 96.6 345.6 65 427.1 34.4 505.8 13.5 595.8 7.5 727.6 1.4 859.6 0 901.8 0 1238s1.4 378.4 7.5 510.4c6 131.8 26.9 221.8 57.5 300.5 31.6 81.4 73.9 150.5 142.8 219.3 68.8 68.8 137.8 111.1 219.3 142.8 78.8 30.6 168.7 51.5 300.5 57.5 132.1 6 174.2 7.5 510.4 7.5 336.3 0 378.4-1.4 510.4-7.5 131.8-6 221.8-26.9 300.5-57.5 81.4-31.7 150.4-74 219.3-142.8 68.8-68.8 111.1-137.9 142.8-219.3 30.6-78.7 51.6-168.7 57.5-300.5 6-132.1 7.4-174.2 7.4-510.4s-1.4-378.4-7.4-510.4c-6-131.8-26.9-221.8-57.5-300.5-31.7-81.4-74-150.4-142.8-219.3C2199.4 139 2130.3 96.6 2049 65c-78.8-30.6-168.8-51.6-300.5-57.5-132-6-174.2-7.5-510.4-7.5-336.3 0-378.4 1.4-510.5 7.5'/>
                </svg>
              </div>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;