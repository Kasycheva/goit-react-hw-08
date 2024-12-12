import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import css from "./RegistrationPage.module.css";
import toast, { Toaster } from "react-hot-toast"; // Для уведомлений

const RegistrationPage = () => {
  const dispatch = useDispatch();

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .matches(/[a-zA-Z]/, "Password must contain at least one letter")
      .required("Password is required"),
  });

  const handleSubmit = (values, { resetForm }) => {
    dispatch(register(values))
      .unwrap()
      .then(() => {
        toast.success("Registration successful!");
        resetForm();
      })
      .catch(() => {
        toast.error("Registration failed. Please try again.");
      });
  };

  return (
    <div className={css.formContainer}>
      <h1 className={css.heading}>Registration</h1>
      <Formik
        initialValues={{ name: "", email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className={css.form}>
          <div className={css.inputContainer}>
            <label htmlFor="name" className={css.label}>
              Name
            </label>
            <Field
              type="text"
              name="name"
              id="name"
              placeholder="Enter your name"
              className={css.input}
            />
            <ErrorMessage
              name="name"
              component="div"
              className={css.errorMessage}
            />
          </div>

          <div className={css.inputContainer}>
            <label htmlFor="email" className={css.label}>
              Email
            </label>
            <Field
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              className={css.input}
            />
            <ErrorMessage
              name="email"
              component="div"
              className={css.errorMessage}
            />
          </div>

          <div className={css.inputContainer}>
            <label htmlFor="password" className={css.label}>
              Password
            </label>
            <Field
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password"
              className={css.input}
            />
            <ErrorMessage
              name="password"
              component="div"
              className={css.errorMessage}
            />
          </div>

          <button type="submit" className={css.button}>
            Register
          </button>
        </Form>
      </Formik>
      <Toaster />
    </div>
  );
};

export default RegistrationPage;
