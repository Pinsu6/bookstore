import axios from "axios";
import React, { useEffect, useState } from "react";
import Aside from "../Aside";
import Navbar from "../../components/Navbar";

export default function Inbox() {
  const [data, setData] = useState([]);
  const [del, setDel] = useState(false);
  const getMessage = async () => {
    try {
      const response = await axios.get("http://localhost:4000/contect/get/");
      setData(response.data.getMessage);
      setDel(false);
    } catch (error) {
      console.log("error from infox ", error);
    }
  };

  const Del = async (id) => {
    try {
      await axios.delete(`http://localhost:4000/contect/delete/${id}`);
      setDel(true);
    } catch (error) {
      console.log("error from infox delete ", error);
    }
  };

  useEffect(() => {
    getMessage();
  }, [del]);

  return (
    <>
      <div>
        <Navbar />
        <div className="mt-20">
          <Aside />
        </div>
        <div className="overflow-x-auto flex justify-center">
          <table className="table  text-center w-[1000px] ">
            <thead>
              <tr>
                

                <th>Email</th>
                <th>Message</th>
              </tr>
            </thead>
            {data.map((item) => {
              return (
                <>
                  <tbody>
                    <tr>
                      {/*name*/}
                      <td>
                        <div className="  ">
                          <div>{item.email}</div>
                        </div>
                      </td>
                      {/*category*/}
                      <td>
                        <div className="">
                          <textarea
                            rows="4"
                            cols="50"
                          
                            value={item.msg}
                          >
                          
                          </textarea>
                        </div>
                      </td>

                      <th>
                        <button
                          className="btn btn-ghost btn-xs"
                          onClick={() => Del(item._id)}
                        >
                          Delete
                        </button>
                      </th>
                    </tr>
                  </tbody>
                </>
              );
            })}
          </table>
        </div>
      </div>
    </>
  );
}
