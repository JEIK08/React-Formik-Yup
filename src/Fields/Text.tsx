import { useField } from "formik";

export const TextField = ({ name, ...props }) => {
  const [fieldProps, { error, touched }] = useField(name);

  return (
    <>
      <input {...props} {...fieldProps} />
      {touched && error && <span>{error}</span>}
    </>
  );
};
