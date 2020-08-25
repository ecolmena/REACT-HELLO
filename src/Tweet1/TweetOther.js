import React from "react";

export const Tweet = () => {
  function Avatar() {
    return (
      <img
        src="https://www.gravatar.com/avatar/nothing"
        className="avatar"
        alt="avatar"
      />
    );
  }
  function Message() {
    return <div className="message">This is less than 140 characters.</div>;
  }
  function Author() {
    return (
      <span className="author">
        <span className="name">Your Name</span>
        <span className="handle">@yourhandle</span>
      </span>
    );
  }
  const Time = () => <span className="time">3h ago</span>;
  const ReplyButton = () => <i className="fa fa-reply reply-button" />;
  const RetweetButton = () => <i className="fa fa-retweet retweet-button" />;
  const LikeButton = () => <i className="fa fa-heart like-button" />;
  const MoreOptionsButton = () => (
    <i className="fa fa-ellipsis-h more-options-button" />
  );

  return (
    <div className="tweet">
      <Avatar />
      <div className="content">
        <Author />
        <Time />
        <Message />
        <div className="buttons">
          <ReplyButton />
          <RetweetButton />
          <LikeButton />
          <MoreOptionsButton />
        </div>
      </div>
    </div>
  );
};
