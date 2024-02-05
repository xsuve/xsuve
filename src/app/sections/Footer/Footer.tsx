import ArrowLink from '@/app/components/ArrowLink/ArrowLink';
import Logo from '@/app/components/Logo/Logo';
import Text from '@/app/components/Text/Text';
import Link from 'next/link';

export default function Footer() {
  return (
    <section className='2xl:h-screen xl:h-screen h-full bg-black 2xl:px-12 xl:px-12 px-6 2xl:py-32 xl:py-32 py-12'>
      <div className='grid grid-cols-5 h-full 2xl:gap-y-0 xl:gap-y-0 gap-y-8'>
        <div className='2xl:col-span-1 xl:col-span-1 col-span-5 flex flex-col justify-between items-start gap-y-6'>
          <div className='flex flex-col gap-y-4'>
            <Text type='p' color='white'>
              xsuve
              {/* <br /> */}
              {/* Sibiu <span className='text-neutral-400'>x</span> Cluj-Napoca */}
              <br />
              Transylvania
              <br />
              Romania
            </Text>
            <Text type='p' color='white'>
              george@xsuve.com
            </Text>
          </div>
          <Logo color='white' className='2xl:block xl:block hidden' />
        </div>
        <div className='2xl:col-span-2 xl:col-span-2 col-span-5 flex flex-col justify-between items-start gap-y-4'>
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
    </section>
  );
}
