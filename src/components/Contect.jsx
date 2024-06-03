import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

function Contect() {
  const [msg, setMsg] = useState("");

  const modalRef = useRef(null);
  const intialAuthUser = localStorage.getItem("Users");
  const user = JSON.parse(intialAuthUser);

  const send = async () => {
    try {
      const info = {
        email: user.email,
        msg: msg,
      };
      message();
      await axios.post("http://localhost:4000/contect/send/", info);
    } catch (error) {
      console.log("error from Contect front end ", error);
    }
  };
  const message = () => {
    toast.success("we will connect to you soon");

    setMsg("");
  };
  const closeModal = () => {
    modalRef.current.close();
  };

  return (
    <>
      <dialog id="my_modal_8" className="modal" ref={modalRef}>
        <div className="modal-box">
          <form method="dialog">
            <button
              type="button"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={closeModal}
            >
              ✕
            </button>

            <h3 className="font-bold text-lg flex justify-center m-2 py-2">
              Contact Us!
            </h3>
            <hr />
            <div className="space-y-3 mt-3">
              <label className="text-md"> Your Email</label>
              <br />
              <input
                type="email"
                placeholder="Enter Your Email"
                className="w-80 px-3 border rounded-md outline-none py-1"
                value={user.email}
              />
            </div>
            <br />

            <div className="space-y-3 mt-3">
              <label className="text-md">
                Enter Your complaint or suggestions
              </label>
              <br />
              <textarea
                className="textarea textarea-bordered h-24 w-80"
                placeholder="suggestions"
                value={msg}
                onChange={(e) => setMsg(e.target.value)}
              ></textarea>
            </div>
            <br />

            <div className="space-y-3 mt-5 flex justify-center">
              <button
                className="bg-pink-500 text-white hover:bg-pink-700 duration-300 w-1/4 rounded-md h-8"
                onClick={send}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </>
  );
}

export default Contect;
