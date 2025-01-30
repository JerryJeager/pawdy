import { Link } from 'react-router-dom';
import mascot from "/MAscot'.png";
import arrow from "/arrow.png"

const MascotLayout = () => {
  return (
    <main className="h-screen bg-secondary relative">
      <div className="w-full h-1/3 bg-[#D6A085] relative rounded-b-full">
        {/* Position the container relative to the brown section */}
        <div className="absolute left-1/2 -translate-x-1/2  -bottom-[40%] transform">
          <img src={mascot} className='w-fit' alt="mascot" />
        </div>
      </div>
      
      <div className="mt-28 w-full">
        <h1 className="text-2xl font-bold text-center">
          Hey I'm <span className="text-primary">Your Pawdy</span>
        </h1>
        <p className="text-center text-primary font-semibold mt-4 mx-[5%] lg:mx-[10%]">
          I'm here to help you relax—because clearly, you can't do it on your own!
        </p>
        <div className="w-full flex justify-center mt-14">
          <Link to="/sign-in/1" className="mx-auto w-fit animate-bounce">
            <img src={arrow} alt="arrow" className="mt-8" />
          </Link>
        </div>
      </div>
    </main>
  );
};

export default MascotLayout;