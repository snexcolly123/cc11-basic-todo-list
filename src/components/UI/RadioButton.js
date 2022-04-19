function RadioButton(props) {
  return (
    <div className="btn-group">
      <input type="radio" class="btn-check" name={props.name} id={props.id} />
      <label
        className={`btn btn-${props.color || "outline-primary"} shadow-none`}
        htmlFor={props.id}
      >
        {props.children}
      </label>
    </div>
  );
}

export default RadioButton;
