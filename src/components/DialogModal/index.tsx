import {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  ForwardRefRenderFunction,
  MouseEventHandler,
  ReactNode,
  forwardRef,
  useState
} from "react";
import * as Dialog from "@radix-ui/react-dialog";

interface ButtonModal {
  label: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  buttonColor?: "white" | "red" | "green";
}

interface ButtonDialogProps extends ButtonModal,
  DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  className?: string;
}

const ButtonBase: ForwardRefRenderFunction<HTMLButtonElement, ButtonDialogProps> = (
  { label, className = "", onClick, buttonColor = "white", ...rest }, ref) => {
  const buttonColorOptions = {
    white: {
      default: "bg-white",
      hover: "hover:bg-zinc-200",
      focus: "focus:shadow-zinc-200",
    },
    red: {
      default: "bg-red-500",
      hover: "hover:bg-red-600",
      focus: "focus:shadow-red-600",
    },
    green: {
      default: "bg-green-500",
      hover: "hover:bg-green-600",
      focus: "focus:shadow-green-600",
    },
  }

  return (
    <button
      ref={ref}
      className={`w-[5.5rem] md:w-[7.5rem] h-6 md:h-8 inline-flex items-center justify-center rounded-lg border border-zinc-400 text-sm leading-1 md:text-base md:leading-2 font-bold focus:outline-none focus:shadow-[0_0_0_1px] ${className} ${buttonColorOptions[buttonColor].default} ${buttonColorOptions[buttonColor].hover} ${buttonColorOptions[buttonColor].focus}`}
      onClick={onClick}
      {...rest}
    >
      {label}
    </button>
  );
}

const ButtonDialog = forwardRef(ButtonBase);


interface DialogModalProps {
  children: ReactNode;
  title: string;
  description?: ReactNode;
  buttonCancel?: ButtonModal;
  buttonAction: ButtonModal;
  marginTopButtons?: 'sm' | 'md';
  withForm?: boolean;
  onSubmit?: () => Promise<void>;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export function DialogModal({
  children, title, description = "", buttonCancel,
  buttonAction, marginTopButtons = "sm", withForm = false, onClick, onSubmit
}: DialogModalProps) {
  const [open, setOpen] = useState(false);
  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild onClick={onClick}>
        {children}
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-zinc-500 opacity-80 data-[state=open]:animate-overlayShow fixed inset-0" />
        <Dialog.Content className="w-[85%] md:w-[41.25rem] min-h-[9.125rem] p-6 data-[state=open]:animate-contentShow fixed top-[48.82%] left-[50%] translate-x-[-50%] translate-y-[-50%] rounded-2xl bg-white border border-zinc-400 shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">


          <Dialog.Title className="text-black text-base leading-3 sm:text-lg sm:leading-5 font-bold">
            {title}
          </Dialog.Title>

          {withForm && description &&
            (typeof description !== "string") ?
            <form onSubmit={async (event) => {
              setOpen(false);
              event.preventDefault();
              if (onSubmit)
                await onSubmit();
            }}
            >

              {description}


              <div className={`flex gap-4 justify-end ${marginTopButtons == "sm" ? "mt-[1.5rem]" : "mt-[2.5rem]"}`}>

                {buttonCancel &&
                  <Dialog.Close asChild>

                    <ButtonDialog
                      label={buttonCancel.label}
                      className="text-black"
                      onClick={buttonCancel.onClick}
                      buttonColor={buttonCancel.buttonColor}
                    />

                  </Dialog.Close>
                }

                <ButtonDialog
                  type="submit"
                  label={buttonAction.label}
                  className="text-white"
                  buttonColor={buttonAction.buttonColor}
                />

              </div>

            </form>

            :

            <>
              {description &&
                (typeof description === "string") ?
                <Dialog.Description className="text-zinc-600 mt-[10px] mb-5 text-[15px] leading-normal">
                  {description}
                </Dialog.Description>
                :
                description
              }

              <div className={`flex gap-4 justify-end ${marginTopButtons == "sm" ? "mt-[1.5rem]" : "mt-[2.5rem]"}`}>

                {buttonCancel &&
                  <Dialog.Close asChild>

                    <ButtonDialog
                      label={buttonCancel.label}
                      className="text-black"
                      onClick={buttonCancel.onClick}
                      buttonColor={buttonCancel.buttonColor}
                    />

                  </Dialog.Close>
                }

                <Dialog.Close asChild>

                  <ButtonDialog
                    label={buttonAction.label}
                    className="text-white"
                    onClick={buttonAction.onClick}
                    buttonColor={buttonAction.buttonColor}
                  />

                </Dialog.Close>

              </div>
            </>

          }

        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}


