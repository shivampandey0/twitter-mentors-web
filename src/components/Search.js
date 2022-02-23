const Search = ({ setSearch, onClick }) => {
  return (
    <div className="search-component">
      <input
        className="input"
        type="search"
        placeholder="Enter Username and press ↵"
        onChange={(e) => setSearch(e.target.value.toLowerCase())}
        onKeyDown={(e) => {
          if (e.key === "Enter") onClick();
        }}
      />
    </div>
  );
};

export default Search;
