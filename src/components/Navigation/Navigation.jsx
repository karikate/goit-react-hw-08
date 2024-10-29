import clsx from "clsx";
import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

const Navigation = () => {
  const usLoggedIn = useSelector(selectIsLoggedIn);

  const buildLinkClass = ({ isActive }) => {
    return clsx(s.link, isActive && s.activeLink);
  };
  return (
    <div>
      <div className={s.wrapperNav}>
        <NavLink to="/" className={buildLinkClass}>
          Home
        </NavLink>
        {usLoggedIn && (
          <NavLink to="/contacts" className={buildLinkClass}>
            Contacts
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default Navigation;
