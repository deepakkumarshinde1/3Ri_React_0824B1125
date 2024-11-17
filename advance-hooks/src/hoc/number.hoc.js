import { useMemo } from "react";

export function appendNumber(Component) {
  return (props) => {
    let randomNumber = useMemo(() => {
      let random = Math.random();
      return props.count1 + random;
    }, [props.count1]);
    return (
      <>
        <Component {...props} randomNumber={randomNumber} />
      </>
    );
  };
}
