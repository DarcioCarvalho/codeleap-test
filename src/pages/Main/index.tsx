import { FormEvent, useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { selectActiveUser } from "../../redux/feature/AuthSlice";

import { Career, CareerDB, INITIAL_CAREER_DATA } from "../../type/Career";

import { Button } from "../../components/Button";
import { Heading } from "../../components/Heading";
import { Header } from "../../components/Header";
import { CareerCard } from "../../components/CareerCard";

import { useApi } from "../../actions/useApi";
import { ShowToastTypeError, ShowToastTypeSuccess } from "../../utils/ToastMessage";
import { getErrorMessage } from "../../utils/ErrorMessageUtil";
import { FieldSetCareer } from "../../components/FieldSetCareer";

export function Main() {
  let isFirst = true;
  const [career, setCareer] = useState<Career | CareerDB>(INITIAL_CAREER_DATA);
  const [careers, setCareers] = useState<CareerDB[]>([]);
  const [nextPage, setNextPage] = useState<string | null>(null);
  const activeUser = useSelector(selectActiveUser);

  const { addCareerApi, getCareersApi } = useApi();

  function handleDeleteCareer(id: number) {
    setCareers(prevState => prevState.filter(career => career.id !== id));
  }

  function handleUpdateCareer(careerUpdated: CareerDB) {
    setCareers(prevState => prevState.map(career => career.id !== careerUpdated.id ? career : careerUpdated));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    await addCareer();
  }

  async function addCareer() {
    if (!activeUser)
      return

    try {
      const data: Career = {
        ...career,
        username: activeUser.username,
      }
      const response = await addCareerApi(data);
      const { data: newCareer } = response;

      setCareers(prevState => [newCareer, ...prevState]);

      setCareer(INITIAL_CAREER_DATA);

      ShowToastTypeSuccess('Data added successfully')
    } catch (error) {
      ShowToastTypeError(`${getErrorMessage(error)}`);
    }
  }

  async function getCareers(url: string = "") {
    try {
      const response = await getCareersApi(url);
      const { results, next } = response.data;

      setCareers(prevState => [...prevState, ...results])
      setNextPage(next);

    } catch (error) {
      ShowToastTypeError(`${getErrorMessage(error)}`);
    }
  }

  useEffect(() => {
    if (isFirst || !import.meta.env.DEV) {
      isFirst = false;
      getCareers();
    }
  }, []);

  return (
    <div className="flex max-w-[120rem] min-h-screen mx-auto items-center justify-center">

      <div className="flex flex-col gap-4 sm:gap-6 pb-6 bg-white mx-6 w-[40rem] lg:w-[50rem] min-h-screen text-black">

        <Header title="CodeLeap Network" enableUser />

        <form
          className="flex flex-col gap-4 sm:gap-6 mx-4 xs:mx-6 p-4 sm:p-6 rounded-2xl border border-zinc-400"   /* "flex flex-col gap-6 max-w-[47rem] md:w-[47rem] mx-auto p-6 rounded-2xl border border-zinc-400" */
          onSubmit={handleSubmit}
        >
          <Heading className="leading-4" title="What’s on your mind?" />

          <FieldSetCareer
            career={career}
            setCareer={setCareer}
          />

          <Button
            disabled={career.title === "" || career.content === ""}
          >
            Create
          </Button>

        </form>

        {/* card */}
        {careers.map((career, index) =>
          <CareerCard
            key={index}
            career={career}
            handleCareerUpdated={handleUpdateCareer}
            handleCareerDeleted={handleDeleteCareer}
            user={activeUser}
          />
        )}

        {nextPage &&
          <Button
            className="w-fit sm:w-fit h-9 mx-auto px-12"
            onClick={(event) => {
              getCareers(nextPage);
              event.currentTarget.blur();
            }}
          >
            Load more...
          </Button>
        }

      </div>

    </div>

  )
}


