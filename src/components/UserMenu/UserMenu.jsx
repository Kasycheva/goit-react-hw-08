import { useSelector, useDispatch } from "react-redux";
import { selectAuthUser } from "../../redux/auth/selectors";
import { logout } from "../../redux/auth/operations";
import css from "./UserMenu.module.css";

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectAuthUser);

  return (
    <div className={css.userMenu}>
      <span className={css.userName}>Welcome, {user.name}!</span>
      <button
        className={css.logoutButton}
        onClick={() => dispatch(logout())}
      >
        Log Out
      </button>
    </div>
  );
};

export default UserMenu;
