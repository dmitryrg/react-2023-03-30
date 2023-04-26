import { useCallback, useEffect, useState } from "react";

export const useActiveIndex = ({ initialActiveIndex = 0, storageName }) => {
  const [activeIndex, setActiveIndex] = useState(initialActiveIndex);

  const setActiveIndexWithCache = useCallback(
    (index) => {
      setActiveIndex(index);

      if (storageName) {
        localStorage.setItem(storageName, index);
      }
    },
    [storageName]
  );

  useEffect(() => {
    if (storageName) {
      const savedActiveIndex = Number(localStorage.getItem(storageName));

      if (savedActiveIndex) {
        setActiveIndex(savedActiveIndex);
      }
    }
  }, []);

  return {
    activeIndex,
    setActiveIndex: setActiveIndexWithCache,
  };
};
