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


export const ClaimsFormValidationSchema = yup.object({
  patientName: yup.string().required("Patient Name is required"),
  mrn: yup
    .number()
    .required("MRN is required")
    .typeError("MRN must be a number"),
  providerId: yup
    .number()
    .required("Provider is required")
    .typeError("Provider is required"),
  dos: yup
    .date()
    .required("Date of Service is required")
    .typeError("Date of Service is required"),
  primaryPayerId: yup
    .number()
    .required("Payor is required")
    .typeError("Payor is required"),
  facilityId: yup
    .number()
    .required("Facility is required")
    .typeError("Facility is required"),
  apptType: yup
    .number()
    .required("Service is required")
    .typeError("Service is required"),
  billed: yup.number().required("Charges are required"),
  primaryPending: yup
    .number()
    .required("Insurance Balance must be a number")
    .typeError("Insurance Balance must be a number"),
  patientPending: yup
    .number()
    .required("Patient Balance must be a number")
    .typeError("Patient Balance must be a number"),
  status: yup.string().required("Claim Status is required"),
  visitId: yup
    .string()
    .required("Visit Id is required")
    .typeError("Viist must be a number"),
});