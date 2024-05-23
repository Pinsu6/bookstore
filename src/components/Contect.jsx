import { useRef } from "react";
import { useForm } from "react-hook-form";

function Contect() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const modalRef = useRef(null);

  const onSubmit = (data) => {
    console.log(data);
    modalRef.current.close();
  };

  const closeModal = () => {
    modalRef.current.close();
  };

  return (
    <>
      <dialog id="my_modal_3" className="modal" ref={modalRef}>
        <div className="modal-box">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
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
              <label className="text-md">Enter Your Email</label>
              <br />
              <input
                type="email"
                placeholder="Enter Your Email"
                className="w-80 px-3 border rounded-md outline-none py-1"
                {...register("email", { required: true })}
              />
            </div>
            <br />
            {errors.email && (
              <span className="text-sm text-red-500">
                This field is required
              </span>
            )}
            <div className="space-y-3 mt-3">
              <label className="text-md">
                Enter Your complaint or suggestions
              </label>
              <br />
              <textarea
                className="textarea textarea-bordered h-24 w-80"
                placeholder="suggestions"
                {...register("text", { required: true })}
              ></textarea>
            </div>
            <br />
            {errors.text && (
              <span className="text-sm text-red-500">
                This field is required
              </span>
            )}

            <div className="space-y-3 mt-5 flex justify-center">
              <button className="bg-pink-500 text-white hover:bg-pink-700 duration-300 w-1/4 rounded-md h-8">
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
