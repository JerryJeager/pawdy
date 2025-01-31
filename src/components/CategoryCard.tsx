import { useState } from "react";
import { Link } from "react-router";

const CategoryCard = ({ name, sub }: { name: string; sub: string }) => {
  const [isDropDownShown, setIsDropDownShown] = useState(false);

  return (
    <button
      onClick={() => setIsDropDownShown((prev) => !prev)}
      className="bg-white h-fit p-3 rounded-2xl w-full transition-all duration-300"
    >
      <p className="text-center">{name}</p>
      <div
        className={`
          overflow-hidden transition-all duration-300 ease-in-out
          ${isDropDownShown ? " py-3 opacity-100 mt-2" : "max-h-0 opacity-0"}
        `}
      >
        <p className="text-primary mb-3">{sub}</p>
        <Link to={"/chat"} className="bg-[#B85B2D]  text-white rounded-3xl p-2 px-3 mt-12">
          Continue
        </Link>
      </div>
    </button>
  );
};

export default CategoryCard;
