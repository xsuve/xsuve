import Text from '@/app/components/Text/Text';
import { config } from '@/app/config';
import { TestimonialData } from '@/app/types';
import { fetchData, randomIndexBetween } from '@/app/utils/utils';

export default async function Testimonials() {
  const endpoint = '/testimonials';
  const testimonials = await fetchData<TestimonialData[]>(
    config.api + endpoint + '/data.json'
  );
  const randomIndex = randomIndexBetween(0, testimonials.length - 1);

  return (
    <section className='bg-black 2xl:px-12 xl:px-12 px-6 2xl:py-24 xl:py-24 py-12'>
      <div className='grid grid-cols-6 2xl:gap-24 xl:gap-24 gap-8'>
        <div className='2xl:col-span-1 xl:col-span-1 col-span-6 row-span-2'>
          <Text type='label' color='gray'>
            WHAT CLIENTS SAY
          </Text>
        </div>
        <div className='2xl:col-span-4 xl:col-span-4 col-span-6'>
          <Text type='h3' color='white' className='-mt-2'>
            <span className='text-neutral-400'>“</span>
            <span className='leading-relaxed'>
              {' '}
              {testimonials[randomIndex].text}{' '}
            </span>
            <span className='text-neutral-400'>”</span>
          </Text>
        </div>
        <div className='2xl:col-span-4 xl:col-span-4 col-span-6 flex justify-end'>
          <div className='flex flex-col gap-y-2'>
            <Text type='h5' color='white'>
              {testimonials[randomIndex].author}
            </Text>
            <Text type='p' color='white' className='italic'>
              {testimonials[randomIndex].position} @{' '}
              {testimonials[randomIndex].company}
            </Text>
          </div>
        </div>
      </div>
    </section>
  );
}
