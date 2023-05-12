import { DetailedHTMLProps, HTMLAttributes, MouseEventHandler, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { CareerBase, CareerDB } from "../../type/Career";

import { RemoveIcon } from "../icon/RemoveIcon";
import { EditIcon } from "../icon/EditIcon";
import { UserIcon } from "../icon/UserIcon";
import { CloseIcon } from "../icon/CloseIcon";

import { Heading } from "../Heading";
import { DialogModal } from "../DialogModal";
import { FieldSetCareer } from "../FieldSetCareer";

import { logout, selectActiveUser } from "../../redux/feature/AuthSlice";
import { AppDispatch } from "../../redux/store";
import { useApi } from "../../actions/useApi";

import { ShowToastTypeError, ShowToastTypeSuccess } from "../../utils/ToastMessage";
import { getErrorMessage } from "../../utils/ErrorMessageUtil";

interface HeaderProps extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  title: string;
  height?: 'sm' | 'md';
  paddingInline?: 'sm' | 'md';
  enableButtons?: boolean;
  career?: CareerDB;
  buttonDeleteOnClick?: MouseEventHandler<HTMLButtonElement>;
  buttonEditOnClick?: MouseEventHandler<HTMLButtonElement>;
  enableUser?: boolean;
  handleCareerUpdated?: (career: CareerDB) => void;
}

export function Header({
  title,
  height = 'md',
  paddingInline = 'md',
  enableButtons = false,
  career,
  buttonDeleteOnClick,
  buttonEditOnClick,
  enableUser = false,
  handleCareerUpdated,
  className = "",
  ...rest }: HeaderProps) {
  const heightClassName = height == "sm" ? "h-[2.375rem] md:h-[4.375rem]" : "h-[4rem] md:h-[5rem]";
  const paddingInlineClassName = paddingInline == 'sm' ? "px-[0.5rem] sm:px-[1rem] md:px-[1.5rem]" : "px-[1rem] sm:px-[1.7125rem] md:px-[2.3125rem]";

  const activeUser = useSelector(selectActiveUser);
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();

  const [editCareer, setEditCareer] = useState<CareerDB>({} as CareerDB)
  const { updateCareerApi } = useApi();

  function handleLogout() {
    dispatch(logout());
    navigate("/");
  }

  async function updateCareer() {
    try {
      const updatedCareer: CareerBase = {
        title: editCareer.title,
        content: editCareer.content,
      }
      await updateCareerApi(String(editCareer.id), updatedCareer);

      if (handleCareerUpdated)
        handleCareerUpdated(editCareer);
      ShowToastTypeSuccess('Data updated successfully');
    } catch (error) {
      ShowToastTypeError(`${getErrorMessage(error)}`);
    }
  }


  return (
    <header

      className={`flex items-center h-[3.5rem] md:h-[5rem] justify-between bg-blue-500 ${className} ${heightClassName} ${paddingInlineClassName}`}
      {...rest}
    >
      <Heading
        title={title}
        className={`text-white ${enableButtons ? "w-[70%]" : "w-[95%]"} text-ellipsis overflow-hidden`}
      />

      {enableButtons &&
        <div className="flex gap-2 sm:gap-6">
          <DialogModal
            title="Are you sure you want to delete this item?"
            buttonCancel={{ label: "Cancel" }}
            buttonAction={{ label: "Delete", onClick: buttonDeleteOnClick, buttonColor: "red" }}
            marginTopButtons="md"
          >
            <RemoveIcon />
          </DialogModal>

          {career &&
            <DialogModal
              title="Edit item"
              description={<FieldSetCareer className="mt-6" career={editCareer} setCareer={setEditCareer} />}
              withForm
              onSubmit={updateCareer}
              buttonCancel={{ label: "Cancel" }}
              buttonAction={{ label: "Save", buttonColor: "green" }}
              onClick={() => setEditCareer(career)}
            >
              <EditIcon />
            </DialogModal>
          }

        </div>
      }

      {enableUser && activeUser &&
        <div className="flex gap-1 xs:gap-2 md:gap-4 items-center px-2 xs:px-3 py-0.5 bg-blue-900 rounded-3xl">
          <UserIcon />
          <Heading
            title={activeUser.username}
            size="sm"
            className="text-white"
          />
          <CloseIcon
            onClick={handleLogout}
          />
        </div>
      }

    </header>
  );
}