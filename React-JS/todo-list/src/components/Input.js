import { useState } from "react";
import { useCountContext } from "../context/counter.context";

function Input() {
  let { saveNewTask } = useCountContext();

  let [inputValue, setInputValue] = useState("");
  let changeInput = (event) => {
    setInputValue(event.target.value);
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
              value={inputValue}
              onChange={changeInput}
            />
            <button
              onClick={() => {
                saveNewTask(inputValue);
                setInputValue("");
              }}
              className="input-group-text btn btn-success rounded-0"
            >
              <em className="fa fa-floppy-o"></em> Save
            </button>
          </section>
        </section>
      </section>
    </>
  );
}

export default Input;
