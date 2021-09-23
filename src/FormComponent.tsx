// import { useForm } from "./useForm";

import { useFormik } from "formik";
import { object, string } from "yup";

export function FormComponent() {
  const form = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: ""
    },
    validationSchema: object({
      firstName: string()
        .max(15, "Must be 15 characters or less")
        .required("This field is required"),
      lastName: string()
        .max(20, "Must be 20 characters or less")
        .required("This field is required"),
      email: string()
        .email("Invalid email address")
        .required("This field is required")
    }),
    onSubmit: (values) => {
      console.log("onSubmit", values);
    }
  });

  console.log(form);
  const { handleSubmit, getFieldProps, errors, touched } = form;

  return (
    <form noValidate onSubmit={handleSubmit}>
      <label htmlFor="firstName">First Name</label>
      <input type="text" {...getFieldProps("firstName")} />
      {errors.firstName && touched.firstName && <div>{errors.firstName}</div>}

      <label htmlFor="lastName">Last Name</label>
      <input type="text" {...getFieldProps("lastName")} />
      {errors.lastName && touched.lastName && <div>{errors.lastName}</div>}

      <label htmlFor="email">Email Address</label>
      <input type="email" {...getFieldProps("email")} />
      {errors.email && touched.email && <div>{errors.email}</div>}

      <button type="submit">Submit</button>
    </form>
  );
}
