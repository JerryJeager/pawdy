import CategoryCard from "../../components/CategoryCard";

const Signin3 = () => {
  const disorderList = [
    {
      name: "Going throught alot",
      sub: "if you've been feeling low, hopeless or tired all the time, this can be of help.",
    },
    {
      name: "Overcoming Depression",
      sub: "if you've been feeling low, hopeless or tired all the time, this can be of help.",
    },
    {
      name: "Tackling Stress",
      sub: "if you've been feeling low, hopeless or tired all the time, this can be of help.",
    },
    {
      name: "Managing Anger",
      sub: "if you've been feeling low, hopeless or tired all the time, this can be of help.",
    },
    {
      name: "Beating Anxiety",
      sub: "if you've been feeling low, hopeless or tired all the time, this can be of help.",
    },
    {
      name: "Sleeping Better",
      sub: "if you've been feeling low, hopeless or tired all the time, this can be of help.",
    },
    {
      name: "Living Happier",
      sub: "if you've been feeling low, hopeless or tired all the time, this can be of help.",
    },
  ];
  return (
    <main className="mx-[5%]">
      <h1 className="text-2xl mt-10 font-bold text-center">
        Hey I'm <span className="text-[#B85B2D] text-center">Your Pawdy</span>
      </h1>

      <div className="grid gap-4 mt-8 text-primary">
        {disorderList.map((d, index) => (
          <CategoryCard key={index} {...d} />
        ))}
      </div>
    </main>
  );
};

export default Signin3;
