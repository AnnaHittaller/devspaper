import { Routes, Route } from "react-router-dom";
import "./App.css";
import MainPage from "./pages/MainPage";
import SearchPage from "./pages/SearchPage";
import { useContext } from "react";
import HashLoader from "react-spinners/HashLoader";
import Header from "./components/Header";
import { SearchContext } from "../src/context/SearchContext";

function App() {
	const { loading } = useContext(SearchContext);

	return (
		<>
			<Header />
			{loading ? (
				<HashLoader
					color="#587eaa"
					cssOverride={{ margin: "40vh auto" }}
					loading
					size={50}
				/>
			) : (
				<>
					<Routes>
						<Route path="/" element={<MainPage />} />
						<Route path="/search" element={<SearchPage />} />
						<Route
							path="*"
							element={<h1 className="not-found">Error 404 Not Found</h1>}
						/>
					</Routes>
				</>
			)}
		</>
	);
}

export default App;
