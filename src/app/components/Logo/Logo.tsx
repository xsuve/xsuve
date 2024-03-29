'use client';

import useMenu from '@/app/stores/menu';
import clsx from 'clsx';
import Link from 'next/link';

type LogoColor = 'white' | 'black';
type LogoProps = {
  color: LogoColor;
  isFixed?: boolean;
  isMixBlendMode?: boolean;
  className?: string;
};

const LogoColorMap = {
  white: 'text-white',
  black: 'text-black',
};

export default function Logo({
  color,
  isFixed = false,
  isMixBlendMode = false,
  className = '',
}: LogoProps) {
  const isToggled = useMenu((state) => state.isToggled);

  return (
    <Link
      href='/'
      className={clsx(
        isFixed
          ? 'fixed 2xl:top-12 xl:top-12 top-8 2xl:left-12 xl:left-12 left-6 z-30'
          : '',
        '2xl:w-[120px] xl:w-[120px] w-[100px]',
        'transition duration-500',
        isMixBlendMode ? 'mix-blend-difference' : '',
        isMixBlendMode
          ? 'text-white'
          : isToggled
          ? 'text-white'
          : LogoColorMap[color],
        className
      )}
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        x='0px'
        y='0px'
        viewBox='0 0 446.6 100'
        fill='currentColor'
      >
        <path
          d='M438.8,25.1c-3.5-7-8.6-12.3-15.2-16.1c-6.6-3.7-14.3-5.6-23.1-5.6h-60.1l-21.6,53.5L297.9,3.4h-62.7v50.1
            c0,5.4-1.4,9.7-4.3,13c-2.9,3.3-6.6,4.9-11.3,4.9c-7.9,0-11.9-4.5-11.9-13.5V3.4h-33.1v8.5c-4.5-2.4-9.2-4.3-14.3-5.7
            c-6.5-1.9-13.1-2.8-19.8-2.8H77.8l-17,22.3L43.6,3.4H4.8l37.4,45l-39.7,48h38.6l19.8-24.9l19.8,24.9h59.1c12.8,0,22.9-2.5,30.1-7.6
            c4-2.7,6.9-6.1,8.7-10c1.3,3,2.9,5.6,4.9,7.8c5.8,6.5,14.6,9.7,26.5,9.7c11.7,0,20.6-4.6,26.5-13.7v13.7h32.4V15.4l35.6,81h27.3
            l22.4-50.7c-0.1,1.4-0.2,2.9-0.2,4.4c0,9.5,2.1,17.7,6.2,24.7c4.2,7,10.1,12.3,17.9,16.1c7.8,3.7,17,5.6,27.6,5.6
            c6.6,0,13.2-1,19.8-2.8c6.6-1.9,12.2-4.4,16.8-7.7l-8.4-21.1c-3.8,2.6-8,4.6-12.6,6.1s-9.3,2.2-13.9,2.2c-6.8,0-12-1.5-15.6-4.6
            c-3.5-3.1-5.6-8-6.2-14.9H444v-4.3h0.1C444.1,40.2,442.3,32.1,438.8,25.1z M148.7,72.9c-2.1,1.1-5,1.6-8.8,1.6
            c-6.1,0-12.3-0.9-18.7-2.7c-6.3-1.8-12-4.4-17-7.6l-3.7,9.5L79.7,48.5l21.4-25.8c-1.5,3.1-2.2,6.6-2.2,10.3c0,7.1,2.1,12.7,6.3,16.8
            c4.2,4,11.1,7,20.6,8.9l15,3.3c4.3,0.8,7.2,1.7,8.7,2.7s2.3,2.3,2.3,4S150.8,71.9,148.7,72.9z M174.6,51.1c-0.1-0.1-0.2-0.3-0.3-0.4
            c-4.3-4.3-11.4-7.5-21.3-9.7l-15.7-3.3c-3.4-0.8-5.7-1.6-7-2.4c-1.2-0.8-1.8-1.8-1.8-3.1c0-2.1,1-3.7,3.1-4.8s4.9-1.7,8.6-1.7
            c4.5,0,9.3,0.8,14.5,2.5c5.1,1.6,10.1,4,15,7l4.9-11.8V51.1z M386.1,38.9c2.1-9.1,7.2-13.7,15.4-13.7c8.3,0,13.1,4.6,14.3,13.7
            H386.1z'
        />
      </svg>
    </Link>
  );
}
