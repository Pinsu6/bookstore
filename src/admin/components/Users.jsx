import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Aside from "../Aside";
import axios from "axios";

function Users() {
  const [Name, setName] = useState([]);
  const [del, setDel] = useState(false);

  const getUser = async () => {
    try {
      setDel(false);
      const response = await axios.get("http://localhost:4000/user/getuser");
      console.log(response.data);
      setName(response.data.user);
    } catch (error) {
      console.log("error from course", error);
    }
  };

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:4000/user/delete/${id}`);
    setDel(true);
  };

  useEffect(() => {
    getUser();
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

              <th>User Name</th>
              <th>User Email</th>
              <th>price</th>
            </tr>
          </thead>
          {Name.map((item) => {
            return (
              <>
                <tbody>
                  <tr>
                    <td></td>

                    {/*Name*/}
                    <td>
                      <div className="  ">
                        <div>{item.fullname}</div>
                      </div>
                    </td>
                    {/*category*/}
                    <td>
                      <div className="">
                        <div>{item.email}</div>
                      </div>
                    </td>

                    <td>
                      <div className="">
                        <div>0</div>
                      </div>
                    </td>

                    <th>
                      <button
                        className="btn btn-ghost btn-xs"
                        onClick={() => deleteUser(item._id)}
                      >
                        {item.email !== "prince@gmail.com" && <p>Delete</p>}
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

export default Users;
