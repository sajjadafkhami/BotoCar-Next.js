import CarList from "../../components/templates/CarList";
import carsData from "../../data/carsData";

function Sport() {
    const sportCars = carsData.filter((car) => car.category === "sport");
    console.log(sportCars)
  return <div>
    <CarList data={sportCars}/>
  </div>;
}

export default Sport;
