import { Field, Form, Formik } from "formik";
import s from "./SingupForm.module.css";
import { useDispatch } from "react-redux";
import { signup } from "../../redux/auth/operaions";

const SingupForm = () => {
  const dispatch = useDispatch();
  const initialValues = {
    name: "",
    email: "",
    password: "",
  };
  const handleSubmit = (values, options) => {
    dispatch(signup(values));

    options.resetForm();
  };
  return (
    <div className={s.wrapper}>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={s.form}>
          <label className={s.label}>
            <p className={s.name}>Name</p>
            <Field name="name" className={s.input}></Field>
          </label>
          <label className={s.label}>
            <p className={s.name}>Email</p>
            <Field name="email" className={s.input}></Field>
          </label>
          <label className={s.label}>
            <p className={s.name}>Password</p>
            <Field name="password" className={s.input}></Field>
          </label>

          <button type="submit">Sing up</button>
        </Form>
      </Formik>
    </div>
  );
};

export default SingupForm;
