/* eslint-disable react/no-children-prop */
import React from "react";

export default function HomePage() {
  return React.createElement("div", {
    children: [
      React.createElement("button", {
        children: "Click Me!",
        onClick: () => console.log("Click!"),
      }),
      React.createElement("button", {
        children: "Hello Students!",
        onClick: () => console.log("Hello!"),
      }),
    ],
  });
}
