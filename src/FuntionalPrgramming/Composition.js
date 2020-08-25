import React from "react";

/*
Composition : Functional programs break up their logic 
into small, pure functions that are focused on specific 
tasks. Eventually, you’ll need to put these smaller 
functions together. Specifically, you may need to combine
them, call them in series or parallel, or compose them 
into larger functions until you eventually have an 
application.
When it comes to composition, there are a number of different
implementations, patterns, and techniques. One that you may 
be familiar with is chaining. In JavaScript, functions can 
be chained together using dot notation to act on the return
 value of the previous function.
Strings have a replace method. The replace method returns 
a template string, which will also have a replace method. 
Therefore, we can chain together replace methods with dot 
notation to transform a string:
*/

export default function App() {
  const template = "hh:mm:ss tt";
  // const clockTime = template
  //   .replace("hh", "03")
  //   .replace("ss", "33")
  //   .replace("mm", "33")
  //   .replace("tt", "PM");

  console.log(template);

  const date = new Date();
  console.log(date);

  const civilianHours = (date) =>
    template
      .replace("hh", date.getHours())
      .replace("mm", date.getMinutes())
      .replace("ss", date.getSeconds());

  console.log(civilianHours(date));

  const appendAMPM = (dateString) =>
    dateString.substr(0, 2) < 12
      ? dateString.replace("tt", "AM")
      : dateString.replace("tt", "PM");

  console.log(appendAMPM(civilianHours(date)));

  console.log(appendAMPM(civilianHours(new Date())));

  const compose = (...fns) => (arg) =>
    fns.reduce((composed, f) => f(composed), arg);

  const both = compose(civilianHours, appendAMPM);

  console.log(both(new Date()));

  return <div>Hello World!!</div>;
}
