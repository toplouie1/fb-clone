import React from "react";
import "./Feed.css";
import MessageSender from "./MessageSender";
import Post from "./Post";
import StoryReel from "./StoryReel";

function Feed() {
	return (
		<div className="feed">
			<StoryReel />
			<MessageSender />
			<Post
				profilePic="//static0.cbrimages.com/wordpress/wp-content/uploads/2020/08/asta.jpg"
				message="wow Amazing"
				timestamp="This is a timestamp"
				username="let go"
				image="//static0.cbrimages.com/wordpress/wp-content/uploads/2020/08/asta.jpg"
			/>
			<Post
				profilePic="//static0.cbrimages.com/wordpress/wp-content/uploads/2020/08/asta.jpg"
				message="wow Amazing"
				timestamp="This is a timestamp"
				username="let go"
				image="//static0.cbrimages.com/wordpress/wp-content/uploads/2020/08/asta.jpg"
			/>{" "}
			<Post
				profilePic="//static0.cbrimages.com/wordpress/wp-content/uploads/2020/08/asta.jpg"
				message="wow Amazing"
				timestamp="This is a timestamp"
				username="let go"
				image="//static0.cbrimages.com/wordpress/wp-content/uploads/2020/08/asta.jpg"
			/>
		</div>
	);
}

export default Feed;
