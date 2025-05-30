import CarList from "../../components/templates/CarList";
import carsData from "../../data/carsData"

function Sedan() {
    const sedanCars = carsData.filter((car) => car.category === "sedan");
    console.log(sedanCars);
  return (
    <div>
        <CarList data={sedanCars}/>
    </div>
  )
}

export default Sedan