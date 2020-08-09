//Create a react app from scratch.
//It should display a h1 heading.
//It should display an unordered list (bullet points).
//It should contain 3 list elements.

import React from "react";

import reactdom from "react-dom";
const image = "https://picsum.photos/200/300";

reactdom.render(
  <div>
    <h1 className="heading">My favourite Tech company</h1>
    <div>
      <img
        className="img"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Dell_logo_2016.svg/1024px-Dell_logo_2016.svg.png"
        alt="dell"
      />
      <img
        className="img"
        src="https://pbs.twimg.com/profile_images/1283958620359516160/p7zz5dxZ_400x400.jpg"
      />
      <img
        className="img"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Samsung_Logo.svg/640px-Samsung_Logo.svg.png"
      />
      <img src={image} />
    </div>
  </div>,
  document.getElementById("root")
);
