import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";

// const dish = React.createElement("h1", null, "Baked Salmon");
// const dessert = React.createElement("h2", null, "Coconout Cream Pie");
// ReactDOM.render([dish, dessert], document.querySelector("#root"));

// const dish = React.createElement(
//     "ul",
//     null,
//     React.createElement("li", null, "2 lb salmon"),
//     React.createElement("li", null, "5 sprigs fresh rosemary"),
//     React.createElement("li", null, "2 tablespoons olive oil"),
//     React.createElement("li", null, "2 small lemons"),
//     React.createElement("li", null, "1 teaspoon kosher salt"),
//     React.createElement("li", null, "4 cloves of chopped garlic")
//     );

//     console.log(dish);

// const dish = React.createElement("section", { id: "baked-salmon" },
//                     React.createElement("h1", null, "Baked Salmon"),
//                     React.createElement("ul", { className: "ingredients" },
//                         React.createElement("li", null, "2 lb salmon"),
//                         React.createElement("li", null, "5 sprigs fresh rosemary"),
//                         React.createElement("li", null, "2 tablespoons olive oil"),
//                         React.createElement("li", null, "2 small lemons"),
//                         React.createElement("li", null, "1 teaspoon kosher salt"),
//                         React.createElement("li", null, "4 cloves of chopped garlic")
//                     ),
//                     React.createElement("section", { className: "instructions" },
//                         React.createElement("h2", null, "Cooking Instructions"),
//                         React.createElement("p", null, "Preheat the oven to 375 degrees."),
//                         React.createElement("p", null, "Lightly coat aluminum foil with oil."),
//                         React.createElement("p", null, "Place salmon on foil."),
//                         React.createElement("p", null, "Cover with rosemary, sliced lemons, chopped garlic."),
//                         React.createElement("p", null, "Bake for 15-20 minutes until cooked through."),
//                         React.createElement("p", null, "Remove from oven.")
//                     )
//         );

const items = [
  "2 lb salmon",
  "5 sprigs fresh rosemary",
  "2 tablespoons olive oil",
  "2 small lemons",
  "1 teaspoon kosher salt",
  "4 cloves of chopped garlic",
];

const dish = React.createElement(
  "ul",
  { className: "ingredients" },
  items.map((ingredient, i) => React.createElement("li", { key: i }, ingredient))
);
ReactDOM.render(dish, document.querySelector("#root"));
