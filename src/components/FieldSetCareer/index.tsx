import { ChangeEvent, DetailedHTMLProps, Dispatch, FieldsetHTMLAttributes, SetStateAction } from "react";

import { Career, CareerDB } from "../../type/Career";
import { Input } from "../Input";
import { TextArea } from "../TextArea";

interface FieldSetCareerProps extends DetailedHTMLProps<FieldsetHTMLAttributes<HTMLFieldSetElement>, HTMLFieldSetElement> {
  career: Career | CareerDB;
  setCareer: Dispatch<SetStateAction<Career>> | Dispatch<SetStateAction<CareerDB>>;
}

export function FieldSetCareer({ career, setCareer, className, ...rest }: FieldSetCareerProps) {

  function handleChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { id, value } = event.currentTarget;

    setCareer((prevState: any) => (
      {
        ...prevState,
        [id]: value,
      }
    ));
  }

  return (
    <fieldset
      className={`flex flex-col gap-4 sm:gap-6 ${className}`}
      {...rest}
    >
      <Input
        id="title"
        name="title"
        label="Title"
        placeholder="Hello world"
        value={career.title}
        onChange={handleChange}
      />

      <TextArea
        id="content"
        name="content"
        className="h-[4.625rem] resize-none"
        label="Content"
        placeholder="Content here"
        value={career.content}
        onChange={handleChange}
      />

    </fieldset>

  );
}