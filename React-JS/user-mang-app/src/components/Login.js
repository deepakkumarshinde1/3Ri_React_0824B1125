import { Link, useNavigate } from "react-router-dom";
import { useAdminContext } from "../context/admin.context";
import { useState } from "react";

function Login() {
  let navigate = useNavigate();
  let { userLogin, setUserLogin } = useAdminContext();
  let [toggle, setToggle] = useState(false);
  return (
    <>
      <section className="row" style={{ height: "100vh" }}>
        <section
          className="col-12 bg-back d-flex justify-content-center align-items-center 
        "
        >
          <section className="card rounded-0">
            <h3 className="h4 mb-3 text-center text-white">
              <i className="fa fa-users" aria-hidden="true"></i> User Login{" "}
              <i className="fa fa-users" aria-hidden="true"></i>
            </h3>
            <form action="">
              <div className="input-group mb-3">
                <span className="input-group-text bg-warning rounded-0">
                  <i className="fa fa-user-secret fa-2x" aria-hidden="true"></i>
                </span>
                <input
                  type="text"
                  className="form-control rounded-0"
                  placeholder="Enter User Name"
                  value={userLogin.email}
                  onChange={({ target }) => {
                    setUserLogin({ ...userLogin, email: target.value });
                  }}
                />
              </div>
              <div className="input-group mb-2">
                <span className="input-group-text px-3 bg-info rounded-0">
                  <i
                    className="fa fa-unlock-alt fa-2x text-white"
                    aria-hidden="true"
                  ></i>
                </span>
                <input
                  type={toggle ? "text" : "password"}
                  className="form-control rounded-0"
                  placeholder="Enter Password"
                  value={userLogin.password}
                  onChange={({ target }) => {
                    setUserLogin({ ...userLogin, password: target.value });
                  }}
                />
              </div>
              <div className="mb-3 form-check">
                <input
                  type="checkbox"
                  checked={toggle}
                  value="-"
                  id="checkbox"
                  onChange={() => {
                    setToggle(!toggle);
                  }}
                  className="form-check-input"
                />
                <label
                  htmlFor="checkbox"
                  className="form-check-label text-white"
                >
                  Show Password
                </label>
              </div>
              <div className=" text-center">
                <button
                  className="btn btn-success px-5 me-2 rounded-0"
                  type="button"
                  onClick={() => navigate("/")}
                >
                  <i className="fa fa-save me-2"></i>
                  Save
                </button>
                <button
                  className="btn btn-outline-danger rounded-0"
                  type="reset"
                >
                  <i className="fa fa-history me-2"></i>
                  Reset
                </button>
              </div>
              <div>
                <p className="m-0 text-white text-center h5 mt-2">
                  Don't have account ?{" "}
                  <Link to="/new-registration" className="text-white-50">
                    Create New
                  </Link>
                </p>
              </div>
            </form>
          </section>
        </section>
      </section>
    </>
  );
}

export default Login;
