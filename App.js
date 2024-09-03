import { useMemo, useRef, useState } from 'react';
import './App.css';
// import Prac02 from './components/Prac02';
// import UseEffect from './components/UseEffect';
// import UseRefComponent from './components/UseRefComponent';
// import UseRefComponent2 from './components/UseRefComponent2';
// import UseRefDom from './components/UseRefDom';
// import AddName from './components/AddName';
import FoodList from './components/FoodList';

function App() {
//   const style = {
//     margin: '30px'
//   }

//   const[name, setName] = useState()
//   const[age, setAge] = useState()

//   const nameRef = useRef()
//   const ageRef = useRef()

// const [hardNumber, setHardNumber] = useState(1);
// const [easyNumber, setEasyNumber] = useState(1);

// const hardSum = useMemo(() => hardCalculator(hardNumber, [hardNumber]));
// const easySum = easyCalculator(easyNumber);

// function hardCalculator(number) {
//   for(let i=0; i<10; i++) {
//     console.log(i);
//   }
//   return number +10000;
// }

// function easyCalculator(number) {
//   console.log('쉬운 계산 중');
//   return number +1;
// };

return (
    // <>
    // <AddName/>
    // </>

    <>
    <FoodList/>
    </>

    // <>
    // <UseEffect/>
    // </>

    // <>
    // <UseRefComponent/>
    // </>

    // <>
    // <UseRefComponent2/>
    // </>

    // <>
    // <UseRefDom/>
    // </>

    // <>
    // <Prac02/>
    // </>

    // <div>
    //   <div style={style}>
    //     <h1>input 태그 value 값 지정</h1>
    //     이름: <input type='text' ref={nameRef} onChange={(e)=> setName(nameRef.current.value)}></input>
    //     나이: <input type='number' ref={ageRef} onChange={(e)=> setAge(ageRef.current.value)}></input>
    //   </div>
    // </div>

//  <div>
//     <h3>어려운 계산기</h3>
//     <input type='number'
//     value={hardNumber}
//     onChange={(e) => setHardNumber(parseInt(e.target.value))}/>
//     <span> +10000 = {hardSum}</span>

//     <h3>쉬운 계산기</h3>
//     <input type='number'
//     value={easyNumber}
//     onChange={(e) => setEasyNumber(parseInt(e.target.value))}/>
//     <span> +10000 = {easySum}</span>
//   </div>
    
)};




export default App;
