import React from "react";

export const Review = ({ review }) => {
  if (!review ) return null;

  return (
    <div>
      <div>
        <span>имя: </span>
        <span>{review.user}</span>
      </div>
      <div>
        <span>отзыв: </span>
        <span>{review.text}</span>
      </div>
      <div>
        <span>рэйтинг: </span>
        <span>{review.rating}</span>
      </div>
    </div>
  );
};
