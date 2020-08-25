import React from "react";

import "./index.css";
import { Avatar } from "./Tweet/Avatar";
import { Time } from "./Time";
import { Message } from "./Tweet/Message";
import { Author } from "./Tweet/Author";

export const Tweet = () => {
  return (
    <div className="tweet">
      <Avatar />
      <div className="content">
        <div>
          <Author />
          <Time />
        </div>
        <Message />
      </div>
    </div>
  );
};
