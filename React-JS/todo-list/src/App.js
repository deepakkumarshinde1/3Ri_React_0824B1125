// import (optional)
// import React from "react";

// logic class
// class App1 extends React.Component {
//   constructor() {
//     super();
//   }

//   render() {
//     return <>Hello</>;
//   }
// }

function App() {
  let text = "Its Awesome";
  let number = 21;
  return (
    <>
      <main className="container-fluid">
        <section className="row">
          <section className="col-4 m-auto p-3 mt-5">
            <section className="input-group">
              <input
                type="text"
                className="form-control rounded-0"
                placeholder="Enter Todo"
              />
              <button className="input-group-text btn btn-success rounded-0">
                <em className="fa fa-floppy-o"></em> Save
              </button>
            </section>
          </section>
        </section>

        <section className="row">
          <section className="col-6 m-auto">
            <ul>
              <li className="d-flex align-items-center  border-3 border-bottom border-success pb-1">
                <input type="checkbox" className="form-check-input" />
                <span className="mx-3">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Distinctio, molestiae?
                </span>
                <button className="btn btn-danger btn-sm">
                  <span className="fa fa-trash"></span>
                </button>
              </li>

              <li className="d-flex align-items-center  border-3 border-bottom border-danger pb-1 mt-3">
                <input
                  type="checkbox"
                  className="form-check-input"
                  checked
                  disabled
                />
                <span className="mx-3">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Distinctio, molestiae?
                </span>
              </li>
            </ul>
          </section>
        </section>
      </main>
    </>
  );
}

// export
export default App;
