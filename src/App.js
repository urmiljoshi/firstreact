import logo from './logo.svg';
import './App.css';

function App() {
  // let x =10;  
  // x = 5;
  // console.log(x); //5
// ----------------------------------------//
  // const x =10;
  // x = 5;
  // console.log(x); //error

  // ----------------------------------------//

  // let x;
  // x=5;
  // console.log(x); //5

  // ----------------------------------------//
  
// ====== Block scope =====================//
 
    //  const x=5;  //global scope
    //  {
    //   const x= 10; //local scope
    //  }
      // console.log(x);//5
//===============arroe function===================//
  // const display = (name,id) => {
  //   console.log(name,id);
  // }
  // display ("urmil",9); //function call
  //===================arrae===========================//
      // let grid =[12,18,26,27,46,"x"];
      // console.log(grid [3],grid);
//===================is array =========================//
// let arr =[12,18,26,27,46];
// let ans = Array.isArray (arr)
// console.log(ans);

//===================splice =========================//

// let arr = [10,20,30];
// arr.splice (2,0,99); // add 99 at 2and index
// arr.solice (1,2); // delet 2 element from 1st index

// console.log(arr);
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
