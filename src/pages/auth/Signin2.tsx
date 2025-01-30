import { FormEvent } from "react";

const Signin2 = () => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <main className="bg-secondary h-screen mx-[5%]">
      <div className="mt-24">
        <h1 className="text-2xl font-bold text-center">
          Hey HenryJr,
           <br/><span className="text-[#B85B2D] text-center"> How old are you?</span>
        </h1>
        <p className="text-center mt-4">
          Your Pawdy would love to help you by providing appropriate support
          based on your age.
        </p>
      </div>

      <div className="mt-8">
       
      </div>
    </main>
  );
};

export default Signin2;
