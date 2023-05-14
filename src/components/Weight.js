import WeightList from "./WeightList";
import Chart from "../Chart/Chart";
import WeightForm from "./WeightForm";
import "./Weight.css";

const Weight = ({ weightlist, Data, RanderApp }) => {
  const onSubmitDateHandler = (Formdata) => {
    RanderApp(Formdata);
  };

  return (
    <div>
      <h1>This is Weight</h1>
      <h2>Check your Weight</h2>
      <div className="Weight-context">
        <ul>
          {weightlist.map((item) => (
            <WeightList
              key={item.id}
              weigth={item.weight}
              fat={item.bodyfat}
              muscle={item.muscle}
              bodyfatPer={item.bodyfatPer}
              date={item.date}
            />
          ))}
        </ul>
        <div className="Weight-Form">
          <WeightForm onSubmitDate={onSubmitDateHandler} />
        </div>
      </div>
      <div>
        <Chart data={Data} />
      </div>
    </div>
  );
};

export default Weight;
