import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectAuthIsLoggedIn, selectAuthIsRefreshing } from "../../redux/auth/selectors";

export const PrivateRoute = ({ component, redirectTo = "/login" }) => {
  const isLoggedIn = useSelector(selectAuthIsLoggedIn);
  const isRefreshing = useSelector(selectAuthIsRefreshing);

  if (isRefreshing) {
    return null; 
  }

  return isLoggedIn ? component : <Navigate to={redirectTo} />;
};
