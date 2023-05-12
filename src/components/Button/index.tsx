import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";

interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  children: ReactNode;
}

export function Button({ children, disabled = false, className = "", ...rest }: ButtonProps) {
  const disabledClassName = disabled ? "disabled:bg-zinc-500" : "";
  return (
    <button
      className={`w-[5.9375rem] sm:w-[6.9375rem] h-6 sm:h-8 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-bold text-sm sm:text-base leading-2 ml-auto ${disabledClassName} ${className}`}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  );
}