import { RestaurantContainer } from "@/containers/Restaurant/Restaurant";
import { useRouter } from "next/router";

export default function CurrentRestaurantPage() {
  const router = useRouter();

  return <RestaurantContainer restaurantId={router.query.restaurantId} />;
}
