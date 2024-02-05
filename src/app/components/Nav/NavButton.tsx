'use client';

import useMenu from '@/app/stores/menu';
import clsx from 'clsx';

export default function NavButton() {
  const toggle = useMenu((state) => state.toggle);
  const isToggled = useMenu((state) => state.isToggled);

  return (
    <button
      className={clsx(
        '2xl:w-[37px] xl:w-[37px] w-[33px] 2xl:h-[37px] xl:h-[37px] h-[33px]',
        isToggled ? 'bg-xsuve' : 'bg-white hover:bg-xsuve',
        'flex flex-col justify-center items-center gap-y-2',
        'rounded-full cursor-pointer transform hover:scale-110 transition',
        'group'
      )}
      onClick={() => {
        toggle();

        const body = document.querySelector('body');

        if (body) {
          if (isToggled) {
            body.style.overflow = 'auto';
          } else {
            body.style.overflow = 'hidden';
          }
        }
      }}
    >
      <div
        className={clsx(
          'h-[2px] w-[19px]',
          'bg-black',
          'transition-all duration-700',
          isToggled
            ? 'transform rotate-45 translate-x-[0px] translate-y-[5px]'
            : ''
        )}
      ></div>
      <div
        className={clsx(
          'h-[2px] w-[19px]',
          'bg-black',
          'transition-all duration-700',
          isToggled
            ? 'transform -rotate-45 translate-x-[0px] -translate-y-[5px]'
            : ''
        )}
      ></div>
    </button>
  );
}
