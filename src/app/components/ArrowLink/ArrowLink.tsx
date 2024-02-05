import Link from 'next/link';
import Text from '../Text/Text';
import { ReactNode } from 'react';

type ArrowLinkProps = {
  href: string;
  children: ReactNode;
};

export default function ArrowLink({ href, children }: ArrowLinkProps) {
  return (
    <Link href={href} className='group'>
      <Text type='h3' color='white' className='group-hover:!text-xsuve'>
        <span className='text-white group-hover:!text-xsuve 2xl:-ml-[52px] xl:-ml-[52px] -ml-[32px] group-hover:-ml-0 opacity-0 group-hover:opacity-100 transition-all'>
          &rarr;
        </span>{' '}
        {children}
      </Text>
    </Link>
  );
}
