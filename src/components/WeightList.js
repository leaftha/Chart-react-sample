import WeightDate from "./WeightDate";

const WeightList = ({ weigth, fat, muscle, bodyfatPer, date }) => {
  return (
    <li>
      <p>Weight : {weigth}kg</p>
      <p>Body Fat : {fat}</p>
      <p>Muscle Mass : {muscle}</p>
      <p>Body Fat Percentage : {bodyfatPer}%</p>
      <p>
        Date: <WeightDate date={date} />
      </p>
    </li>
  );
};
export default WeightList;
