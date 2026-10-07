import { useState,useEffect } from "react";
function Counter(){
    const [count, setCount]= useState(0);


    useEffect(()=>{
            document.title=
            `Grading : ${count}`
          
        
    }, [count]);


    return(


        <>
        <h2>{count}</h2>
        <button onClick={()=>setCount(previous =>previous + 1)}></button>
        increase 
        </>
    )
}
export default Counter;