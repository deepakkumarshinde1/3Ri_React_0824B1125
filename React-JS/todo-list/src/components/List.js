import { useState } from "react";
import ListItem from "./ListItem";
import { useCountContext } from "../context/counter.context";

function List() {
  let { todoList } = useCountContext();
  return (
    <>
      <section className="row">
        <section className="col-lg-6  m-auto">
          <ul>
            {todoList.map(function (value, index) {
              return <ListItem key={index} todo={value} index={index} />;
            })}
          </ul>
        </section>
      </section>
    </>
  );
}

export default List;
