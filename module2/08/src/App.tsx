import {Routes, Route} from "react-router";
import Home from "./component/home";
import './App.css'
import Register from "./component/register";


function App() {
    return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/register" element={<Register/>}></Route>
        </Routes>
      </div>
    </>
  )
}

export default App
