import { Rating } from "@/components/Rating/Rating";
import { UserContainer } from "@/containers/User/User";
import React from "react";

export const Review = ({ review, className }) => {
  if (!review) {
    return null;
  }

  const { userId, text, rating } = review;

  return (
    <div className={className}>
      <UserContainer userId={userId} />
      <Rating value={rating} />
      <p>{text}</p>
    </div>
  );
};
