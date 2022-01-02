
export default function Search({search, setSearch}){
    return (
        <div className="search__component">
            <input
            type = "text"
            placeholder="Enter Username"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            />
        </div>
    )
}