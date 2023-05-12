import { DetailedHTMLProps, TextareaHTMLAttributes } from "react";

interface TextAreaProps extends
  DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> {
  id: string;
  label: string;
  placeholder: string;
}

export function TextArea({ id, label, placeholder, className = "", ...rest }: TextAreaProps) {
  return (
    <fieldset className="flex flex-col gap-2">
      <label htmlFor={id} className="w-fit leading-2 hover:cursor-pointer">
        {label}
      </label>

      <textarea
        id={id}
        className={`h-[4.625rem] py-[0.4375rem] px-[0.6675rem] rounded-lg text-sm leading-1 font-normal placeholder:text-zinc-300 outline-none border border-zinc-500 focus:border-blue-400 focus:border-2 disabled:bg-zinc-500 ${className}`}
        placeholder={placeholder}
        {...rest}
      />

    </fieldset>
  );
}