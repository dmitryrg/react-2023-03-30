import {useRouter} from 'next/router'
import {RestaurantReviewsContainer} from '@/containers/RestaurantReviews/RestaurantReviews.jsx'

export default function RestaurantReviewsPage() {
  const router = useRouter();
  return <RestaurantReviewsContainer  restaurantId={router.query.restaurantId} />;
}
