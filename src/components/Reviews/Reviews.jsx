import React from "react";

export const Reviews = ({ reviews }) => {
  if (!(reviews && Array.isArray(reviews) && reviews.length>0)) return null;

  return (
    <div>
      {reviews.map(review=> (<div key={review.id}>{review.user}</div>))}
    </div>
  );
};
