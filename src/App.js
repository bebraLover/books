import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "./pages/Home/Home";

function App() {
  return (
    <div>
      <Navbar/>
            <Routes>
            <Route path={'/'} element = {<Home/>}/>
            </Routes>
    </div>
  );
}

export default App;
