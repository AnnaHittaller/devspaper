import { useNavigate,useLocation  } from "react-router-dom";
import { SearchContext } from "../context/SearchContext";
import { useContext,useState,useEffect, useRef } from "react";

function SearchBar() {

    const { handleSearch,query_reset } = useContext(SearchContext);
    const [home_Query, setHome_Query]= useState(query_reset)

    const navigate = useNavigate();
    const location = useLocation();
    const refFocus = useRef();

    const handleSearchFunction = (e) => {
        if(e.key === 'Enter') {
            navigate('/search')
            handleSearch(home_Query)
        }
    }

    useEffect(() => {
        if (location.pathname === "/search") {
            refFocus.current.focus()
            handleSearch(home_Query);
            console.log("location.pathname",location.pathname)}
    }, [location,home_Query]);



    const  handelSubmit = (e) => {       
        e.preventDefault();
    }

    return (
			<>
				<form onSubmit={handelSubmit}>
					<span className="search-span">Search: </span>
					<input
						placeholder="Search by title, author or url... "
						// autofocus
						ref={refFocus}
						type="text"
						value={home_Query}
						onChange={(e) => setHome_Query(e.target.value)}
						onKeyDown={handleSearchFunction}
					/>
				</form>
			</>
		);

}

export default SearchBar;
