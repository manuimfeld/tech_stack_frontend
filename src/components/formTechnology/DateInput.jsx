import { Field, ErrorMessage, useFormikContext } from "formik";
import DatePicker, { registerLocale } from "react-datepicker";
import es from "date-fns/locale/es";
import "react-datepicker/dist/react-datepicker.css";
registerLocale("es", es);

const DateInput = ({ name, label }) => {
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
        <label htmlFor={label} className="leading-7 text-sm text-gray-400">
          {label}
        </label>
        <Field name={name}>
          {({ field, form }) => (
            <DatePicker
              name={name}
              id={name}
              selected={field.value ? new Date(field.value) : null}
              onChange={(date) => {
                /*Formateo date para que se vea 2002-03-15 para MYSQL*/
                const formattedDate = date
                  ? `${date.getFullYear()}-${
                      date.getMonth() + 1
                    }-${date.getDate()}`
                  : "";
                form.setFieldValue(name, formattedDate);
                console.log(formattedDate);
              }}
              peekNextMonth
              showMonthDropdown
              /*Lo muestro como 15-03-2002*/
              dateFormat="dd-MM-yyyy"
              showYearDropdown
              locale="es"
              dropdownMode="select"
              className={`${borderColorClass} w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out`}
            />
          )}
        </Field>
        <ErrorMessage name={name} component="div" />
      </div>
    </div>
  );
};

export default DateInput;
