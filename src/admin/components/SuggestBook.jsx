import  { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Aside from "../Aside";
import axios from "axios";

function SuggestBook() {
  const [suggestbook, setSuggestBook] = useState([]);
  const [del, setDel] = useState("");
  const getSuggest = async () => {
    try {
      setDel(false);
      const response = await axios.get(
        "http://localhost:4000/suggestbook/getsuggest"
      );

      setSuggestBook(response.data.get);
    } catch (error) {
      console.log("error from course", error);
    }
  };
  const deleteBook = async (id) => {
    await axios.delete(`http://localhost:4000/suggestbook/delete/${id}`);
    setDel(true);
  };
  useEffect(() => {
    getSuggest();
  }, [del]);
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
            </tr>
          </thead>
          {suggestbook.map((item) => {
            return (
              <>
                <tbody>
                  <tr>
                    <td></td>

                    {/*Name*/}
                    <td>
                      <div className="  ">
                        <div>{item.bookName}</div>
                      </div>
                    </td>
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

export default SuggestBook;
