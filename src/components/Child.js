let renderCount = 0;

const Child = ({data, tax}) => {

    renderCount++; // Render Count will increment when there is a render / re-render

    const calculatePayable = () => {
        let totalPrice = 0;
        data?.forEach(d => {
            totalPrice += d.price;
        })
        return totalPrice * tax;
    }

    return (
        <div style={{border:"4px solid blue", padding:"4px"}}>
            Render Count: {renderCount}
            {
                data?.map((d, i) => {
                    return (
                        <div key={i} style={{display:"flex", flexDirection:"row"}}>
                            <div style={{display:"flex", flexDirection:"row", padding:"4px"}}>
                                <div>Product:</div>
                                <div>{d.product}</div>
                            </div>
                            <div style={{display:"flex", flexDirection:"row", padding:"4px"}}>
                                <div>Price</div>
                                <div>{d.price}</div>
                            </div>
                        </div>
                    )
                })
            }
            <b>Payable: {calculatePayable()}</b>
        </div>
    );

}

export default Child;