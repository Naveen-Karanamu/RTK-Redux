import { useSelector } from "react-redux";

const CakeView = () => {
  const numOfCakes = useSelector((state) =>state.cake.numbOfCakes);
  return (
    <>
      <div>
        <h1>Number of Cakes : {numOfCakes}</h1>
        <button>Order Cake</button>
        <button>Add Cake</button>
      </div>
    </>
  );
};

export default CakeView;
