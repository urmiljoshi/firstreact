import logo from './logo.svg';
import './App.css';

function App() {
   //====== Array =====//

//  let arr =[5,4,6,8,9];

//=================== copy array =====================//

//let arr1=[...arr];
//console.log(arr1); // 5,4,6,8,9

//========================== merging array ======================//

// let arr =[1,2,3,54,5];
// let arr2=[100,200];

// let ans = [...arr,...arr2];
// console.log(ans); //(7) [1, 2, 3, 54, 5, 100, 200]

//===================== destructuring =========================//

// let arr = [11,12,15,14,18];
// const [j,h,g,f,r] = arr;
// console.log(g);  //15

//========== Object =========//

//  let obj ={
//    id: 111,
//    name: 'ajay'
// }

//=================== copy Object =====================//
//let obj1={...obj};
//console.log(obj1); //{id: 111, name: 'ajay'}

//========================== merging obj======================//

//let obj2={
  //id:6462,
  // name:'urmil',
  //place:'surat'
// }
// let ans={...obj,...obj2};
// console.log(ans); //{id: 6462, name: 'urmil', place: 'surat'}
//===================== destructuring =====================//
 
// let obj={
//   id:6462,
//   name:'urmil'
// }

// let {id,name}=obj
// console.log(name,obj.id); //urmil 6462

return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
