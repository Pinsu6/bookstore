import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useEdit } from "../context/EditProvider";

function Edit({ id, getdata }) {
  const modal = useRef();
  const [edit1, setEdit] = useEdit();
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getData = async () => {
    const response = await axios.get(`http://localhost:4000/book/fetch/${id}`);

    setName(response.data.bookData.name);
    setPrice(response.data.bookData.price);
    setCategory(response.data.bookData.category);
    setImage(response.data.bookData.image);
    setTitle(response.data.bookData.title);
  };

  useEffect(() => {
    getData();
  }, [getdata]);

  const editData = async () => {
    try {
      const bookData = {
        name: name,
        price: price,
        category: category,
        image: image,
        title: title,
      };
      await axios.put(`http://localhost:4000/book/edit/${id}`, bookData);
      modal.current.close();
      setEdit(false);
    } catch (error) {
      console.log("eeror front end Edit ", error);
    }
  };
  return (
    <div>
      <dialog id="edit" className="modal" ref={modal}>
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg flex justify-center  mb-1">Edit</h3>
          <hr className="mb-5" />
          <div className="p-3">
            <div className="mb-3">
              <h3 className="p-2">Title</h3>
              <label className="input input-bordered flex items-center gap-2">
                <input
                  type="text"
                  className="grow"
                  value={title}
                  placeholder="Name"
                  onChange={(e) => setTitle(e.target.value)}
                />
              </label>
            </div>
            <div className="mb-3">
              <h3 className="p-2">Name</h3>
              <label className="input input-bordered flex items-center gap-2">
                <input
                  type="text"
                  className="grow"
                  placeholder="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </label>
            </div>

            <div className="mb-3">
              <h3 className="p-2">Price</h3>
              <label className="input input-bordered flex items-center gap-2">
                <input
                  type="text"
                  className="grow"
                  placeholder="price"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </label>
            </div>
            <div className="mb-3">
              <h3 className="p-2">Cateory</h3>
              <label className="input input-bordered flex items-center gap-2">
                <input
                  type="text"
                  className="grow"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                />
              </label>
            </div>
            <div className="mb-5">
              <h3 className="p-2">Image Url</h3>
              <label className="input input-bordered flex items-center gap-2">
                <input
                  type="image Url"
                  className="grow"
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                />
              </label>
            </div>
            <div className=" flex justify-center mt-5 ">
              <button
                className="w-[120px] round rounded-full  bg-pink-500 text-white hover:bg-pink-700"
                onClick={editData}
              >
                Edit
              </button>
            </div>
          </div>
        </div>
      </dialog>
    </div>
  );
}

export default Edit;
