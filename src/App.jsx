import Contect from "./components/Contect";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Courses from "./courses/Courses";
import Home from "./home/Home";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/course" element={<Courses />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/contect" element={<Contect />}></Route>
      </Routes>
    </>
  );
}

export default App;
