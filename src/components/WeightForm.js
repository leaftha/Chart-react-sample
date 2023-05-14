import { useState } from "react";
import uuid from "react-uuid";
import "./WeightForm.css";

const WeightForm = ({ onSubmitDate }) => {
  const [addwight, setAddWight] = useState("");
  const [addbodyfat, setAddBodyFat] = useState("");
  const [addmuscle, setAddMuscle] = useState("");
  const [addbodyfatPer, setAdBodyFatPer] = useState("");

  const onChangeWeight = (e) => {
    setAddWight(e.target.value);
  };
  const onChangeBodyfat = (e) => {
    setAddBodyFat(e.target.value);
  };
  const onChangeMuscle = (e) => {
    setAddMuscle(e.target.value);
  };
  const onChangeBodyfatPer = (e) => {
    setAdBodyFatPer(e.target.value);
  };

  const NowDate = new Date();

  const SubmitHandler = (e) => {
    e.preventDefault();
    const AddWeightData = {
      id: uuid(),
      weight: addwight,
      bodyfat: addbodyfat,
      muscle: addmuscle,
      bodyfatPer: addbodyfatPer,
      date: NowDate,
    };
    onSubmitDate(AddWeightData);
    setAddWight("");
    setAddBodyFat("");
    setAddMuscle("");
    setAdBodyFatPer("");
  };
  return (
    <form className="WeightForm" onSubmit={SubmitHandler}>
      <label>Weight</label>
      <input type="number" value={addwight} onChange={onChangeWeight} min={0} />
      <label>bodyfat</label>
      <input
        type="number"
        value={addbodyfat}
        onChange={onChangeBodyfat}
        min={0}
      />
      <label>muscle</label>
      <input
        type="number"
        value={addmuscle}
        onChange={onChangeMuscle}
        min={0}
      />
      <label>bodyfatPer</label>
      <input
        type="number"
        value={addbodyfatPer}
        onChange={onChangeBodyfatPer}
        min={0}
        max={100}
      />
      <button>Add</button>
    </form>
  );
};

export default WeightForm;
