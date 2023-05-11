export default function AddressesPage({ restaurants }) {
  return <div>{restaurants[0].name}</div>;
}

export async function getStaticProps() {
  const response = await fetch("http://localhost:3001/api/restaurants/");

  const restaurants = await response.json();

  return {
    props: {
      restaurants,
    },
  };
}
