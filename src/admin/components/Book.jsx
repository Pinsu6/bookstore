import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";

function Book() {
  const [book, setBook] = useState([]);
  const [del, setDelete] = useState(false);
  useEffect(() => {
    const getBook = async () => {
      try {
        const response = await axios.get("http://localhost:4000/book/");
        console.log(response.data);
        setBook(response.data);
      } catch (error) {
        console.log("error from course", error);
      }
    };
    setDelete(false);
    getBook();
  }, [del]);

  const deleteBook = async (id) => {
    await axios.delete(`http://localhost:4000/book/delete/${id}`);
    setDelete(true);
  };

  return (
    <div>
      <Navbar />
      <div className="overflow-x-auto flex justify-center">
        <table className="table mt-20 text-center w-[1000px] ">
          <thead>
            <tr>
              <th></th>

              <th>Book Name</th>
              <th>category</th>
              <th>price</th>
            </tr>
          </thead>
          {book.map((item) => {
            return (
              <>
                <tbody>
                  <tr>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img
                              src={item.image}
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                        <div></div>
                      </div>
                    </td>

                    {/*name*/}
                    <td>
                      <div className="  ">
                        <div>{item.title}</div>
                      </div>
                    </td>
                    {/*category*/}
                    <td>
                      <div className="">
                        <div>{item.category}</div>
                      </div>
                    </td>

                    <td>
                      <div className="">
                        <div>{item.price}</div>
                      </div>
                    </td>

                    <th>
                      <button className="btn btn-ghost btn-xs">Edit</button>
                    </th>
                    <th>
                      <button
                        className="btn btn-ghost btn-xs"
                        onClick={() => deleteBook(item._id)}
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
  );
}

export default Book;
