import { parse } from "date-fns";
import * as Yup from "yup";

export const validationTechnology = Yup.object().shape({
  technology: Yup.string()
    .required("El campo de tecnología es requerido")
    .max(30, "La tecnología no debe tener más de 30 caracteres"),
  description: Yup.string().required("El campo de descripción es requerido"),
  difficulty: Yup.string().required("La dificultad es requerida"),
  creation_date: Yup.date()
    .transform(function (value, originalValue) {
      if (this.isType(value)) {
        return value;
      }
      const result = parse(originalValue, "dd.MM.yyyy", new Date());
      return result;
    })
    .typeError("Por favor, selecciona una fecha valida")
    .required("Por favor, selecciona la fecha de lanzamiento"),
  img_URL: Yup.string()
    .required("El link de la imagen es requerida")
    .matches(
      /(https?:\/\/.*\.(?:png|jpg|jpeg))/,
      "La URL de la imagen debe terminar en .png, .jpg o .jpeg"
    )
    .max(200, "La URL de la imagen no debe tener más de 200 caracteres"),
});
