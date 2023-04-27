import { StoreContext } from "@/CustomStore/StoreContext/StoreContext";
import { useContext, useEffect, useState } from "react";

export const useSelector = (selector) => {
  const store = useContext(StoreContext);
  const [value, setValue] = useState(() => selector(store.getState()));

  useEffect(() => {
    const selectiveRender = (state) => setValue(selector(state));

    store.subscribe(selectiveRender);

    return () => store.unsubscribe(selectiveRender);
  }, []);

  return value;
};
