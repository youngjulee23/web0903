import React, { useRef, useState } from 'react';

const Prac02 = () => {
    const [currentText, setCurrentText] = useState('');
    const inputRef = useRef();

    function sendBtn(e) {
        setCurrentText(inputRef.current.value);
        console.log('랜더링 완료')
    }
    return (
        <div>
            <input type='text' ref={inputRef}></input>
            <button onClick={sendBtn}>전송</button>
            <h1>전송된 단어: {currentText}</h1>
        </div>
    );
};

export default Prac02;