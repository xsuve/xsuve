import Text from '@/app/components/Text/Text';
import Link from 'next/link';

export default function WorkTogether() {
  return (
    <section className='bg-white 2xl:px-24 xl:px-24 px-6 2xl:py-24 xl:py-24 py-12'>
      <div className='text-center flex flex-col gap-y-6'>
        <Text type='h3'>Do you have a missing piece?</Text>
        <Text type='h3'>
          Let&apos;s{' '}
          <Link href='/'>
            <span className='underline hover:!text-xsuve transition-colors ease-in-out'>
              work together
            </span>
          </Link>
          <span className='text-neutral-400'>
            {' '}
            and get <span className='line-through'>sh</span>it done.
          </span>
        </Text>
      </div>
    </section>
  );
}
