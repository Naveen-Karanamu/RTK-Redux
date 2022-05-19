import { useSelector, useDispatch } from "react-redux";
import { ordered,restocked } from "./icecreamSlice";

const IcecreamView = () => {
  const numbOfIcecreams=useSelector((state)=>state.icecream.numOfIcecreams)
  const dispatch=useDispatch()
    return (
      <>
        <div>
          <h1>Number of Icecreamss : {numbOfIcecreams}</h1>
          <button onClick={()=>dispatch(ordered())}>Order Icecreams</button>
          <button onClick={()=>dispatch(restocked(10))}>Add Icecreams</button>
        </div>
      </>
    );
  };
  
  export default IcecreamView