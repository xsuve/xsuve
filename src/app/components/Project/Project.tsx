import { formatProjectCategory } from '@/app/utils/utils';
import Link from 'next/link';
import Text from '../Text/Text';
import { ProjectData } from '@/app/types';
import { config } from '@/app/config';

type ProjectProps = {
  data: ProjectData;
};

export default function Project({ data }: ProjectProps) {
  return (
    <div className='flex flex-col justify-between items-center'>
      <Link href={`./projects/${data.slug}`}>
        <div className='rounded-2xl overflow-hidden relative bg-neutral-100 2xl:p-4 xl:p-4 p-3 2xl:h-[360px] xl:h-[360px] h-[200px] group'>
          <img
            src={`${config.api}/projects/${data.slug}/${
              data.images[data.displayImage]
            }`}
            alt={data.title}
            className='rounded-xl h-full'
          />
          <div className='opacity-0 group-hover:opacity-100 bg-[rgba(0,0,0,0.7)] absolute w-full h-full top-0 left-0 flex justify-center items-center transition-all ease-in-out'>
            <button className='-mt-[50px] group-hover:-mt-0 transition-all ease-in-out w-[36px] h-[36px] bg-xsuve rounded-full flex flex-col justify-center items-center'>
              <span className='font-mabry-pro text-lg text-black'>&rarr;</span>
            </button>
          </div>
        </div>
      </Link>
      <Link
        href={`./categories/${formatProjectCategory(data.category)}`}
        className='mt-6'
      >
        <Text type='label' color='gray'>
          {data.category}
        </Text>
      </Link>
      <Link href={`./project/${data.slug}`} className='mt-2 text-center'>
        <Text type='h4'>{data.title}</Text>
      </Link>
    </div>
  );
}
