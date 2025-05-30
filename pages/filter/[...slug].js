import { useRouter } from "next/router"
import carsData from "../../data/carsData"
import CarList from "../../components/templates/CarList"

function FilteredCars() {
    const router = useRouter();
    const [min, max] = router.query.slug || [];
    console.log(min, max)

    const filteredData = carsData.filter((item) => item.price > min && item.price < max);
    console.log(filteredData);
    if(!filteredData.length) return <h3>NotFound</h3>
  return (
    <CarList data={filteredData} />
  )
}

export default FilteredCars

