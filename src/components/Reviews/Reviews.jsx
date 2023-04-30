import React from "react";
import {ReviewContainer} from '@/containers/Review/Review.jsx'

export const Reviews = ({ reviewsIds }) => {
  if (!reviewsIds?.length) {
    return null;
  }

  return (
    <div>
      <h3>Reviews</h3>
      <ul>
        {reviewsIds.map((reviewId,index) => (
          <li key={reviewId}>
            <ReviewContainer reviewId={reviewId} />
          </li>
        ))}
      </ul>
    </div>
  );
};
