import React, { useEffect, useState } from "react";
function AddName() {
  const [names, setNames] = useState(() => heavyWork()); //최초에 1번 호출 = 콜백함수
  const [input, setInput] = useState(""); //입력한 값을 읽는 함수, 변수

  function heavyWork() {
    for (let i = 0; i < 1000; i++) {
        console.log("엄청 복잡한 계산 중..")
    }
    return ['정수아', '리액트']
  }

  function InputChange(e) {
    setInput(e.target.value); //change이벤트 발생할 때 마다 setInput 함수 실행
  }
  function uploadInput() {
    //버튼 클릭했을 때 실행되는 함수
    //setNames([input]); //(새로운 값만 추가 되어서 기존의 "정수아"가 사라짐)원래 배열로 넣었기 때문에 배열형태로 작성해줘야한다. 배열형태로 작성해야지 map 이 동작함
    //기존의 내용을 유지시킨 상태에서 새로운 값이 추가 되도록 해보자
    //setNames 함수에 콜백함수가 들어가면 된다, 그리고 return 이후 코드가 한줄이라면? 괄호 생략가능
    //setNames((prevState) => [input, ...prevState]);
    //inputdmf 배열 뒤로 가게 한다면?
    setNames((prevState) => [...prevState, input]);
  }

  useEffect(()=> {
    console.log('랜더링이 완료됨');
    console.log({names})
  }, [names])

  return (
    <div>
      <input type="text" onChange={InputChange} />
      <button onClick={uploadInput}>추가</button>
      <div>
        {names.map((name, idx) => (
          <p key={idx}>{name}</p>
        ))}
      </div>
    </div>
  );
}
export default AddName;
