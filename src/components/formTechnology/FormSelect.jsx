import { Field, ErrorMessage, useFormikContext } from "formik";

const FormSelect = ({ name, label }) => {
  const { errors, touched, values } = useFormikContext();

  const hasError = errors[name] && touched[name];
  const borderColorClass = hasError
    ? "border-red-500"
    : values[name]
    ? "border-green-500"
    : "border-gray-700";
  return (
    <div className="p-2 w-1/2">
      <div className="relative">
        <label htmlFor={name} className="leading-7 text-sm text-gray-400">
          {label}
        </label>
        <Field
          as="select"
          id={name}
          name={name}
          className={`${borderColorClass} appearance-none w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out`}
        >
          <option value="" disabled>
            Selecciona una dificultad
          </option>
          <option value="Fácil">Fácil</option>
          <option value="Intermedio">Intermedio</option>
          <option value="Difícil">Difícil</option>
        </Field>
        <ErrorMessage name={name} component="div" />
      </div>
    </div>
  );
};

export default FormSelect;
