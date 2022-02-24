const Search = ({ setSearch, searchValue, onClick }) => {
  return (
    <div className="search-component">
      <input
        className="input"
        type="search"
        placeholder="Enter Username and press ↵"
        onChange={(e) => setSearch(e.target.value.toLowerCase())}
        value={searchValue}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            setSearch("");
            onClick();
          }
        }}
      />
    </div>
  );
};

export default Search;
