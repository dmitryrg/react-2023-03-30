import { Review } from "@/components/Review/Review";
import React from "react";

export const Reviews = ({ reviews }) => {
  if (!reviews?.length) {
    return null;
  }

  return (
    <div>
      <h3>Reviews</h3>
      <ul>
        {reviews.map((review) => (
          <li key={review?.id}>
            <Review review={review} />
          </li>
        ))}
      </ul>
    </div>
  );
};
