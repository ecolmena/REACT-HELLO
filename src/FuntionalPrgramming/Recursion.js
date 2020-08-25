import React from "react";

/*
Recursion is a technique that involves creating functions that recall
themselves.
*/

export default function App() {
  // const countdown = (value, fn) => {
  //   fn(value);
  //   return value > 0 ?
  // countdown(value -1, fn) : value;
  // }

  // countdown(10, value => console.log(value));

  // const countdown = (value, fn, delay = 1000) => {
  //   fn(value);
  //   return value > 0
  //     ? setTimeout(() => countdown(value - 1, fn, delay), delay)
  //     : value;
  // };

  // const log = (value) => console.log(value);
  // countdown(10, log);

  const dan = {
    type: "person",
    data: {
      gender: "male",
      info: {
        id: 22,
        fullname: {
          first: "Dan",
          last: "Deacon",
        },
      },
    },
  };

  const deepPick = (field, object = {}) => {
    const [first, ...remaining] = field.split(".");
    return remaining.length
      ? deepPick(remaining.join("."), object[first])
      : object[first];
  };

  console.log(deepPick("type", dan));

  console.log(deepPick("data.info.fullname.first", dan));

  return <div>Hello World!!</div>;
}
