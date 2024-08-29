import { useState } from "react";

function Input() {
  let [count, setCount] = useState(0); // number , string , boolean, [], {}
  let getValue = () => {
    setCount(count + 1);
  };
  return (
    <>
      <section className="row">
        <section className="col-lg-4 col-8 m-auto p-3 mt-5">
          <section className="input-group">
            <input
              type="text"
              className="form-control rounded-0"
              placeholder="Enter Todo"
              value={count}
            />
            <button
              onClick={getValue}
              className="input-group-text btn btn-success rounded-0"
            >
              <em className="fa fa-floppy-o"></em> Save
            </button>
            <span className="ms-3">{count}</span>
          </section>
        </section>
      </section>
    </>
  );
}

export default Input;
