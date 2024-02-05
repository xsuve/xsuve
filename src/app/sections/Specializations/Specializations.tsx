import Text from '@/app/components/Text/Text';
import Link from 'next/link';

export default function Specializations() {
  return (
    <section className='bg-white 2xl:px-12 xl:px-12 px-6 2xl:py-32 xl:py-32 py-12'>
      <div className='grid 2xl:grid-cols-2 xl:grid-cols-2 grid-cols-1 2xl:gap-x-24 xl:gap-x-24 gap-x-0 2xl:gap-y-0 xl:gap-y-0 gap-y-8'>
        <div className='flex flex-col gap-y-6 2xl:pr-24 xl:pr-24 pr-0'>
          <Text type='h5'>Specializations</Text>
          <Text type='p'>
            Offering a wide range of digital services to help your business
            achieve front-first exposure. Start from the top with the planning
            and end up with the successful launch of your product.
          </Text>
          <Link href='/' className='group'>
            <Text
              type='p'
              className='group-hover:!text-xsuve transition-colors ease-in-out'
            >
              View work &rarr;
            </Text>
          </Link>
        </div>
        <div className='border-l border-neutral-300 pl-6 flex flex-col 2xl:gap-y-8 xl:gap-y-8 gap-y-4'>
          <Text type='h3'>Prototyping</Text>
          <Text type='h3'>Development</Text>
          <Text type='h3'>Browser Extensions</Text>
          <Text type='h3'>Web Scraping</Text>
          <Text type='h3'>Automation</Text>
        </div>
      </div>
    </section>
  );
}
