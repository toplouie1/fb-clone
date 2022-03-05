import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";

function Header() {
	return (
		<div className="header">
			<div className="header__left">
				<img
					src="https://www.logo.wine/a/logo/Facebook/Facebook-f_Logo-Blue-Logo.wine.svg"
					alt="facebook logo"
				/>
				<div className="header__input">
					<SearchIcon />
					<input type="text" />
				</div>
			</div>
			<div className="header__middle"></div>
			<div className="header__right"></div>
		</div>
	);
}

export default Header;
