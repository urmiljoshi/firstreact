import logo from './logo.svg';
import './App.css';

function App() {
  //================== is Array ======================//
  // let arr =[21,22,23,24,25];
  //  let ans= Array . isArray(arr)
  //  console.log(ans);   //true

//==================== concat =========================//
  // let arr = [21,22,23,24,25];
   //let arr1 =[199,200];
  // let newarr = arr.concat(arr1);
  // console.log(newarr); //) [21, 22, 23, 24, 25, 199, 200]

//=========================================================//
  //let arr = [21,22,23,24,25];
  //let arr1 =[199,200];
  // let ans = arr.some((a) => a =>30);
  // console.log(ans);  // true
 
  //======================== to string ===================================//

  // let arr =[21,22,23,24,25];
  // console.log(arr.toString(arr));//21,22,23,24,25
//=================== find ==========================//  
  // let arr =[21,22,23,24,25];
  //  let ans =arr.find ((a) => a =>30);
  //  console.log(ans);  //21,22,23,24,25

  //let arr =[21,22,23,24,25];
  // arr.splice(2,0,99); //  [21, 22, 99, 23, 24, 25] element add 
 // arr.splice(2,2)  // element delet .
  //console.log(arr); 

  //=================== object ========================//
  //    let obj = {
  //   id : 6462,
  //   namr : "urmil"
  // };
  // console.log(obj.id,obj["name"]); //6462 {id: 6462, namr: 'urmil'}

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
