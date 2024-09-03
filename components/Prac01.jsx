import React, { useEffect, useState } from 'react';

const Prac01 = () => {
    const [count, setCount] = useState(0);
    const [renderCount, setRenderCount] = useState(0);

    useEffect(()=> {
        setRenderCount(renderCount + 1);
        console.log('랜더링 완료')
    })

    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={()=> setCount(count + 1)}>클릭</button>
        </div>
    );
};

export default Prac01;