import { useState } from "react";

const Counter = () => {

  
  let [count,setState]= useState(0);
  
   function incrementcount() {
    setState(count+1);
    console.log(count);
    
   }

    let [state,setDecremet]= useState(0);
   function decrement() {
      setDecremet(state-1);
      console.log(state);
      
   }

   return(
    <div>
        <h1>useState Hooks</h1>

       <button onClick={incrementcount} style={{backgroundColor:"green"}}>Like: {count}</button> 

       <br></br>
       <button onClick={decrement} style={{backgroundColor:"red"}}>DisLike: {state}</button>
    </div>
   )

}

export default Counter;