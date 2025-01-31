import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

const CategoryCard = ({ name, sub }: { name: string; sub: string }) => {
  const [isDropDownShown, setIsDropDownShown] = useState(false);
  const navigate = useNavigate();

  const handleRolePlayChange = (
    e: FormEvent<HTMLFormElement>,
    name: string
  ) => {
    e.preventDefault();
    localStorage.setItem("pawdy_role_play", name);
    navigate("/chat");
  };

  return (
    <form
      onSubmit={(e) => handleRolePlayChange(e, name)}
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
        <p className="text-primary text-center mb-3">{sub}</p>
        <div className="w-full flex justify-center items-center">
          <button className="bg-[#B85B2D]  text-white rounded-3xl p-2 px-3 mt-1 ">
            Continue
          </button>
        </div>
      </div>
    </form>
  );
};

export default CategoryCard;
