import { useFormik } from "formik";

type FormukReturn = ReturnType<typeof useFormik> & { props?: any };
type FormHook<FormikFunction extends typeof useFormik = typeof useFormik> = (
  ...p: Parameters<FormikFunction>
) => FormukReturn;

export const useForm: FormHook = (data) => {
  if (data.validateOnMount === undefined) data.validateOnMount = true;
  const formik: FormukReturn = useFormik(data);
  formik.props = Object.keys(formik.values).reduce((obj: any, key: string) => {
    obj[key] = {
      name: key,
      value: formik.values[key],
      onChange: formik.handleChange,
      onBlur: formik.handleBlur
    };
    return obj;
  }, {});
  return formik;
};
