import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Aside from "./Aside";
import { useEffect, useState } from "react";
import axios from "axios";

function Admin() {
  const [count, setCount] = useState(0);
  const [freebook, setFreeBook] = useState(0);
  const [paidbook, setPaidBook] = useState(0);
  const [user, setUser] = useState(0);

  const getUser = async () => {
    const response = await axios.get("http://localhost:4000/user/getuser");
    setUser(response.data.user.length);
  };

  const getBook = async () => {
    const response = await axios.get("http://localhost:4000/book");
    const freebook = response.data.filter((data) => data.category === "free");
    const paidbook = response.data.filter((data) => data.category === "paid");
    setFreeBook(freebook.length);
    setPaidBook(paidbook.length);
    setCount(response.data.length);
  };
  useEffect(
    () => {
      getBook();
      getUser();
    },
    [count],
    [user]
  );
  return (
    <div>
      <Navbar />
      <div className="mt-20">
        <button
          data-drawer-target="sidebar-multi-level-sidebar"
          data-drawer-toggle="sidebar-multi-level-sidebar"
          aria-controls="sidebar-multi-level-sidebar"
          type="button"
          className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        >
          <span className="sr-only">Open sidebar</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clipRule="evenodd"
              fillRule="evenodd"
              d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
            />
          </svg>
        </button>
        <Aside />
        <div className="p-4 sm:ml-64">
          <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
            <div className="grid grid-cols-3 gap-4 mb-4">
              <div className="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
                <h1>Total Books</h1>
                <p className="text-2xl p-2 text-gray-400 dark:text-white-500">
                  {count}
                </p>
              </div>
              <div className="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
                <h1>Total Users</h1>
                <p className="text-2xl p-2 text-gray-400 dark:text-gray-500">
                  {user}
                </p>
              </div>
              <div className="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
                <h1>Total sales</h1>
                <p className="text-2xl p-2 text-gray-400 dark:text-gray-500">
                  250000
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
                <h1>Free Books</h1>
                <p className="text-2xl p-2 text-gray-400 dark:text-gray-500">
                  {freebook}
                </p>
              </div>
              <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
                <h1>Total Paid Books</h1>
                <p className="text-2xl p-2 text-gray-400 dark:text-gray-500">
                  {paidbook}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admin;
