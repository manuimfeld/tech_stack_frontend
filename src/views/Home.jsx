import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main className="flex flex-col justify-center items-center bg-bgblack p-[0px_16px_16px_16px] h-[calc(100vh_-_120px)] text-center">
      <h2 className="uppercase text-white">¿Qué estás buscando?</h2>
      <Link
        to="/technologys"
        className="uppercase text-pwhite text-3xl font-semibold mt-10 flex items-center justify-center w-full h-[25%] border-2 border-primary rounded-[15px]"
      >
        Tecnologías
      </Link>
      <Link
        to="/stacks"
        className="uppercase text-pwhite text-3xl font-semibold mt-10 flex items-center justify-center w-full h-[25%] border-2 border-pgray rounded-[15px]"
      >
        Stacks
      </Link>
    </main>
  );
};

export default Home;
