const WeightDate = ({ date }) => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const context = `${year}/${month}`;
  return context;
};

export default WeightDate;
