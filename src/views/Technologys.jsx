import { useEffect, useState } from "react";
import Cards from "../components/Cards";
import { getTechnologys } from "../api/technologys";
import BackButton from "../components/BackButton";
import SpinnerLoad from "../components/SpinnerLoad";

const Technologys = () => {
  const [techs, setTechs] = useState(null);

  useEffect(() => {
    getTechnologys(setTechs);
  }, []);

  return (
    <section className="min-h-[calc(100vh_-_120px)] text-gray-400 px-5 bg-gray-900 body-font">
      <BackButton />
      <div className="container py-4 mx-auto">
        <div className="flex flex-wrap -m-4">
          {techs !== null ? (
            techs.map((techMap) => {
              return <Cards props={techMap} key={techMap.id} />;
            })
          ) : (
            <SpinnerLoad />
          )}
        </div>
      </div>
    </section>
  );
};

export default Technologys;
