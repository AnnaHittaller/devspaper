import { Routes, Route, NavLink, Link } from "react-router-dom";
import PostHighlight from "../components/PostHighlight";
import { SearchContext } from "../context/SearchContext";
import { useContext } from "react";

function SearchPage() {

	const { query } = useContext(SearchContext);
	return (
		<div className="main">
			<h2>Search results for: {query}</h2>
			<PostHighlight />
		</div>
	);
}

export default SearchPage;
