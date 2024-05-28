import toast from "react-hot-toast";
import { useAuth } from "../context/AuthProvider";

function Logout() {
  const handleLogout = () => {
    try {
      setAuthUser({
        ...authUser,
        user: null,
      });
      localStorage.removeItem("Users");
      toast.success("Logout Done");
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    } catch (error) {
      console.log(error + "from logout");
      setTimeout(() => {}, 1000);
    }
  };
  const [authUser, setAuthUser] = useAuth();
  return (
    <div>
      <button
        className="px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer hover:bg-red-700"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
}

export default Logout;
