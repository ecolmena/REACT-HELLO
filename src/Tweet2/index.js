import React from "react";
import ReactDOM from "react-dom";
import { Tweet } from "./Tweet";

const testTweet = {
  message: "Something about cats.",
  gravatar: "xyz",
  author: {
    handle: "catperson",
    name: "IAMA Cat Person",
  },
  likes: "foo",
  retweets: 17,
  timestamp: "2016-07-30 21:24:37",
};

ReactDOM.render(<Tweet tweet={testTweet} />, document.querySelector("#root"));
