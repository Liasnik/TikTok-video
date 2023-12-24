import { Search as SearchIcon } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { useLocation, useMatch, useNavigate } from "react-router-dom";
import s from "./search.module.scss";

const Search = () => {
  const [value, setValue] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const isMatch = useMatch("search");

  useEffect(() => {
    if (isMatch) return;
    setValue("");
  }, [location, isMatch]);

  const handleChange = ({ target: { value: val } }) => {
    setValue(val);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!value.trim()) return;

    navigate(`/search?q=${value}`);
  };

  return (
    <form className={s.search} onSubmit={handleSubmit}>
      <div className={s.input}>
        <SearchIcon style={{ color: "rgb(166, 166, 166)" }} />
        <input
          type="text"
          name="search"
          onChange={handleChange}
          value={value}
          placeholder="Search"
        />
      </div>
      <button type="submit">Search</button>
    </form>
  );
};

export default Search;
