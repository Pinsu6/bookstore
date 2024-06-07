import React from "react";
import Navbar from "./Navbar";
import { useParams } from "react-router-dom";
function BuyNow() {
  const { id } = useParams();
  console.log("id is ", id);
  return (
    <div>
      <Navbar />
      <div className="flex justify-center items-center min-h-screen">
        <div className="card w-96 bg-base-100 shadow-xl flex justify-center items-center bg-white text-black p-2">
          <div className="card-body">
            <h2 className="card-title">Payment!</h2>
          </div>

          <figure>
            <img
              src="https://www.lyra.com/in/wp-content/uploads/sites/8/2020/05/OQ-Code-Payments.png"
              alt="apy"
            />
          </figure>
        </div>
      </div>
    </div>
  );
}

export default BuyNow;
