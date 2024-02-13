import React from "react";

const { url, visit } = usePage();
const [search, setSearch] = useState("");

useEffect(() => {
    const query = search ? `?search=${search}` : "";
    visit(url.pathname + query, { replace: true });
}, [search]);

const Search = () => {
    return (
        <div>
            <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
        </div>
    );
};

export default Search;
