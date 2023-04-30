import { Rating } from "@/components/Rating/Rating";
import React from "react";
import {UserContainer} from '@/containers/User/User.jsx'

export const Review = ({ review }) => {
  if (!review) {
    return null;
  }

  const { userId, text, rating } = review;

  return (
    <div>
      <UserContainer userId = {userId} />
      <Rating value={rating} />
      <p>{text}</p>
    </div>
  );
};
