import {useState} from 'react';
import Child from "./Child";

const Parent = () => {
    
    const [data, setData] = useState({n:1});

    /*
        This method will set "data" state to either 1 or 2.
        The "data" is passed to the <Child /> component as prop.
        Since object is passed by reference, whenever object is passed as prop to child component, child will re-render.
    */
    const handleRandomNumber = () => {
        setData(Math.floor(Math.random() * 2)+1 === 1 ? {n:1} : {n:2});
    }

    return(
        <div style={{border:"4px solid red", padding:"4px"}}>
            <br/>
            <button onClick={handleRandomNumber}>1 or 2</button>
            <Child data={data.n} />
        </div>
    );
}

export default Parent;