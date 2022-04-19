import RadioButton from "../UI/RadioButton";

function FilterStatus() {
  return (
    <div className="btn-group" >
      <RadioButton name="status" id="all" color="outline-dark">
        <i className="fa-solid fa-list"></i>
      </RadioButton>
      <RadioButton name="status" id="completed" color="outline-dark">
        <i className="fa-solid fa-clipboard-check"></i>
      </RadioButton>
      <RadioButton name="status" id="pending" color="outline-dark">
        <i className="fa-regular fa-clipboard-check"></i>
      </RadioButton>
    </div>
  );
}

export default FilterStatus;
