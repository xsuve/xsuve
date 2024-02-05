'use client';

import useMenu from '@/app/stores/menu';
import clsx from 'clsx';
import Text from '../Text/Text';
import Link from 'next/link';
import ArrowLink from '../ArrowLink/ArrowLink';

export default function Menu() {
  const isToggled = useMenu((state) => state.isToggled);

  return (
    <div
      className={clsx(
        'fixed top-0 left-0 right-0 bg-black 2xl:px-12 xl:px-12 px-6 z-20 overflow-hidden',
        'transition-all ease-[cubic-bezier(0.75,0.3,0.75,0.45)] duration-300',
        isToggled ? 'h-screen' : 'h-0'
      )}
    >
      <div
        className={clsx(
          'grid grid-cols-5 h-full 2xl:pt-48 xl:pt-48 pt-24 pb-24 2xl:gap-y-0 xl:gap-y-0 gap-y-8',
          'transition-opacity ease-in-out',
          isToggled ? 'opacity-100' : 'opacity-0'
        )}
      >
        <div className='2xl:col-span-3 xl:col-span-3 col-span-5 flex flex-col justify-between items-start gap-y-4'>
          <div className='flex flex-col 2xl:gap-y-8 xl:gap-y-8 gap-y-4'>
            <ArrowLink href='/'>About</ArrowLink>
            <ArrowLink href='/'>Work</ArrowLink>
            <ArrowLink href='/'>Services</ArrowLink>
            <ArrowLink href='/'>Contact</ArrowLink>
          </div>
          <Text type='p' color='white'>
            Seeing solutions where others just see problems.
          </Text>
        </div>
        <div className='2xl:col-span-2 xl:col-span-2 col-span-5 flex flex-col justify-between gap-y-4 border-l border-neutral-400 pl-6'>
          <div className='flex flex-col items-start gap-y-1'>
            <Text type='p' color='white'>
              Let&apos;s Work
            </Text>
            <Text type='p' color='gray'>
              Aka create awesome things.
            </Text>
            <Link href='/'>
              <Text type='p' color='white'>
                george@xsuve.com
              </Text>
            </Link>
          </div>
          <div className='flex flex-col justify-between items-start gap-y-6'>
            <div className='flex flex-col items-start gap-y-1'>
              <Text type='p' color='gray'>
                Social
              </Text>
              <Link href='/'>
                <Text type='p' color='white'>
                  Instagram
                </Text>
              </Link>
              <Link href='/'>
                <Text type='p' color='white'>
                  GitHub
                </Text>
              </Link>
            </div>
            <Link href='/'>
              <Text type='p' color='white'>
                Terms & Conditions
              </Text>
            </Link>
            <Text type='p' color='white'>
              Copyright &copy; {new Date().getFullYear()} xsuve
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
}
