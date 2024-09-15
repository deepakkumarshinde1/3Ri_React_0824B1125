import Header from "./Header";
import UserListItem from "./UserListItem";

function UserList() {
  return (
    <>
      <section className="row">
        <Header />
        <section className="col-8 m-auto mt-3 ">
          <h4 className="text-center">Users List</h4>
          <UserListItem />
          <UserListItem />
          <UserListItem />
          <UserListItem />
          <ul className="pages ">
            <li>
              <button>
                <i className="fa fa-angle-double-left"></i>
              </button>
            </li>
            <li>
              <button>1</button>
            </li>
            <li>
              <button>2</button>
            </li>
            <li>
              <button>3</button>
            </li>
            <li>
              <button>4</button>
            </li>
            <li>
              <button>5</button>
            </li>
            <li>
              <button>
                <i className="fa fa-angle-double-right"></i>
              </button>
            </li>
          </ul>
        </section>
      </section>
    </>
  );
}

export default UserList;
