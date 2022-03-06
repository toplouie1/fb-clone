import StorefrontOutlined from "@mui/icons-material/StorefrontOutlined";
import React from "react";
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";

import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import EmojiFlagsIcon from "@material-ui/icons/EmojiFlags";

import PeopleIcon from "@material-ui/icons/People";
import ChatIcon from "@material-ui/icons/Chat";
import StorefrontIcon from "@material-ui/icons/EmojiFlags";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";

function Sidebar() {
	return (
		<div className="sidebar">
			<SidebarRow
				src="//static0.cbrimages.com/wordpress/wp-content/uploads/2020/08/asta.jpg"
				title="Nima"
			/>
			<SidebarRow
				Icon={LocalHospitalIcon}
				title="COVID-19 Information Center"
			/>
			<SidebarRow Icon={EmojiFlagsIcon} title="Pages" />
			<SidebarRow Icon={PeopleIcon} tite="Friends" />
			<SidebarRow Icon={ChatIcon} title="Messenger" />
			<SidebarRow Icon={StorefrontIcon} title="Marketplace" />
			<SidebarRow Icon={VideoLibraryIcon} title="Videos" />
		</div>
	);
}

export default Sidebar;
