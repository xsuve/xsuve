import Link from 'next/link';

type NavLinkProps = {
  href: string;
  children: React.ReactNode;
};

export default function NavLink({ href, children }: NavLinkProps) {
  return (
    <Link
      href={href}
      className='text-zinc-400 hover:text-zinc-300 transition-colors ease-linear font-light text-lg'
    >
      {children}
    </Link>
  );
}
