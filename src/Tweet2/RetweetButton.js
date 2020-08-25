import React from "react";

export default function RetweetButton({ retweets }) {
  return (
    <span className="retweet-button">
      <i className="fa fa-retweet" />
      <span className="retweet-count">{retweets > 0 ? retweets : null}</span>
    </span>
  );
}
