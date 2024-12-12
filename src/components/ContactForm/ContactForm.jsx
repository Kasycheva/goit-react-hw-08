import { Field, Form, Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { addContact } from "../../redux/contacts/operations";
import { selectContacts } from "../../redux/contacts/selectors";
import css from "./ContactForm.module.css";
import toast, { Toaster } from "react-hot-toast";

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const initialValues = { name: "", number: "" };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required!"),
    number: Yup.string()
      .matches(/^\d+$/, "Must be digits only")
      .required("Phone number is required!"),
  });

  const handleSubmit = (values, { resetForm }) => {
    const duplicateContact = contacts.find(
      (contact) =>
        contact.name.toLowerCase() === values.name.toLowerCase() ||
        contact.number === values.number
    );

    if (duplicateContact) {
      toast.error("Contact with the same name or number already exists!");
      return;
    }

    dispatch(addContact(values))
      .unwrap()
      .then(() => {
        toast.success("Contact added successfully!");
        resetForm();
      })
      .catch(() => {
        toast.error("Failed to add contact!");
      });
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className={css.form}>
          <div className={css.inputWrap}>
            <label className={css.label}>Name</label>
            <Field
              name="name"
              type="text"
              className={css.input}
            />
            <ErrorMessage name="name" component="div" className={css.error} />
          </div>
          <div className={css.inputWrap}>
            <label className={css.label}>Phone</label>
            <Field
              name="number"
              type="text"
              className={css.input}
            />
            <ErrorMessage name="number" component="div" className={css.error} />
          </div>
          <button type="submit" className={css.button}>
            Add Contact
          </button>
        </Form>
      </Formik>
      <Toaster />
    </>
  );
};

export default ContactForm;
