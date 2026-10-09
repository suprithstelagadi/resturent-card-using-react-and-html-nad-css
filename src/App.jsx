import "./App.css"
import Breakfast from "./Project/Breakfast/Breakfast";
import Dinner from "./Project/Dinner/Dinner";
import Header from "./Project/Header/Header"
import Lunch from "./Project/Lunch/Lunch";


let App=()=>{


  return(
    <div className="con">


    <Header/>
    <Breakfast/>
    <Lunch/>
    <Dinner/>


    </div>
  )
}

export default App;