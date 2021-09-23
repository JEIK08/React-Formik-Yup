import { Formik, Form, Field, ErrorMessage } from "formik";

import "./styles.css";

const EMAIL_REG_EXP = new RegExp("^\\S+@\\S+\\.\\S+$");

export function Template() {
  const initialValues: any = { email: "", password: "" };

  const validate = ({ email, password }) => {
    const errors: any = {};
    if (!email) errors.email = "Required";
    else if (!EMAIL_REG_EXP.test(email)) errors.email = "Invalid email";
    if (!password) errors.password = "Required";
    console.log(errors);
    return errors;
  };

  const onSubmit = (...params) => {
    console.log("on submit", params);
  };

  return (
    <Formik
      initialValues={initialValues}
      validate={validate}
      onSubmit={onSubmit}
    >
      {(params) => {
        console.log("Content: ", params);
        const { handleSubmit, handleChange, handleBlur } = params;
        const { email, password } = params.values;
        return (
          <Form>
            <Field type="email" name="email" />
            <ErrorMessage name="email" component="span" />
            <Field type="password" name="password" />
            <ErrorMessage name="password" component="span" />
            <button type="submit">Submit</button>
          </Form>
          // <form onSubmit={handleSubmit}>
          //   <input
          //     type="email"
          //     name="email"
          //     onChange={handleChange}
          //     onBlur={handleBlur}
          //     value={email}
          //   />
          //   <input
          //     type="password"
          //     name="password"
          //     onChange={handleChange}
          //     onBlur={handleBlur}
          //     value={password}
          //   />
          //   <button type="submit">Submit</button>
          // </form>
        );
      }}
    </Formik>
  );
}
