import React from "react";
import Logo from "../../images/logo.png";
import NavDataLinks from "./navData";
import { useModalContext } from "../../context/modal-context-proj";
import { IoIosColorPalette } from "react-icons/io";

import "./navbar.css";

const Navbar = () => {
	const { ShowModalHandler } = useModalContext();
	return (
		<nav id="navbar">
			<div className="container nav__container">
				<a href="index.html" className="nav__logo">
					<img src={Logo} alt="LOGO" />
				</a>

				<ul className="nav__menu">
					{NavDataLinks.map((dataItem) => {
						return (
							<li key={dataItem.id}>
								<a href={dataItem.link} className="nav__menu_anchor">
									{dataItem.title}
								</a>
							</li>
						);
					})}
				</ul>

				<button id="theme__icon" onClick={ShowModalHandler}>
					<IoIosColorPalette />
				</button>
			</div>
		</nav>
	);
};

export default Navbar;
