import { useState } from "react";

const CategoryCard = ({ name, sub }: { name: string; sub: string }) => {
  const [isDropDownShown, setIsDropDownShown] = useState(false);

  return (
    <button
      onClick={() => setIsDropDownShown((prev) => !prev)}
      className="bg-white p-3 rounded-2xl w-full transition-all duration-300"
    >
      <p className="text-center">{name}</p>
      <div
        className={`
          overflow-hidden transition-all duration-300 ease-in-out
          ${isDropDownShown ? " opacity-100 mt-2" : "max-h-0 opacity-0"}
        `}
      >
        <p className="text-primary">{sub}</p>
        <button className="bg-[#B85B2D]  text-white rounded-3xl py-2 px-3 mt-6">
          Continue
        </button>
      </div>
    </button>
  );
};

export default CategoryCard;
