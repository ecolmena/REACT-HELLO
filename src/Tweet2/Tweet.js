import React from "react";
import "./index.css";
import "font-awesome/css/font-awesome.min.css";

import Avatar from "./Avatar";
import Author from "./Author";
import Time from "./Time";
import Message from "./Message";
import ReplyButton from "./ReplyButton";
import LikeButton from "./LikeButton";
import RetweetButton from "./RetweetButton";
import MoreOptionsButton from "./MoreOptionsButton";

export const Tweet = ({ tweet }) => {
  return (
    <div className="tweet">
      <Avatar hash={tweet.gravatar} />
      <div className="content">
        <Author author={tweet.author} />
        <Time time={tweet.timestamp} />
        <Message message={tweet.message} />
        <div className="buttons">
          <ReplyButton />
          <RetweetButton retweets={tweet.retweets}/>
          <LikeButton likes={tweet.likes}/>
          <MoreOptionsButton />
        </div>
      </div>
    </div>
  );
};
