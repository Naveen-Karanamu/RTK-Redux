import { useSelector, useDispatch } from "react-redux";
import cackActions from "./cakeslice"

const CakeView = () => {
  const numOfCakes = useSelector((state) =>state.cake.numbOfCakes);
  const dispatch = useDispatch()
  return (
    <>
      <div>
        <h1>Number of Cakes : {numOfCakes}</h1>
        <button onClick={()=>dispatch}>Order Cake</button>
        <button>Add Cake</button>
      </div>
    </>
  );
};

export default CakeView;
