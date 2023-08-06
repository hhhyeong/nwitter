import React from "react";

export default function Avatar({ isNew, image }) {
  return (
    <div className="avatar">
      <img className="photo" src={image} alt="avatar"></img>
      {isNew && <span className="new">New</span>}
    </div>
  );
}
