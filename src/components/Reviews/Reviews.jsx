import React from "react";
import { Review } from '@/components/Review/Review.jsx'

export const Reviews = ({ reviews }) => {
  if (!reviews?.length) return null;

  return (
    <div>
      <h3>Рецензии</h3>
      <ul>
        {reviews.map(review=> (<li key={review.id}><Review review={review} /></li>))}
      </ul>

    </div>
  );
};
