import {RestaurantMenuContainer} from '@/containers/RestaurantMenu/RestaurantMenu.jsx'
import {useRouter} from 'next/router'

export default function RestaurantMenuPage() {
  const router = useRouter();
  return <RestaurantMenuContainer restaurantId={router.query.restaurantId} />;
}
