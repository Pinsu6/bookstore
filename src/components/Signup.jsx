import { Link, useNavigate } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
function Signup() {
  const location = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    console.log("name is ", data.name);
    const userInfo = {
      fullname: data.name,
      email: data.email,
      password: data.password,
    };
    await axios
      .post("http://localhost:4000/user/signup", userInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          toast.success("Successfully singup!");
          location("/");
          window.location.reload();
        }
        localStorage.setItem("Users", JSON.stringify(res.data.user));
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
  };
  return (
    <>
      <div className="flex h-screen items-center justify-center">
        <div className=" w-[600px] flex justify-center">
          <div className="modal-box ">
            <form onSubmit={handleSubmit(onSubmit)} method="dialog">
              <Link
                to="/"
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              >
                ✕
              </Link>

              <h3 className="font-bold text-lg flex justify-center p-2">
                SignUp!
              </h3>
              <hr />
              <div className="mt-4 space-y-2 ">
                <span>Name</span>
                <br />
                <input
                  type="text"
                  placeholder="Enter Your Full Name"
                  className="w-80 px-3 border rounded-md outline-none py-1 "
                  {...register("name", { required: true })}
                />
              </div>
              <br />
              {errors.name && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
              <div className="mt-4 space-y-2">
                <span>Email</span>
                <br />
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className="w-80 px-3 border rounded-md outline-none py-1 "
                  {...register("email", { required: true })}
                />
              </div>
              <br />
              {errors.email && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}

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
              </div>
              <br />
              {errors.password && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
              <div className="flex justify-around mt-4">
                {/* button*/}
                <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
                  SignUp
                </button>
                <p>
                  Aleready registred?
                  <button
                    className="underline text-blue-500 cursor-pointer p-1"
                    onClick={() =>
                      document.getElementById("my_modal_1").showModal()
                    }
                  >
                    Login
                  </button>
                  <Login />
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
