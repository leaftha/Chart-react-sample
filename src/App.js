import Weight from "./components/Weight";
import { useState } from "react";
import Data from "./Chart/CharData.json";

const DUMMY = [
  {
    id: "e1",
    weight: 79,
    bodyfat: 30,
    muscle: 20,
    bodyfatPer: 30,
    date: new Date(2023, 3, 10),
  },
  {
    id: "e2",
    weight: 77,
    bodyfat: 26,
    muscle: 21,
    bodyfatPer: 28,
    date: new Date(2023, 2, 10),
  },
  {
    id: "e3",
    weight: 70,
    bodyfat: 21,
    muscle: 29,
    bodyfatPer: 18,
    date: new Date(2023, 1, 10),
  },
  {
    id: "e4",
    weight: 72,
    bodyfat: 22,
    muscle: 30,
    bodyfatPer: 20,
    date: new Date(2023, 0, 10),
  },
];

function App() {
  const [Listdata, setWeightData] = useState(DUMMY);
  const TakeData = (data) => {
    setWeightData((prev) => {
      return [data, ...prev];
    });
  };
  const WeightData = Listdata.map((item) => ({
    x: item.date.getMonth() + 1,
    y: item.weight,
  }));
  const BodyData = Listdata.map((item) => ({
    x: item.date.getMonth() + 1,
    y: item.bodyfat,
  }));
  const muscleData = Listdata.map((item) => ({
    x: item.date.getMonth() + 1,
    y: item.muscle,
  }));
  const bodyfatPerData = Listdata.map((item) => ({
    x: item.date.getMonth() + 1,
    y: item.bodyfatPer,
  }));
  Data[0].data = WeightData;
  Data[1].data = BodyData;
  Data[2].data = muscleData;
  Data[3].data = bodyfatPerData;
  console.log(Data, Listdata);

  return (
    <div>
      <Weight RanderApp={TakeData} Data={Data} weightlist={Listdata} />
    </div>
  );
}

export default App;
