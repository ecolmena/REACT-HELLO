import React from "react";

export default function Procedure({ procedure }) {
  return (
    <div>
      {procedure.map((step, i) => (
        <p key={i}>{step}</p>
      ))}
    </div>
  );
}
