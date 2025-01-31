// import { FormEvent } from "react";
import { Link } from "react-router";
import check from "/check.png";
import checkgood from "/checkgood.png";
import lineArrow from "/lineArrow.png";
import { useState } from "react";

const Signin2 = () => {
  //   const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
  //     e.preventDefault();
  //   };
  const [is18Plus, setIs18Plus] = useState<boolean | null>();
  const userName = localStorage.getItem("pawdy_user");
  return (
    <main className="bg-secondary h-screen mx-[5%]">
      <div className="mt-24">
        <h1 className="text-2xl font-bold text-center">
          Hey {userName},
          <br />
          <span className="text-[#B85B2D] text-center"> How old are you?</span>
        </h1>
        <p className="text-center mt-4 text-primary">
          Your Pawdy would love to help you by providing appropriate support
          based on your age.
        </p>
      </div>

      <div className="mt-8 flex flex-col gap-4 text-primary">
        <button
          onClick={() => setIs18Plus(true)}
          className="bg-white p-4 rounded-2xl relative flex justify-between items-center"
        >
          <p>18 years or older</p>
          <div>
            <img
              src={is18Plus && is18Plus === true ? checkgood : check}
              alt=""
            />
          </div>
        </button>
        <button
          onClick={() => setIs18Plus(false)}
          className="bg-white p-4 rounded-2xl flex justify-between items-center"
        >
          <p>13 to 17 years old</p>
          <div>
            <img src={is18Plus === false ? checkgood : check} alt="" />
          </div>
        </button>
        <Link
          to={"/sign-in/3"}
          className="bg-primary text-white rounded-3xl mx-auto p-3 w-[150px] text-center mt-8 flex gap-1 items-center justify-center"
        >
          <p>Continue</p>
          <div>
            <img src={lineArrow} alt="" />
          </div>
        </Link>
      </div>
    </main>
  );
};

export default Signin2;
