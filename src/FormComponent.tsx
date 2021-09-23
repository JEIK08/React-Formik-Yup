// import { useForm } from "./useForm";

import { Formik, Form, Field, ErrorMessage } from "formik";
import { object, string } from "yup";

import { TextField } from "./Fields/Text";

import "./styles.scss";

export function FormComponent() {
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: ""
      }}
      validationSchema={object({
        firstName: string()
          .max(15, "Must be 15 characters or less")
          .required("This field is required"),
        lastName: string()
          .max(20, "Must be 20 characters or less")
          .required("This field is required"),
        email: string()
          .email("Invalid email address")
          .required("This field is required")
      })}
      onSubmit={(data) => {
        console.log("onSubmit", data);
      }}
    >
      <Form>
        <label>First Name</label>
        <TextField name="firstName" />
        {/* <Field type="text" name="firstName" /> */}
        {/* <ErrorMessage name="firstName" /> */}

        <label htmlFor="lastName">Last Name</label>
        <Field type="text" name="lastName" />
        <ErrorMessage name="lastName" />

        <label htmlFor="email">Email Address</label>
        <Field type="email" name="email" />
        <ErrorMessage name="email" />

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
}
