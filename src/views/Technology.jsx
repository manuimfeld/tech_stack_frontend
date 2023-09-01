import { useLocation } from "react-router-dom";
import BackButton from "../components/BackButton";

const Technology = () => {
  const location = useLocation();
  const { props } = location.state;
  return (
    <section className="px-4 text-gray-400 bg-gray-900 body-font">
      <BackButton />
      <div className="container mx-auto flex py-6 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src={props.img_URL}
          />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-primary">
            {props.technology}
          </h1>
          <p className="mb-8 leading-relaxed">{props.description}</p>
          <div className="flex justify-center">
            <button className="inline-flex text-white bg-primary border-0 py-2 px-2 focus:outline-none hover:bg-indigo-600 rounded text-md">
              Me gusta
            </button>
            <button className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-2 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-md">
              Agregar a favoritos
            </button>
          </div>
        </div>
      </div>
      <hr />
      {props.additional_info !== null && (
        <div className="w-full flex flex-wrap justify-around py-6 text-center">
          <h2 className="block w-full mb-4">USO</h2>
          {props.additional_info.usage_examples.map((example) => {
            return (
              <span
                key={props.id}
                className="rounded-full bg-secondary text-bgblack w-fit px-4 py-2 text-xs inline-block"
              >
                {example}
              </span>
            );
          })}
          <h2 className="block w-full my-4">
            Aplicaciones que usan {props.technology}
          </h2>
          {props.additional_info.applications.map((example) => {
            return (
              <span
                key={props.example}
                className="rounded-full bg-secondary text-bgblack w-fit px-4 py-2 text-xs inline-block"
              >
                {example}
              </span>
            );
          })}
        </div>
      )}
    </section>
  );
};

export default Technology;
