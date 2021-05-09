import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
	return (
		<div className="nav">
			<Link to="/" className="linkbtn">Home</Link>
			<Link to="/about" className="linkbtn">About</Link>
		</div>
	);
}

export default Navigation;