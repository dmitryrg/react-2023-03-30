import React from "react";

export const Review = ({ review }) => {
  if (!review) {
    return null;
  }

  const { user, text, rating } = review;

  return (
    <div>
      <p>{user}</p>
      <p>{rating}</p>
      <p>{text}</p>
    </div>
  );
};
