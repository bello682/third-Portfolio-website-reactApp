import React from "react";
import FloatingDataLink from "./floatingData";
import ScrollSpy from "react-scrollspy";
import Nav from "./Nav";
import "./floatingNav.css";

const FloatingNav = () => {
	return (
		<ul id="floating__nav">
			<ScrollSpy
				offset={-500}
				className="scrollspy"
				items={["header", "about", "services", "portfolio", "contact"]}
				currentClassName="active"
			>
				{FloatingDataLink.map((floatingItem) => {
					return <Nav key={floatingItem.id} floatingPropsItem={floatingItem} />;
				})}
			</ScrollSpy>
		</ul>
	);
};

export default FloatingNav;

//  to use the scroll screen popup when a screen is been scrolled and u want to go back to top icon popup you have to install,
// $ npm install react-scrollspy --save
