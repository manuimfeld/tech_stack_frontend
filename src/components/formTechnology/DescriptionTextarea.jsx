import { Field, ErrorMessage, useFormikContext } from "formik";

const DescriptionTextarea = ({ name, label }) => {
  const { errors, touched, values } = useFormikContext();

  const hasError = errors[name] && touched[name];
  const borderColorClass = hasError
    ? "border-red-500"
    : values[name]
    ? "border-green-500"
    : "border-gray-700";
  return (
    <div className="p-2 w-full">
      <div className="relative">
        <label htmlFor={name} className="leading-7 text-sm text-gray-400">
          {label}
        </label>
        <Field
          as="textarea"
          id={name}
          name={name}
          className={`${borderColorClass} w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out`}
        ></Field>
        <ErrorMessage name={name} component="div" />
      </div>
    </div>
  );
};

export default DescriptionTextarea;
