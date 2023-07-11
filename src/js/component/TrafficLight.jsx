import React, { useState } from 'react';

const TrafficLight =() => {
    const [selected,setSelected] = useState("red")
    return (
        <div>
            <div id="trafficTop"></div>
            <div id="container">
                <div className={"red light"+(selected=== "red"?" glow":"")} onClick={()=> setSelected("red")}></div>
                <div className={"yellow light"+(selected=== "yellow"?" glow":"")} onClick={()=> setSelected("yellow")}></div>
                <div className={"green light"+(selected=== "green"?" glow":"")} onClick={()=> setSelected("green")}></div>
            </div>
        </div>
    )
}
export default TrafficLight
