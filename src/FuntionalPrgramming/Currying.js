import React from "react";

export default function App() {
  const userLogs = (userName) => (message) =>
    console.log(`${userName} -> ${message}`);

  const log = userLogs("GrandPa23");

  log("attempted to load 20 fake members");

  return <div>const</div>;
}
