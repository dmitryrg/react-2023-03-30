import React from "react";
import {ReviewContainer} from '@/containers/Review/Review.jsx'

export const Reviews = ({ reviewIds }) => {
  if (!reviewIds?.length) {
    return null;
  }

  return (
    <div>
      <h3>Reviews</h3>
      <ul>
        {reviewIds.map((reviewId,index) => (
          <li key={reviewId}>
            <ReviewContainer reviewId={reviewId} />
          </li>
        ))}
      </ul>
    </div>
  );
};
