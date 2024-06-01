import { Toaster } from "react-hot-toast";

import Signup from "./components/Signup";
import Courses from "./courses/Courses";
import Home from "./home/Home";
import { Navigate, Route, Routes } from "react-router-dom";
import { useAuth } from "./context/AuthProvider";
import Admin from "./admin/Admin";
import Addbook from "./admin/components/Addbook";
import Book from "./admin/components/Book";
function App() {
  const [authUser] = useAuth();
  let bool = false;
  const userDataString = localStorage.getItem("Users");
  const userData = JSON.parse(userDataString);
  if (userDataString != null) {
    if (userData.email === "prince@gmail.com") {
      bool = true;
    }
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="/course"
          element={authUser ? <Courses /> : <Navigate to="/signup" />}
        ></Route>
        <Route path="/admin" element={bool && <Admin />}></Route>
        <Route path="/addbook" element={bool && <Addbook />}></Route>
        <Route path="/book" element={bool && <Book />}></Route>

        <Route path="/signup" element={<Signup />}></Route>
      </Routes>
      <Toaster />
    </>
  );
}

export default App;
