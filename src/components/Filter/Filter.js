import FilterSearch from "./FilterSearch";
import FilterStatus from "./FilterStatus";

function Filter(props) {
  return (
    <div className="mt-3 d-flex gap-3">
      <FilterSearch />
      <FilterStatus className="ml-2" />
    </div>
  );
}
export default Filter;
