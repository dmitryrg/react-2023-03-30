import React from "react";
import { Reviews } from "@/components/Reviews/Reviews";
import { Menu } from "@/components/Menu/Menu";
import { Dish } from '@/components/Dish/Dish.jsx'
import {Review} from '@/components/Review/Review.jsx'

export const Restaurant = ({ restaurant }) => {
  if (!restaurant) return null;

  const { name,menu,reviews } = restaurant;

  return (
    <div>
      <div>{name}</div>
      <div>
        <div>-меню-</div>
        <Menu menu={menu}/>
      </div>
      <div>
        <div>-блюда-</div>
        <div>
          {menu.map(dish=> (<Dish key={dish.id} dish={dish}/>))}
        </div>
      </div>
      <div>
        <div>-список отзывов-</div>
        <Reviews reviews={reviews}/>
      </div>
      <div>
        <div>-отзывы подробно-</div>
        <div>
          {reviews.map(review=> (<Review key={review.id} review={review}/>))}
        </div>
      </div>
      <div>#######</div>
    </div>
  );
};
