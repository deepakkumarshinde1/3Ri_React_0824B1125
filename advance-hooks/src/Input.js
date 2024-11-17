import { forwardRef, useImperativeHandle, useRef } from "react";

function Input(props, ref) {
  let _ref = useRef(null);
  let { input, setInput } = props;

  // set of function which can be use be parent
  useImperativeHandle(ref, () => {
    return {
      changeColor() {
        let input = _ref.current;
        input.classList.toggle("add-dark");
      },
      getValue() {
        return _ref.current.value;
      },
      setValue(value) {
        _ref.current.value = value;
      },
    };
  });
  return (
    <>
      <input
        ref={_ref}
        type="text"
        value={input}
        onChange={(event) => {
          setInput(event.target.value);
        }}
      />
    </>
  );
}
export default forwardRef(Input);
