import React from "react";
import { useSelector } from "react-redux";
import {Review} from '@/components/Review/Review.jsx'
import {selectReviewById} from '@/store/entities/review/selectors.js'

export const ReviewContainer = ({ reviewId }) => {
  const review = useSelector((state) => selectReviewById(state, { reviewId }));

  return (
    <Review
      review={review}
    />
  );
};
