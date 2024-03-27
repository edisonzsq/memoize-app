import {useState} from 'react';
import Child from "./Child";

const Parent = () => {
    
    const [data, setData] = useState({n:1});

    /*
        Code Explanation:
        - The "handleRandomNumber" method will set "data" state to either 1 or 2.
        - The "data" is passed to the <Child /> component as prop.
        - Since object is passed by reference, whenever object is passed as prop to child component, child will re-render.

        Problem: If the new random number is the same as the previous number, child component should not render.
        - See child component comments on how to detect re-renders.

        To solve: Utilize the useMemo hooks to prevent child component from re-rendering if the newly generated random number
        is the same as the previous. In another words, the child component should re-render only if the newly generate random
        number is not the same as the previous state.
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