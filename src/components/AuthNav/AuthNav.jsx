import s from "./AuthNav.module.css";
import { NavLink } from "react-router-dom";

const AuthNav = () => {
  return (
    <div>
      <div className={s.wrapperReg}>
        <NavLink to="/signup">Register</NavLink>
        <NavLink to="/login">Login</NavLink>
      </div>
    </div>
  );
};

export default AuthNav;
