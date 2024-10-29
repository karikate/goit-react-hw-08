import { Field, Form, Formik } from "formik";
import s from "./RegistrationForm.module.css";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import { Link } from "react-router-dom";

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const initialValues = {
    name: "",
    email: "",
    password: "",
  };
  const handleSubmit = (values, options) => {
    dispatch(register(values));

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
            <Field name="password" type="password" className={s.input}></Field>
          </label>

          <button type="submit">Sing up</button>

          <Link to={"/login"}>
            <p>Log in</p>
          </Link>
        </Form>
      </Formik>
    </div>
  );
};

export default RegistrationForm;
