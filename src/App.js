// import logo from './logo.svg';
// import React,{useEffect} from 'react';
// import './App.css';
// import Home from './Home';
// import Boom from './Boom';
// import {useNavigate} from 'react-router-dom'; 
// import {BrowserRouter,Routes,Route,Redirect} from 'react-router-dom'
// import Same from './Same';


// function App() {

//  const navigate = useNavigate();
//   // useEffect(() => {
//   //   navigate("/Home")
//   // })

//   return (
//     <div className="App">
//        {/* <Home/> */}
//        <Routes>
//         {/* <Route  exact path={process.env.PUBLIC_URL + '/Home'}/> */}
//         <Route exact path="/Home" element={<Home/>}/>
//         <Route exact path='/Home/Boom' element={<Boom/>}/>
//         {/* <Route exact path="*" element={<Same/>}/> */}
//        </Routes>
//     </div>
//   );
// }

// export default App;


import React,{useState,useEffect} from 'react'

const App = () => {
 const santhu = ["sun","monday","tues","wed","Thurs","Friday","sat"]
 const [count,setCount] = useState(0)
 
 function sam(){
  if(count == 6){
    return setCount(0)
  }
  setCount(count+1)
 }
  return (
    <div >
        {santhu[count]}
        <button onClick={sam}>increment</button>
    </div>
  )
}

export default App
