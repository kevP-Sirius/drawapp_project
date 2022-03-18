import { Routes,Route } from "react-router-dom"
import { useEffect } from 'react';
import DrawGameContainer from "./container/drawGameContainer";
const App = ({firststate}) => {

  useEffect(()=>{  
    
  },[])
  return (
    <>
    <div className="">
        <div className="">
            <Routes>
                
                <Route path="/" element={<DrawGameContainer/>} />
            </Routes>
        </div>
    </div>
    </>
  )
}

export default App;
