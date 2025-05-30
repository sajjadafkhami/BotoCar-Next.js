import CarsPage from "../../components/templates/CarsPage"
import carsData from "../../data/carsData"
import Categories from "../../components/module/Categories"
import Searchbar from "../../components/module/SearchBar"


function Details() {
  return (
    <div>
        <Searchbar />
        <Categories />
        <CarsPage data={carsData} />
    </div>
  )
}

export default Details