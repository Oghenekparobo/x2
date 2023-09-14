import { useState } from "react";
import { useNavigate } from "react-router-dom";
import navSearchLogo from "../../assets/nav/Search.svg";

const SearchInput = () => {
  const [query, setQuery] = useState("");

  const navigate = useNavigate();

  const searchQueryHandler = (e) => {
    if (e.key === "Enter" && query.length > 1) {
      navigate(`/search/${query}`);
    }
  };

  return (
    <div className="nav-searchbox relative border border-white rounded-md w-6/12 flex items-center px-2 my-10 md:my-0">
      <input
        type="text"
        className="w-full bg-transparent outline-0 py-2 text-white placeholder-white"
        placeholder="What do you want to watch?"
        onChange={(e) => setQuery(e.target.value)}
        onKeyUp={searchQueryHandler}
      />
      <img
        src={navSearchLogo}
        alt="navSearchLogo"
        className="ml-auto w-3 h-3"
      />
    </div>
  );
};

export default SearchInput;
