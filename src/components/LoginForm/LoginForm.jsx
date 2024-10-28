import { Field, Form, Formik } from "formik";
import s from "./LoginForm.module.css";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operaions";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const LoginForm = () => {
  const dispatch = useDispatch();
  const initialValues = {
    email: "",
    password: "",
  };
  const handleSubmit = (values, options) => {
    dispatch(login(values))
      .unwrap()
      .then((res) => {
        toast(`Welcome, ${res.user.name}`);
      })
      .catch(() => {
        toast(`Invalid credential`);
      });

    options.resetForm();
  };
  return (
    <div className={s.wrapper}>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={s.form}>
          <label className={s.label}>
            <p className={s.name}>Email</p>
            <Field name="email" className={s.input}></Field>
          </label>
          <label className={s.label}>
            <p className={s.name}>Password</p>
            <Field name="password" type="password" className={s.input}></Field>
          </label>

          <button type="submit">Log in</button>

          <Link to={"/signup"}>
            <p>Sign up</p>
          </Link>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;
