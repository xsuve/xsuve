import NavButton from './NavButton';

export default function Nav() {
  return (
    <nav className='2xl:px-12 xl:px-12 px-6 fixed top-0 left-0 w-full 2xl:h-[120px] xl:h-[120px] h-[80px] z-30'>
      <div className='grid grid-cols-2 h-full'>
        <div className='flex justify-start items-center'>{/* <Logo /> */}</div>
        <div className='flex justify-end items-center'>
          <NavButton />
        </div>
      </div>
    </nav>
  );
}
