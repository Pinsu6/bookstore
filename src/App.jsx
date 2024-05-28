import { Toaster } from "react-hot-toast";
import Contect from "./components/Contect";

import Signup from "./components/Signup";
import Courses from "./courses/Courses";
import Home from "./home/Home";
import { Navigate, Route, Routes } from "react-router-dom";
import { useAuth } from "./context/AuthProvider";
function App() {
  const [authUser, setAuthUser] = useAuth();
  console.log(authUser);
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="/course"
          element={authUser ? <Courses /> : <Navigate to="/signup" />}
        ></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/contect" element={<Contect />}></Route>
      </Routes>
      <Toaster />
    </>
  );
}

export default App;
