import Text from '@/app/components/Text/Text';

export default function Header() {
  return (
    <section className='relative bg-white 2xl:h-screen xl:h-screen h-screen flex justify-center items-center'>
      <div className='2xl:w-[650px] xl:w-[650px] w-[300px] text-center'>
        <Text type='h1' className='2xl:-mt-[120px] xl:-mt-[120px] -mt-0'>
          Seeing <span className=''>solutions</span> where others just see
          problems.
        </Text>
      </div>
      <div className='absolute left-0 bottom-0 w-full py-12'>
        <div className='grid grid-cols-5'>
          <div className='col-span-1 2xl:block xl:block hidden'></div>
          <div className='2xl:col-span-3 xl:col-span-3 col-span-5 flex justify-center items-center text-center 2x:px-24 xl:px-24 px-6'>
            <Text type='p'>
              Developing creative digital experiences through modern solutions,
              that bring real value to the world.
            </Text>
          </div>
          <div className='col-span-1 2xl:block xl:block hidden'></div>
        </div>
      </div>
    </section>
  );
}
