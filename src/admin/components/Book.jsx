import axios from "axios";
import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Aside from "../Aside";
import Edit from "./Edit";
import { useEdit } from "../context/EditProvider";

function Book() {
  const [edit1, setEdit] = useEdit();
  const [id, setId] = useState("6650439b66d81f0463522bd8");
  const [book, setBook] = useState([]);
  const [del, setDelete] = useState(false);
  const [data, setData] = useState(false);
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
    setEdit(true);
    setDelete(false);
    getBook();
  }, [del, edit1]);

  const deleteBook = async (id) => {
    await axios.delete(`http://localhost:4000/book/delete/${id}`);
    setDelete(true);
  };
  const getId = async (id) => {
    setId(id);
    if (data) {
      setData(false);
    } else {
      setData(true);
    }
    document.getElementById("edit").showModal();
  };

  return (
    <div>
      <Navbar />
      <div className="mt-20">
        <Aside />
      </div>
      <div className="overflow-x-auto flex justify-center">
        <table className="table  text-center w-[1000px] ">
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
                      <button
                        className="btn btn-ghost btn-xs"
                        onClick={() => getId(item._id)}
                      >
                        Edit
                      </button>
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
        <Edit id={id} getdata={data} />
      </div>
    </div>
  );
}

export default Book;
