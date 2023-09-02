export const getBorderStyle = (name, errors, touched, values) => {
  const hasError = errors[name] && touched[name];
  return hasError
    ? "border-red-500"
    : values[name]
    ? "border-green-500"
    : "border-gray-700";
};
