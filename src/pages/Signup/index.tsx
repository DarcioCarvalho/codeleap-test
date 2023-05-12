import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Heading } from "../../components/Heading";
import { Logo } from "../../components/Logo";
import { WarningIcon } from "../../components/icon/WarningIcon";

import { login, selectActiveUser } from "../../redux/feature/AuthSlice";
import { AppDispatch } from "../../redux/store";


export function Signup() {
  const navigate = useNavigate();
  const activeUser = useSelector(selectActiveUser);
  const dispatch: AppDispatch = useDispatch();
  const [isHidden, setIsHidden] = useState(false);
  const [logoShown, setLogoShown] = useState(true);
  const [username, setUsername] = useState("");

  function handleLogin() {
    dispatch(login(username));
    navigate("/main");
  }

  async function handleLogoShown() {
    new Promise((resolve) => {
      setTimeout(() => {
        setIsHidden(true);
        resolve(null)
      }, 2000)
    })
      .then(() => {
        setTimeout(() => {
          setLogoShown(false);
        }, 1250)

      })

  }

  useEffect(() => {

    handleLogoShown();

  }, [])


  return (
    <div className="flex max-w-[120rem] min-h-screen mx-auto items-center justify-center">

      {!activeUser ?

        (logoShown ?
          <Logo className={isHidden ? "opacity-0  duration-[1000ms]" : ""} />
          :
          (
            < div className="flex flex-col bg-white w-[31.25rem] h-[12.8125rem] rounded-2xl p-6 border border-zinc-300 text-black mx-4 sm:mx-0">
              <Heading
                className="mb-6"
                title="Welcome to CodeLeap network!"
              />

              <Input
                id="username"
                label="Please enter your username"
                placeholder="John doe"
                value={username}
                onChange={(event) => setUsername(event.currentTarget.value)}
              />

              <Button
                className="mt-4"
                disabled={username == ""}
                onClick={handleLogin}
              >
                ENTER
              </Button>
            </div>
          )
        )
        :
        (logoShown ?
          <Logo className={isHidden ? "opacity-0  duration-[1000ms]" : ""} />
          :
          (
            < div className="flex flex-col bg-white w-[31.25rem] h-[12.8125rem] rounded-2xl p-6 border border-zinc-300 text-black mx-4 sm:mx-0">

              <Heading
                className="mb-6"
                title="Welcome to CodeLeap network!"
              />

              <div className="flex gap-7 items-center">
                <WarningIcon />

                <Heading
                  size="sm"
                  title={`Hi, ${activeUser.username}. You are already logged in!!!`}
                />
              </div>

              <Button
                className="mt-3"
                onClick={() => navigate('/main')}
              >
                NEXT
              </Button>

            </div>
          )
        )

      }

    </div >
  )
}

