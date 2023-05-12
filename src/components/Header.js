import { createContext,useContext  } from "react";
import SearchBar from "./SearchBar";
import { Routes, Route, NavLink, Link } from "react-router-dom";
import { SearchContext } from "../context/SearchContext";
import logo from '../assets/devspaper.png'


function Header() {

	const {handleGoToHome} = useContext(SearchContext)

    return (
			<div className="header">
				<div className="header-left">
					<div className="logo-div">
						{/* //added onClick to go back to first page */}
						<Link className="logo-div" onClick={handleGoToHome} to='/' >		
							<img
								className="logo"
								src={logo}
								alt=""
							/>
						</Link>
					</div>
				</div>
				<div className="header-right">
					<SearchBar />
					{/* <p>login</p> */}
				</div>
			</div>
		);
}

export default Header;