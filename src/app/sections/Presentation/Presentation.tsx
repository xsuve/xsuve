import Text from '@/app/components/Text/Text';

export default function Presentation() {
  return (
    <section className='2xl:h-screen xl:h-screen h-[60vh] bg-white 2xl:p-12 xl:p-12 p-6'>
      <div className='rounded-2xl overflow-hidden h-full relative'>
        <video
          src='videos/presentation.mp4'
          autoPlay
          loop
          playsInline
          className='w-full h-full object-cover'
        ></video>
        <div className='absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.5)] flex flex-col justify-between'>
          <div className='w-full 2xl:py-8 xl:py-8 py-6 text-center'>
            <Text type='label' color='white'>
              END-TO-END COMMERCIAL PROJECTS
            </Text>
          </div>
          <div className='2xl:px-48 xl:px-48 px-6 text-center flex flex-col 2xl:gap-y-12 xl:gap-y-12 gap-y-8'>
            <Text type='h1' color='white' className='font-light'>
              Different <span className='font-medium'>Perspective</span>{' '}
              Approach
            </Text>
            <div className='flex justify-center items-center 2xl:gap-x-2 xl:gap-x-2 gap-x-2'>
              <Text type='label' color='white'>
                SCALE
              </Text>
              <Text type='h5' color='white'>
                Businesses
              </Text>
              <Text type='label' color='white'>
                WITH
              </Text>
              <Text type='h5' color='white'>
                Technology
              </Text>
            </div>
          </div>
          <div className='2xl:px-24 xl:px-24 px-6 2xl:py-8 xl:py-8 py-6 flex items-center justify-between 2xl:gap-x-12 xl:gap-x-12 gap-x-2'>
            <div className='w-[100px]'>
              <img
                src='img/clients/sprintsoft.svg'
                alt=''
                className='filter brightness-0 invert max-w-full'
              />
            </div>
            <div className='w-[75px]'>
              <img
                src='img/clients/stoodeo.svg'
                alt=''
                className='filter brightness-0 invert max-w-full'
              />
            </div>
            <div className='w-[110px]'>
              <img
                src='img/clients/keepcalling.png'
                alt=''
                className='filter brightness-0 invert max-w-full'
              />
            </div>
            <div className='w-[80px]'>
              <img
                src='img/clients/dyslexie-font.svg'
                alt=''
                className='filter brightness-0 invert max-w-full'
              />
            </div>
            <div className='w-[80px]'>
              <img
                src='img/clients/devnest.png'
                alt=''
                className='filter brightness-0 invert max-w-full'
              />
            </div>
            <div className='w-[110px]'>
              <img
                src='img/clients/scriptsender.png'
                alt=''
                className='filter brightness-0 invert max-w-full'
              />
            </div>
            <div className='w-[110px]'>
              <img
                src='img/clients/interbrand.png'
                alt=''
                className='filter brightness-0 invert max-w-full'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
