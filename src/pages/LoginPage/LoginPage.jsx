import { Formik, Field, Form } from "formik";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";
import css from "./LoginPage.module.css";

const LoginPage = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(login(values));
    resetForm();
  };

  return (
    <div className={css.container}>
      <h1 className={css.title}>Login</h1>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={handleSubmit}
      >
        <Form className={css.form}>
          <label className={css.label}>
            Email
            <Field
              type="email"
              name="email"
              placeholder="Enter your email"
              className={css.input}
              required
            />
          </label>
          <label className={css.label}>
            Password
            <Field
              type="password"
              name="password"
              placeholder="Enter your password"
              className={css.input}
              required
            />
          </label>
          <button type="submit" className={css.button}>
            Login
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginPage;
