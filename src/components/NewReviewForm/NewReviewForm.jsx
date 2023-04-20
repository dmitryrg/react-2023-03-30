import { Rating } from "@/components/Rating/Rating";
import React, { useReducer } from "react";

const initialState = {
  author: "",
  name: "",
  text: "as",
  rating: 5,
};

const reducer = (state, action) => {
  console.log('state ->', state); // debug
  switch (action?.type) {
    case "setAuthor":
      return { ...initialState, author: action.payload };
    case "setName":
      return { ...initialState, name: action.payload };
    case "setText":
      return { ...state, text: action.payload };
    case "setRating":
      return action.payload > 5
        ? state
        : { ...state, rating: Number(action.payload) || 5 };

    default:
      return state;
  }
};

export const NewReviewForm = () => {
  const [formValue, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <div>
        <label>Author</label>
        <input
          value={formValue.author}
          onChange={(event) =>
            dispatch({ type: "setAuthor", payload: event.target.value })
          }
        />
      </div>
      <div>
        <label>Name</label>
        <input
          value={formValue.name}
          onChange={(event) =>
            dispatch({ type: "setName", payload: event.target.value })
          }
        />
      </div>
      <div>
        <label>Text</label>
        <input
          value={formValue.text}
          onChange={(event) =>
            dispatch({ type: "setText", payload: event.target.value })
          }
        />
      </div>
      <div>
        <label>Rating</label>
        <input
          value={formValue.rating}
          type="number"
          onChange={(event) =>
            dispatch({ type: "setRating", payload: event.target.value })
          }
        />
        <Rating
          canChangeRating={true}
          value={formValue.rating}
          onChange={(rating) =>
            dispatch({ type: "setRating", payload: rating })
          }
        />
      </div>
    </div>
  );
};
