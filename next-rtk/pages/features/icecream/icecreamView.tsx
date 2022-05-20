import { useSelector, useDispatch } from "react-redux";
import { setConstantValue } from "typescript";
import { ordered,restocked } from "./icecreamSlice";

const IcecreamView = () => {
  const numbOfIcecreams=useSelector((state)=>state.icecream.numOfIcecreams)
  const dispatch=useDispatch()
    return (
      <>
        <div>
          <h1>Number of Icecreamss : {numbOfIcecreams}</h1>
          <button onClick={()=>dispatch(ordered())}>Order Icecreams</button>
          {/* <input type='number' value={value} onChange={(e)=>setConstantValue(parseInt(e.target.value))}/> */}
          <button onClick={()=>dispatch(restocked(10))}>Add Icecreams</button>
        </div>
      </>
    );
  };
  
  export default IcecreamView