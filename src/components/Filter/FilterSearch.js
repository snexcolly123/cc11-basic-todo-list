import Button from "../UI/Button";

function FilterSearch(){
    return <div className="input-group shadow">
        <input
          type="text"
          className="form-control"
          placeholder="Search"
        />
        <Button color="dark">
          <i className="fa-solid fa-xmark"></i>
        </Button>
    </div>
};

export default FilterSearch;