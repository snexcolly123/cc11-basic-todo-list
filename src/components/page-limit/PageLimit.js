function PageLimit() {
  return (
    <div className="mt-3 d-flex align-items-center">
      <small className="text-muted">Show : </small>
      <select
        className="form-select form-select-sm ms-2"
        style={{ width: "5rem" }}
      >
        <option>10</option>
        <option>25</option>
        <option>50</option>
      </select>
    </div>
  );
}

export default PageLimit;
