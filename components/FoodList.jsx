import { upload } from '@testing-library/user-event/dist/upload';
import React, { useState } from 'react';
// import GetBackDataV3 from './components/Query/GetBackDataV3'

const FoodList = () => {
    const [foods, setFood] = useState(['사탕', '초콜릿']);
    const [input, setInput] = useState('');

    const InputChange = (e) => {
        setInput(e.target.value);
    }
    const uploadInput = (e) => {
        setFood((prevState) => [input, ...prevState])
    }
    return (
        <div>
            <input type='text' onChange={InputChange}></input>
            <button onClick={uploadInput}>추가</button>
            <ul>
                {foods.map((food, idx) => (
                    <li key={idx}>{food}</li>
                ))}
            </ul>
        </div>
    );
};

export default FoodList;