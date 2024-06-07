import { Toaster } from "react-hot-toast";

import Signup from "./components/Signup";
import Courses from "./courses/Courses";
import Home from "./home/Home";
import { Navigate, Route, Routes } from "react-router-dom";
import { useAuth } from "./context/AuthProvider";
import Admin from "./admin/Admin";
import Addbook from "./admin/components/Addbook";
import Book from "./admin/components/Book";
import Users from "./admin/components/Users";
import SuggestBook from "./admin/components/SuggestBook";
import Inbox from "./admin/components/Inbox";
import ShowPdf from "./components/ShowPdf";
import BuyNow from "./components/BuyNow";
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
        <Route
          path="/showpdf/:name"
          element={authUser ? <ShowPdf /> : <Navigate to="/signup" />}
        ></Route>
        <Route
          path="/buynow/:id"
          element={authUser ? <BuyNow /> : <Navigate to="/signup" />}
        ></Route>
        <Route path="/admin" element={bool && <Admin />}></Route>
        <Route path="/addbook" element={bool && <Addbook />}></Route>
        <Route path="/book" element={bool && <Book />}></Route>
        <Route path="/user" element={bool && <Users />}></Route>
        <Route path="/suggestbook" element={bool && <SuggestBook />}></Route>
        <Route path="/inbox" element={bool && <Inbox />}></Route>

        <Route path="/signup" element={<Signup />}></Route>
      </Routes>
      <Toaster />
    </>
  );
}

export default App;
