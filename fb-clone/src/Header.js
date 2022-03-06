import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import FlagIcon from "@mui/icons-material/Flag";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import SupervisedUserCircleOutlinedIcon from "@mui/icons-material/SupervisedUserCircleOutlined";
import { Avatar } from "@material-ui/core";

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
					<input type="text" placeholder="Search Faceook" />
				</div>
			</div>
			<div className="header__center">
				<div className="header__option header__option--active">
					<HomeIcon fontSize="large" />
				</div>
				<div className="header__option">
					<FlagIcon fontSize="large" />
				</div>
				<div className="header__option">
					<SubscriptionsOutlinedIcon fontSize="large" />
				</div>
				<div className="header__option">
					<StorefrontOutlinedIcon fontSize="large" />
				</div>
				<div className="header__option">
					<SupervisedUserCircleOutlinedIcon fontSize="large" />
				</div>
			</div>
			<div className="header__right">
				<div className="header__info">
					<Avatar />
					<h4>Nima</h4>
				</div>
			</div>
		</div>
	);
}

export default Header;
