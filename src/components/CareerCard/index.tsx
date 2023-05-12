import { parseISO, formatDistance } from 'date-fns';

import { CareerDB } from "../../type/Career";

import { Header } from "../Header";
import { Heading } from "../Heading";
import { User } from '../../redux/feature/AuthSlice';

import { ShowToastTypeError, ShowToastTypeSuccess } from '../../utils/ToastMessage';
import { getErrorMessage } from '../../utils/ErrorMessageUtil';
import { useApi } from '../../actions/useApi';
import { useViewport } from '../../hooks/useViewport';

interface CareerCardProps {
  career: CareerDB;
  user?: User | null;
  handleCareerUpdated?: (careerUpdated: CareerDB) => void;
  handleCareerDeleted?: (id: number) => void;
}

export function CareerCard({ career, user = null, handleCareerUpdated, handleCareerDeleted }: CareerCardProps) {
  const createdDateTime = parseISO(career.created_datetime as string);
  const isPostOfUser = career.username === user?.username;
  const { deleteCareerApi } = useApi();
  const { width: screenWidth } = useViewport();
  const titleLetterLimit = screenWidth > 768 ?
    0 : screenWidth > 430 ?
      55 : 25;

  async function deleteCareer(id: number) {
    try {
      await deleteCareerApi(String(id));

      if (handleCareerDeleted)
        handleCareerDeleted(id);
      ShowToastTypeSuccess('Data deleted successfully')
    } catch (error) {
      ShowToastTypeError(`${getErrorMessage(error)}`);
    }
  }

  return (
    <section className="mx-4 xs:mx-6 rounded-2xl overflow-auto border border-zinc-400" >
      <Header
        title={titleLetterLimit ? career.title.substring(0, titleLetterLimit) : career.title}
        height="sm"
        paddingInline="sm"
        enableButtons={isPostOfUser}
        career={career}
        handleCareerUpdated={handleCareerUpdated}
        buttonDeleteOnClick={isPostOfUser ? () => { deleteCareer(career.id) } : undefined}
      />

      <article className="flex flex-col gap-4 p-6">
        <div className="flex justify-between text-zinc-500">
          <Heading title={career.username} size="sm" />
          <span className="text-xs leading-1 xs:text-sm xs:leading-2 sm:text-md sm:leading-3">{`${formatDistance(createdDateTime, Date.now())} ago`}</span>
        </div>


        <p className="min-h-[7.25rem] xs:min-h-[10.25rem] text-xs leading-1 xs:text-sm xs:leading-2 sm:text-md sm:leading-3 block whitespace-pre-line break-all">
          {career.content}
        </p>
      </article>

    </section>
  );
}