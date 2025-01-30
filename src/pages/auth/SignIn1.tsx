import mascot from "/mascot2.png";
import arrow from "/arrow2.svg";
import { FormEvent } from "react";
const SignIn1 = () => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
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
