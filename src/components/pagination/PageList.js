import PageItem from "./PageItem";

function PageList() {
  return (
    <ul className="pagination pagintion-sm m-0">
      <PageItem disabled={true}>
        <i className="fa-solid fa-angle-left small"></i>
      </PageItem>
      <PageItem active={true}>1</PageItem>
      <PageItem>2</PageItem>
      <PageItem>3</PageItem>
      <PageItem>4</PageItem>
      <PageItem>
        <i className="fa-solid fa-angle-right small"></i>
      </PageItem>
    </ul>
  );
}

export default PageList;
