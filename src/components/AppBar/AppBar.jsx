import { useSelector } from "react-redux";
import Navigation from "../Navigation/Navigation";
import UserMenu from "../UserMenu/UserMenu";
import AuthNav from "../AuthNav/AuthNav";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import s from "./AppBar.module.css";

const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <div className={s.wrapper}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </div>
  );
};

export default AppBar;
