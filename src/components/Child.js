import { useEffect } from "react";

let numberOfRenders = 0;

const Child = ({data}) => {

    numberOfRenders++; // Increment by 2 means the child component has re-rendered

    return (
        <div style={{border:"4px solid blue", padding:"4px"}}>
            <div>Number of renders: {numberOfRenders} </div>
            <div>Data: {data}</div>
        </div>
    );

}

export default Child;