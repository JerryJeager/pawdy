import mascot from "/mascot2.png";
import arrow from "/arrow2.svg";
import { FormEvent, useState } from "react";
import {useNavigate } from "react-router-dom";

const SignIn1 = () => {
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    localStorage.setItem("pawdy_user", userName);

    navigate("/sign-in/2");
  };
  return (
    <main className="bg-secondary h-screen mx-[5%]">
      <div className="mt-24">
        <h1 className="text-2xl font-bold text-center">
          Hey I'm <span className="text-[#B85B2D] text-center">Your Pawdy</span>
        </h1>
        <p className="text-center mt-4">
          Our conversations are private & anonymous, so there is no login. Just
          choose a nickname and we’re good to go.
        </p>
      </div>

      <div className="mt-8">
        <form action="" onSubmit={handleSubmit} className="relative">
          <div>
            <img src={mascot} alt="mascot" className="" />
            <div className="">
              <input
                type="text"
                value={userName}
                onChange={(e) => setUserName(e?.target?.value)}
                className="p-3 h-12 rounded-xl outline-none text-primary z-2 mt-3 w-full bg-white placeholder:text-tertiary absolute bottom-0"
                placeholder="Choose a Nickname"
              />
            </div>
          </div>
          <button className="absolute right-3 h-10 bottom-1 bg-white">
            <img src={arrow} alt="submit" className="h-full" />
          </button>
        </form>
      </div>
    </main>
  );
};

export default SignIn1;
