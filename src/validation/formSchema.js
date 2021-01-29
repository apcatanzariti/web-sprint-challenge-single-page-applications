import * as yup from 'yup';

export default yup.object().shape({
    name: yup
      .string()
      .required("Name is required!")
      .min(3, "Name must be at least 3 characters long!"),
    size: yup
      .string()
      .oneOf(["Small", "Medium", "Large"], "Must choose a size!"),
    pepperoni: yup.boolean(),
    olives: yup.boolean(),
    bacon: yup.boolean(),
    extra: yup.boolean(),
    instructions: yup
      .string()
  });