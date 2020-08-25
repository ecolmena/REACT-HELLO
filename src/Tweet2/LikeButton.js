import React from "react";
import PropTypes from "prop-types";

export default function LikeButton({ likes }) {

  LikeButton.propTypes = {
    likes: PropTypes.number,
  };

  return (
    <span className="like-button">
      <i className="fa fa-heart" />
      {likes > 0 && <span className="like-count">{likes}</span>}
    </span>
  );
}
