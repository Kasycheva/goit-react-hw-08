import { useDispatch, useSelector } from 'react-redux';
import { register } from '../../redux/auth/operations';
import { selectAuthIsLoggedIn } from '../../redux/auth/selectors';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import css from './RegistrationForm.module.css';

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useSelector(selectAuthIsLoggedIn);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(register({ name, email, password }));
  };


  useEffect(() => {
    if (isLoggedIn) {
      navigate('/contacts'); 
    }
  }, [isLoggedIn, navigate]);

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
          required
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
      </label>
      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;
