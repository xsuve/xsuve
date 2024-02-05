import Text from '@/app/components/Text/Text';

export default function About() {
  return (
    <section className='bg-white 2xl:px-24 xl:px-24 px-6 2xl:py-32 xl:py-32 py-12'>
      <div className='text-center flex flex-col 2xl:gap-y-8 xl:gap-y-8 gap-y-4'>
        <Text type='h3'>Explore and research what needs to be improved.</Text>
        <Text type='h3'>Iterate fast with a prototype over the need.</Text>
        <Text type='h3'>Build using robust and modern technologies.</Text>
        <Text type='h3'>
          Find out the best way to reach the desired result.
        </Text>
      </div>
    </section>
  );
}
