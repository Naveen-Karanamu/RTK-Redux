import { useSelector } from "react-redux";


const IcecreamView = () => {
  const numbOfIcecreams=useSelector((state)=>state.icecream.numOfIcecreams)
    return (
      <>
        <div>
          <h1>Number of Icecreamss : {numbOfIcecreams}</h1>
          <button>Order Icecreams</button>
          <button>Add Icecreams</button>
        </div>
      </>
    );
  };
  
  export default IcecreamView