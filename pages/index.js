import CarsPage from "../components/templates/CarsPage"
import carsData from "../data/carsData"
import Categories from "../components/module/Categories"
import Searchbar from "../components/module/SearchBar"
import AllButton from "../components/module/AllButton";

function Index() {
  const cars = carsData.slice(0, 3);
  return (
    <div>
      <Searchbar />
      <Categories />
      <AllButton />
      <CarsPage data={cars} />
    </div>
  );
}

export default Index;
