import { DetailedHTMLProps, InputHTMLAttributes } from "react";

interface InputProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  id: string;
  label: string;
  placeholder: string;
}

export function Input({ id, label, placeholder, className = "", type = "text", ...rest }: InputProps) {
  return (
    <fieldset className="flex flex-col gap-2">
      <label htmlFor={id} className="w-fit leading-2 hover:cursor-pointer">
        {label}
      </label>

      <input
        id={id}
        className={`h-8 py-2 px-[0.7rem] rounded-lg text-sm leading-1 font-normal placeholder:text-zinc-300 outline-none border border-zinc-500 focus:border-blue-400 focus:border-2 disabled:bg-zinc-500 ${className}`}
        type={type}
        placeholder={placeholder}
        {...rest}
      />

    </fieldset>
  );
}