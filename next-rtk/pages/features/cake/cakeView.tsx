import { useSelector, useDispatch } from "react-redux";
import { ordered,restocked } from "./cakeslice";

const CakeView = () => {
  const numOfCakes = useSelector((state) =>state.cake.numbOfCakes);
  const dispatch = useDispatch()
  return (
    <>
      <div>
        <h1>Number of Cakes : {numOfCakes}</h1>
        <button onClick={()=>dispatch(ordered())}>Order Cake</button>
        <button onClick={()=>dispatch(restocked(5))}>Add Cake</button>
      </div>
    </>
  );
};

export default CakeView;
