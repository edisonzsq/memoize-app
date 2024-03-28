import {useState, useEffect, useMemo} from 'react';
import Child from "./Child"
import useMockData from '../hooks/useMockData';

const Parent = () => {
    
    const [shoppingList] = useMockData(); // mock data
    const [data, setData] = useState(shoppingList);
    const [tax, setTax] = useState(1.09);

    /*
        Problem Explanation:
        - The data will be copied and send to child component every 1 second.
        - Even though the value of the data is similar, the child component still re-renders

        Your Task:
        - Prevent child component from re-rendering when there is no change to the data
        - Re-render child component only when tax input is changed
    */
    useEffect(() => {
        const instance = setInterval(() => {
            setData((prev) => {
                return [
                    ...prev
                ]
            })
        }, 1000);

        return () => {
            clearInterval(instance);
        }
    }, [])

    return(
        <div style={{border:"4px solid red", padding:"4px"}}>
            <input type="text" value={tax} onChange={(e) => {setTax(e.target.value)}} />
            <Child data={data} tax={tax} />
        </div>
    );
}

export default Parent;