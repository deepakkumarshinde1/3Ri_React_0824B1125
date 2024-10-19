import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useEffect } from "react";
import { getData, saveUserList } from "../redux/user.reducer";
const UserList = () => {
  const dispatch = useDispatch();
  let { list } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(getData());
  }, []);
  return (
    <>
      <ul>
        {list.map((value, index) => {
          return <li key={index}>{value.id}</li>;
        })}
      </ul>
    </>
  );
};
export default UserList;
