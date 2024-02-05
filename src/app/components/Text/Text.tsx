import clsx from 'clsx';

type TextType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'label' | 'p';
const TextTypeMap = {
  h1: 'font-mabry-pro 2xl:text-7xl xl:text-7xl text-5xl',
  h2: 'font-mabry-pro 2xl:text-6xl xl:text-6xl text-4xl',
  h3: 'font-mabry-pro 2xl:text-5xl xl:text-5xl text-3xl leading-normal',
  h4: 'font-mabry-pro 2xl:text-4xl xl:text-4xl text-2xl leading-snug',
  h5: 'font-mabry-pro 2xl:text-3xl xl:text-3xl text-xl',
  label: 'font-oswald font-light 2xl:text-lg xl:text-lg text-sm tracking-wider',
  p: 'font-mabry-pro 2xl:text-xl xl:text-xl text-lg',
};

type TextColor = 'black' | 'gray' | 'white' | 'xsuve';
const TextColorType = {
  black: 'text-black',
  gray: 'text-neutral-400',
  white: 'text-white',
  xsuve: 'text-xsuve',
};

type TextProps = {
  type: TextType;
  color?: TextColor;
  children: React.ReactNode;
  className?: string;
};

export default function Text({
  type,
  color = 'black',
  children,
  className = '',
}: TextProps) {
  const Tag: keyof JSX.IntrinsicElements = type;

  return type === 'label' ? (
    <h6 className={clsx(TextTypeMap['label'], TextColorType[color], className)}>
      {children}
    </h6>
  ) : (
    <Tag className={clsx(TextTypeMap[type], TextColorType[color], className)}>
      {children}
    </Tag>
  );
}
