import { RestaurantContainer } from "@/containers/Restaurant/Restaurant";
import { RestaurantMenuContainer } from "@/containers/RestaurantMenu/RestaurantMenu";
import { useRouter } from "next/router";

export default function CurrentRestaurantsPage() {
  const { query } = useRouter();

  return <RestaurantMenuContainer restaurantId={query.restaurantId} />;
}
