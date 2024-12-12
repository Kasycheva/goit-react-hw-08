import React from "react";
import { useSelector } from "react-redux";
import { selectAuthIsLoggedIn, selectAuthUser } from "../../redux/auth/selectors";
import { Navigation } from "../Navigation/Navigation";
import { AuthNav } from "../AuthNav/AuthNav";
import UserMenu from "../UserMenu/UserMenu";
import css from "./AppBar.module.css";

export const AppBar = () => {
  const isLoggedIn = useSelector(selectAuthIsLoggedIn);

  return (
    <header className={css.appBar}>
      <h1 className={css.logo}>Phonebook App</h1>
      <nav className={css.nav}>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </nav>
    </header>
  );
};

export default AppBar;
