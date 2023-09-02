import { Field, ErrorMessage, useFormikContext } from "formik";
import { getBorderStyle } from "../../helpers/formHelpers";

const FormField = ({ name, label }) => {
  const { errors, touched, values } = useFormikContext();

  const borderColorClass = getBorderStyle(name, errors, touched, values);

  return (
    <div className="p-2 w-1/2">
      <div className="relative">
        <label htmlFor={name} className="leading-7 text-sm text-gray-400">
          {label}
        </label>
        <Field
          type="text"
          id={name}
          name={name}
          className={`${borderColorClass} w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out`}
        />
        <ErrorMessage name={name} component="div" />
      </div>
    </div>
  );
};

export default FormField;
