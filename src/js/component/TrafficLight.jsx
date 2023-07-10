import React, {useState} from "react";

export const TrafficLight = () => {

    const[valueTop, setValueTop] = useState("red")
    const[valueMiddle, setValueMiddle] = useState("yellow")
    const[valueBottom, setValueBottom] = useState("green")
    
    return (
        <div className="traffic-light">
            <div className={valueTop} onClick={() => (setValueTop("red2"), setValueMiddle("yellow"), setValueBottom("green"))} ></div>
            <div className={valueMiddle} onClick={() => (setValueTop("red"), setValueMiddle("yellow2"), setValueBottom("green"))}></div>
            <div className={valueBottom} onClick={() => (setValueTop("red"), setValueMiddle("yellow"), setValueBottom("green2"))}></div>
        </div>
    )
}
