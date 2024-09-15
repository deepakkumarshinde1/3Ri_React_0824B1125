function UserListItem() {
  return (
    <>
      {" "}
      <section className="my-3 shadow-sm border border-1 p-2 d-flex align-items-center justify-content-between">
        <section className="d-flex align-items-center">
          <img
            src="https://www.pngfind.com/pngs/m/610-6104451_image-placeholder-png-user-profile-placeholder-image-png.png"
            alt=""
            className="img-thumbnail"
            style={{ width: "70px" }}
          />
          <p className="d-flex flex-column m-0 ms-2">
            <span className="fw-bold">Deepakkumar Shinde</span>
            <small>
              <a href="mailto:deepakkumar.shinde0@gmail.com">
                deepakkumar.shinde0@gmail.com
              </a>
            </small>
          </p>
        </section>
        <p className="fs-4 fw-bold text-success m-0">
          <i className="fa fa-male me-2"></i>Male
        </p>
        <section className="gap-2 d-flex">
          <button className="btn btn-outline-info btn-sm">
            <i className="fa fa-edit"></i>
          </button>
          <button className="btn btn-outline-danger btn-sm">
            <i className="fa fa-trash"></i>
          </button>
        </section>
      </section>
    </>
  );
}

export default UserListItem;