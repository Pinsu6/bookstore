import { useState } from "react";
import Navbar from "../../components/Navbar";
import Aside from "../Aside";

import axios from "axios";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
function Addbook() {
  const [title, setTitle] = useState("");
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("0");
  const [pdf, setPDF] = useState("");
  const [file, setFile] = useState("");

  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  const addBook = async () => {
    const add = {
      name: name,
      price: price,
      category: category.toLowerCase(),
      image: image,
      title: title,
    };
    await axios.post("http://localhost:4000/book/addbook", add).then((res) => {
      if (res.data) {
        toast.success("Book added");
      } else {
        toast.error("Book Not Added");
      }
    });
    submitImage();
  };
  const submitImage = async () => {
    const formData = new FormData();
    formData.append("pdf", title);
    formData.append("file", file);

    const res = await axios.post("http://localhost:4000/pdf/pdfget", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    console.log(res);
  };
  return (
    <>
      <Navbar />
      <Aside />
      <div className="mt-20 ">
        <div>
          <div className="flex  items-center justify-center">
            <div className=" w-[600px] flex justify-center">
              <div className="modal-box ">
                <form method="dialog">
                  <Link
                    to="/"
                    className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                  >
                    ✕
                  </Link>

                  <h3 className="font-bold text-lg flex justify-center p-2">
                    Add Book
                  </h3>
                  <hr />
                  <div className="mt-4 space-y-2 ">
                    <span>tiitle of Book</span>
                    <br />
                    <input
                      type="text"
                      placeholder="Enter book Title"
                      className="w-80 px-3 border rounded-md outline-none py-1 "
                      onChange={(e) => setTitle(e.target.value)}
                    />
                  </div>
                  <br />

                  <div className="mt-4 space-y-2">
                    <span>Enater Name of Book</span>
                    <br />
                    <input
                      type="text"
                      placeholder="Enter Book Name"
                      className="w-80 px-3 border rounded-md outline-none py-1 "
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <br />

                  <div className="mt-4 space-y-2">
                    <span>Image URL</span>
                    <br />
                    <input
                      type="text"
                      placeholder="Enter Image url"
                      className="w-80 px-3 border rounded-md outline-none py-1 "
                      onChange={(e) => setImage(e.target.value)}
                    />
                  </div>
                  <br />
                  {/* pdf */}
                  <form onSubmit={submitImage}>
                    <div className="mt-4 space-y-2">
                      <span>Pdf file</span>
                      <br />
                      <input
                        type="file"
                        placeholder="Enter Image url"
                        className="w-80 px-3 border rounded-md outline-none py-1 "
                        accept="application/pdf"
                        onChange={(e) => setFile(e.target.files[0])}
                      />
                    </div>
                    <br />
                  </form>

                  {/* pdf work end */}
                  <div className="mt-4 space-y-2">
                    <span>Category</span>
                    <br />
                    <select
                      value={category}
                      onChange={handleChange}
                      className="select select-ghost w-full max-w-xs"
                    >
                      <option disabled selected value="">
                        pick category
                      </option>
                      <option value="free">Free</option>
                      <option value="paid">paid</option>
                    </select>
                  </div>

                  <br />

                  {category === "paid" && (
                    <div className="mt-4 space-y-2">
                      <span>Price Of Book</span>
                      <br />
                      <input
                        type="Number"
                        placeholder="Enter Price"
                        className="w-80 px-3 border rounded-md outline-none py-1 "
                        onChange={(e) => setPrice(e.target.value)}
                      />
                    </div>
                  )}
                  <br />

                  <div className="flex justify-around mt-4">
                    <button
                      className="bg-pink-500 text-white rounded-md w-[100px] px-3 py-1 hover:bg-pink-700 duration-200"
                      onClick={addBook}
                    >
                      Add
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Addbook;
