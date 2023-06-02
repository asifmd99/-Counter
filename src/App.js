import "./App.css";

function App() {
  // let count=0;
  const [count,setcount]=useState(0);
  function decreaseHandler(){
    setcount(count-1);
  }


   function increasehandler(){
      setcount(count+1);
   }
   function resetHandler(){
    setcount(0);
   }
  return (
   
    <div className="w-[100vw] h-[100vh] flex justify-center items-center bg-[#02042a] flex-col gap-10 text-white">
      <div className="font-md text-2xl">increment and decremenrt</div>
      <div className="bg-white flex justify-center items-center  gap-12  rounded-[2rem] text-black text-[25px] "> 
       <button onClick={decreaseHandler} className=" border-r-2 text-center w-20  border-black   py-3 rounded-md text-5xl"> -</button>
      <div className=" gap-12  text-5xl"> {count}</div>
      <button onClick={increasehandler} className=" border-l-2 text-center w-20  border-black text-5xl py-3 rounded-md ">+</button></div>
    
    <button onClick={resetHandler}  className="bg-[#0398d4] text-white px-5 py-2 rounded-md text-large">reset</button>

    </div>
  );
}
import { useState } from "react";

export default App;
