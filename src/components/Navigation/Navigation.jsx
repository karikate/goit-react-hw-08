import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";
import clsx from "clsx";
import { useDispatch, useSelector } from "react-redux";
import { selectIsLogIn, selectUser } from "../../redux/auth/selectors";
import { logout } from "../../redux/auth/operaions";

const Navigation = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const isLogIn = useSelector(selectIsLogIn);
  const buildLinkClass = ({ isActive }) => {
    return clsx(s.link, isActive && s.activeLink);
  };
  return (
    <div className={s.wrapper}>
      <div className={s.wrapperNav}>
        <NavLink to="/" className={buildLinkClass}>
          Home
        </NavLink>
        <NavLink to="/contacts" className={buildLinkClass}>
          Contacts
        </NavLink>
      </div>
      {isLogIn && (
        <div className={s.wrapperReg}>
          <p>Welcome,{user.name}</p>

          <button type="submit" onClick={() => dispatch(logout())}>
            Logout
          </button>
        </div>
      )}
      {!isLogIn && (
        <div className={s.wrapperReg}>
          <NavLink to="/signup" className={buildLinkClass}>
            Signup
          </NavLink>
          <NavLink to="/login" className={buildLinkClass}>
            Login
          </NavLink>{" "}
        </div>
      )}
    </div>
  );
};

export default Navigation;
