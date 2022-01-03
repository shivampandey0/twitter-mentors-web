
export default function Search({ setSearch, onClick}){
    return (
        <div className="search__component">
            <input
            type = "text"
            placeholder="Enter Username"
            onChange={(e) => setSearch(e.target.value)}
            />
            <button onClick={()=>onClick()}>Add</button>
        </div>
    )
}