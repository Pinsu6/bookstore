import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useRef } from "react";
function Login() {
  const modal = useRef();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log("daata is", data);
  const closeModal = () => {
    modal.current.close();
  };
  return (
    <div>
      <dialog id="my_modal_1" className="modal" ref={modal}>
        <div className="modal-box">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            <button
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={closeModal}
            >
              ✕
            </button>

            <h3 className="font-bold text-lg flex justify-center p-2">
              Login!
            </h3>
            <hr />
            <div className="mt-4 space-y-2">
              <span>Email</span>
              <br />
              <input
                type="email"
                placeholder="Enter Your Email"
                className="w-80 px-3 border rounded-md outline-none py-1 "
                {...register("email", { required: true })}
              />
              <br />
              {errors.email && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
            </div>
            {/* password*/}
            <div className="mt-4 space-y-2">
              <span>Password</span>
              <br />
              <input
                type="password"
                placeholder="Enter Your password"
                className="w-80 px-3 border rounded-md outline-none py-1 "
                {...register("password", { required: true })}
              />
              <br />
              {errors.password && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
            </div>
            <div className="flex justify-around mt-4">
              {/* button*/}
              <button
                type="submit"
                className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200"
              >
                Login
              </button>
              <p>
                Not registred?{" "}
                <Link
                  to="/signup"
                  className="underline text-blue-500 cursor-pointer"
                >
                  SignUp
                </Link>
              </p>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default Login;
