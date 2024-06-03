import { useEffect, useRef, useState } from "react";
import { Link, json } from "react-router-dom";
import Login from "./Login";
import Contect from "./Contect";
import { useAuth } from "../context/AuthProvider";
import Logout from "./Logout";

import Search from "./Search";
import Notification from "./Notification";
import axios from "axios";

function Navbar() {
  const [search, setSearch] = useState();
  const [authUser, setAuthUser] = useAuth();
  const notificationModalRef = useRef(null);
  const contectRef = useRef(null);

  const userDataString = localStorage.getItem("Users");
  const userData = JSON.parse(userDataString);
  const [book, setBook] = useState("");

  const [bookname, setBookName] = useState("");
  let bool = false;
  if (userDataString != null) {
    if (userData.email === "prince@gmail.com") {
      bool = true;
    }
  }

  const handlerNotification = async () => {
    try {
      const response = await axios.get("http://localhost:4000/book/");
      const books = response.data;
      if (bookname !== books.title) {
        setBook(books);
      }
      const lastBook = books[books.length - 1];
      if (lastBook.title !== bookname) {
        setBookName((prevBook) => [...prevBook, lastBook.title]);
      }

      document.getElementById("my_modal_3").showModal();
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };

  const handlerSearch = () => {
    <Search search={search} />;
  };

  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const navItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/course">Books</Link>
      </li>
      <li>
        <a onClick={() => document.getElementById("my_modal_8").showModal()}>
          Contect
        </a>
      </li>
      <li>
        <a>About</a>
      </li>
      {bool && (
        <li>
          <Link to="/admin">Admin</Link>
        </li>
      )}
    </>
  );
  return (
    <div
      className={`max-w-screen-2xl containern mx-auto md:px-20 px-4 fixed top-0 left-0 right-0 z-50 ${
        sticky
          ? "sticky-navbar shadow-md bg-base-500    transition-all ease-in-out"
          : ""
      }`}
    >
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-5 shadow bg-base-100 rounded-box w-52"
            >
              {navItems}
            </ul>
          </div>
          <a className=" text-2xl font-bold cursor-pointer lg:ms-[-22px] ">
            bookStore
          </a>
        </div>
        <div className="navbar-end space-x-3">
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-5">{navItems}</ul>
          </div>
          <div className="hidden md:block">
            <label className=" px-3 py-2 border border-black rounded-full flex items-center  gap-2 bg-black">
              <input
                type="text"
                className="grow outline-none bg-black"
                placeholder="Search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <div onClick={handlerSearch}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-4 h-4 opacity-70 cursor-pointer"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </label>
          </div>
          <div>
            <label className="swap swap-rotate">
              {/* this hidden checkbox controls the state */}
              <input
                type="checkbox"
                className="theme-controller"
                value="synthwave"
              />
            </label>
          </div>
          {authUser && (
            <div className="relative ">
              <svg
                className="w-5 h-8 text-teal-600 cursor-pointer "
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 21 21"
                onClick={handlerNotification}
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.585 15.5H5.415A1.65 1.65 0 0 1 4 13a10.526 10.526 0 0 0 1.5-5.415V6.5a4 4 0 0 1 4-4h2a4 4 0 0 1 4 4v1.085c0 1.907.518 3.78 1.5 5.415a1.65 1.65 0 0 1-1.415 2.5zm1.915-11c-.267-.934-.6-1.6-1-2s-1.066-.733-2-1m-10.912 3c.209-.934.512-1.6.912-2s1.096-.733 2.088-1M13 17c-.667 1-1.5 1.5-2.5 1.5S8.667 18 8 17"
                />
              </svg>
              <div className=" w-3 h-5 bg-teal-500 rounded-full text-center text-white text-sm absolute -top-2 -end-1">
                <small>{bookname.length}</small>
              </div>
            </div>
          )}
          {authUser ? (
            <Logout />
          ) : (
            <div>
              <a
                className="bg-black text-white px-3 py-2 rounded-md 
            hover:bg-slate-800 duration-300 cursor-pointer
            "
                onClick={() =>
                  document.getElementById("my_modal_1").showModal()
                }
              >
                Login
              </a>
              <Login />
            </div>
          )}
        </div>
      </div>
      {search && <Search search={search} />}
      <Contect />
      <Notification Lastbook={bookname} />
    </div>
  );
}

export default Navbar;
