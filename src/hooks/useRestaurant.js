import {useCallback, useLayoutEffect, useState} from 'react'
//useLayoutEffect
export const useRestaurant = (initialRestaurant=0) => {
  const [activeRestaurantIndex, setActiveRestaurantIndex] = useState(initialRestaurant);

  const setActiveRestaurantIndexWithCache = useCallback((index) => {
    setActiveRestaurantIndex(index);
    localStorage.setItem("activeRestaurantIndex", index);
  },
    []);

  useLayoutEffect(() => {
    const savedActiveRestaurantIndex = localStorage.getItem(
      "activeRestaurantIndex"
    );

    if (savedActiveRestaurantIndex) {
      setActiveRestaurantIndex(savedActiveRestaurantIndex);
    }
  }, []);

  return { activeRestaurantIndex, setActiveRestaurantIndexWithCache };
};
