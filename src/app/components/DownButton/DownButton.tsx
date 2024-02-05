'use client';

export default function DownButton() {
  const handleClick = () => {
    window.scrollTo({
      left: 0,
      top: document.body.scrollHeight,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={handleClick}
      className='fixed 2xl:bottom-[48px] xl:bottom-[48px] bottom-[24px] 2xl:right-[48px] xl:right-[48px] right-[24px] 2xl:w-[36px] xl:w-[36px] w-[33px] 2xl:h-[36px] xl:h-[36px] h-[33px] bg-black rounded-full flex flex-col justify-center items-center cursor-pointer transform hover:scale-110 transition'
    >
      <span className='font-mabry-pro text-lg text-white'>&darr;</span>
    </button>
  );
}
