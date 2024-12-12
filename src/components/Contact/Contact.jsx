import PropTypes from "prop-types";
import css from "./Contact.module.css";

const Contact = ({ id, name, number, onDelete }) => {
  return (
    <li className={css.item}>
      <p>
        {name}: {number}
      </p>
      <button className={css.button} onClick={() => onDelete(id)}>
        Delete
      </button>
    </li>
  );
};

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Contact;
