import styles from "./styles.module.scss";
import Image from "next/image";
import classNames from 'classnames'
// import {useState} from 'react'

const MAX_RATING = 5;



export const Rating = ({ value, maxRating = MAX_RATING, canChangeRating= false, className, onChange }) => {
/*  const [value,setValue] = useState(iniValue)
  const changeRating = (index) => {
    if (canChangeRating) {
      setValue(++index)
    }
  }*/
  return (
    <div className={className}>
      {maxRating > 0 &&
        new Array(maxRating)
          .fill(null)
          .map((_, index) => (
            <Image
              src={`/images/star${index >= value ? "" : "-gold"}.png`}
              key={index}
              className={classNames(styles.star,{[styles.clickable]:!!onChange})}
              width={32}
              height={32}
              // onClick={()=>changeRating(index)}
              onClick={()=> onChange?.(++index)}
              alt={index >= value ? "black" : "gold"}
            />
          ))}
    </div>
  );
};
