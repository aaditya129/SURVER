import Header from "./Component/Header";
import Home from "./Component/Home";

import {
  Route,
  Switch,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import About from "./Component/About";
import Action from "./Component/Action";
import LiveDemo from "./Component/LiveDemo";
function App() {
  return (
    <>
    <Router>

   <Header/>
   <Routes>
   <Route
            exact
            path="/"
            element={
             
              <Home/>
            }
            />
   <Route
            exact
            path="/about"
            element={
             
              <About/>
            }
            />
   <Route
            exact
            path="/action"
            element={
             
              <Action/>
            }
            />
   <Route
            exact
            path="/demo"
            element={
             
             <LiveDemo/>
            }
            />
   </Routes>
    </Router>
    </>
  );
}

export default App;
