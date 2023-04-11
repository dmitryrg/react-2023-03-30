import React from "react";

export const Review = ({ review }) => {
  if (!review ) return null;

  const { user, text, rating } = review

  return (
    <div>
      <h5>{user}</h5>
      <p>{text}</p>
      <p>{rating}</p>
    </div>
  );
};
