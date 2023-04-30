import { useEffect } from "react";
import { Routes, Route, NavLink, Link } from "react-router-dom";
import PostHighlight from "../components/PostHighlight";
import Footer from "../components/Footer";



function MainPage({posts}) {

    useEffect(()=> {
        
    })

	return (
		<>
			<div className="main">
				{/* Hi from main page */}
				<PostHighlight posts={posts} />
				<Footer/>
			</div>
		</>
	);
}

export default MainPage;

