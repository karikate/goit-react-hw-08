import { useDispatch, useSelector } from "react-redux";
import s from "./SearchBox.module.css";
import { changeFilter } from "../../redux/filters/slice";
import { selectNameFilter } from "../../redux/filters/selectors";

const SearchBox = () => {
  const dispatch = useDispatch();
  const search = useSelector(selectNameFilter);

  return (
    <div>
      <label className={s.label}>
        <span>Find contacts by name</span>
        <input
          type="text"
          value={search}
          onChange={(e) => dispatch(changeFilter(e.target.value))}
        />
      </label>
    </div>
  );
};

export default SearchBox;
