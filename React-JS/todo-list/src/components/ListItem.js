function ListItem() {
  return (
    <>
      <li className="mt-4 d-flex align-items-center  border-3 border-bottom border-success pb-1">
        <input type="checkbox" className="form-check-input" />
        <span className="mx-3">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio,
          molestiae?
        </span>
        <button className="btn btn-danger btn-sm">
          <span className="fa fa-trash"></span>
        </button>
      </li>
    </>
  );
}

export default ListItem;
