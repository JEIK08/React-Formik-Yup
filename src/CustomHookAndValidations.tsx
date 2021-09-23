import { useForm } from "./useForm";

export function CustomHookAndValidations() {
  const form = useForm({
    initialValues: {
      firstName: "",
      lastName: "",
      email: ""
    },
    validate: (values) => {
      console.log("Validate", values);
      const errors: any = {};
      if (!values.firstName) {
        errors.firstName = "Required";
      } else if (values.firstName.length > 15) {
        errors.firstName = "Must be 15 characters or less";
      }

      if (!values.lastName) {
        errors.lastName = "Required";
      } else if (values.lastName.length > 20) {
        errors.lastName = "Must be 20 characters or less";
      }

      if (!values.email) {
        errors.email = "Required";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
      ) {
        errors.email = "Invalid email address";
      }

      return errors;
    },
    onSubmit: (values) => {
      console.log("onSubmit", values);
    }
  });

  console.log(form);
  const { handleSubmit, props, errors, touched } = form;

  return (
    <form noValidate onSubmit={handleSubmit}>
      <label htmlFor="firstName">First Name</label>
      <input type="text" {...props.firstName} />
      {errors.firstName && touched.firstName && <div>{errors.firstName}</div>}

      <label htmlFor="lastName">Last Name</label>
      <input type="text" {...props.lastName} />
      {errors.lastName && touched.lastName && <div>{errors.lastName}</div>}

      <label htmlFor="email">Email Address</label>
      <input type="email" {...props.email} />
      {errors.email && touched.email && <div>{errors.email}</div>}

      <button type="submit">Submit</button>
    </form>
  );
}
