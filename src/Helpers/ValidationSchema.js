import * as yup from "yup";

const validationSchema = yup.object().shape({
  clinic_name: yup
    .string()
    .max(60, "Maximum length is 60")
    .matches(
      /^[a-zA-Z0-9-' ]+$/,
      "Only alphanumeric characters, hyphens, and spaces are allowed"
    ),
  clinicId: yup.number().required("Enter a valid Clinic ID"),
  userName: yup.string().required("Enter a valid Username"),
  password: yup.string().required("Enter a valid Password"),
});

export default validationSchema;
