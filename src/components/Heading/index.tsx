import { DetailedHTMLProps, HTMLAttributes } from "react";

interface HeadingProps extends DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> {
  title: string;
  size?: 'sm' | 'md';
}

export function Heading({ title, size = "md", className = "", ...rest }: HeadingProps) {
  const sizeClassName = size == "md" ? "text-[1rem] leading-3 xs:text-md xs:leading-4 sm:text-lg sm:leading-5" : "text-xs leading-1 xs:text-sm xs:leading-2 sm:text-md sm:leading-3"
  return (
    <h1
      className={`font-bold ${className} ${sizeClassName}`}
      {...rest}
    >
      {title}
    </h1>
  );
}