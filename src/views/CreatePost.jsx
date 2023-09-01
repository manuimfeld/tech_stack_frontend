import FormField from "../components/formTechnology/FormField";
import FormSelect from "../components/formTechnology/FormSelect";
import DescriptionTextarea from "../components/formTechnology/DescriptionTextarea";
import DateInput from "../components/formTechnology/DateInput";
import { useState } from "react";
import { Formik, Form } from "formik";
import { validationTechnology } from "../helpers/yupValidations";
import { postTechnology } from "../api/technologys";

const NewTechnologyForm = () => {
  const [step, setStep] = useState(1);

  const handleNextStep = () => {
    if (step === 1) {
      setStep(step + 1);
    } else {
      setStep(step - 1);
    }
  };
  return (
    <Formik
      initialValues={{
        technology: "",
        difficulty: "",
        description: "",
        creation_date: "",
        img_URL: "",
      }}
      validationSchema={validationTechnology}
      onSubmit={(values, actions) => {
        // Maneja la lógica de envío del formulario aquí
        console.log(values);
        console.log(actions);
        postTechnology(values);
      }}
    >
      <Form>
        <section className="min-h-[calc(100vh_-_60px)] text-gray-400 py-4 px-4 bg-gray-900 body-font relative">
          <div className="container mx-auto">
            <div className="flex flex-col text-center w-full mb-12">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
                Crear nueva tecnología
              </h1>
            </div>
            <div className="lg:w-1/2 md:w-2/3 mx-auto">
              <div className="flex flex-wrap -m-2">
                {step === 1 && (
                  <>
                    <FormField name="technology" label="Tecnología" />
                    <FormSelect name="difficulty" label="Dificultad" />
                    <DescriptionTextarea
                      name="description"
                      label="Descripción"
                    />
                    <DateInput
                      name="creation_date"
                      label="Fecha de lanzamiento"
                    />
                    <FormField name="img_URL" label="URL de la imagen" />
                    <div className="p-2 w-full">
                      <button
                        onClick={() => handleNextStep()}
                        className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                      >
                        Siguiente
                      </button>
                      <button
                        type="submit"
                        className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                      >
                        Publicar
                      </button>
                    </div>
                  </>
                )}
                {step === 2 && (
                  <>
                    <FormField label="Usos" />
                    <FormField label="Aplicaciones" />
                    <div className="p-2 w-full">
                      <button
                        onClick={() => handleNextStep()}
                        className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                      >
                        Atrás
                      </button>
                      <button
                        onClick={() => handleNextStep}
                        className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                      >
                        Publicar
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </section>
      </Form>
    </Formik>
  );
};

export default NewTechnologyForm;
