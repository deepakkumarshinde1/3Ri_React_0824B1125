import ListItem from "./ListItem";

function List() {
  return (
    <>
      <section className="row">
        <section className="col-lg-6  m-auto">
          <ul>
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
          </ul>
        </section>
      </section>
    </>
  );
}

export default List;
