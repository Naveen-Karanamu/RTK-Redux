import loadConfig from "next/dist/server/config";
import { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { fetchUsers } from "./userSlice";

const UsersView = () => {
  const user=useSelector((state)=>state.user)
  const dispatch=useDispatch()
  useEffect(()=>{
      dispatch(fetchUsers())
  },[])
    return (
      <>
        <div>
          <h1>List of Users</h1>
          {user.loading&&<div>Loading... </div>}
          {!user.loading&&user.error ?<div>user.error </div>:null}
          {!user.loading&& user.user.length ? (
            <ul>
              {
                user.user.map((users)=>(
                  <li key={users.id}>{users.name}</li>
                ))
              }
            </ul>
          ):null}
          {/* {console.log(user.user[0].name)} */}
        </div>
      </>
    );
  };
  
  export default UsersView  