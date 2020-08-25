import React, { useState } from "react";
import Star from "./Star";
import "bootstrap/dist/css/bootstrap.css";

const createArray = (length) => [...Array(length)];

export default function StarRating({ totalStars }) {
  const [selectedStars, setSelectedStars] = useState(0);
  return (
    <div className="mx-auto" style={{width: "200px"}}>
      {createArray(totalStars).map((n, i) => (
        <Star
          key={i}
          selected={selectedStars > i}
          onSelect={() => setSelectedStars(i + 1)}
        />
      ))}
      <p>
        {selectedStars} of {totalStars} stars
      </p>
    </div>
  );
}
