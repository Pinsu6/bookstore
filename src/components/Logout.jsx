import toast from "react-hot-toast";
import { useAuth } from "../context/AuthProvider";
import { useNavigate } from "react-router-dom";

function Logout() {
  const nevigate = useNavigate();
  const handleLogout = () => {
    try {
      if (authUser) {
        setAuthUser(null);
        localStorage.removeItem("Users");
        toast.success("Logout Done");
        setTimeout(() => {
          window.location.reload();
        }, 2000);
        nevigate("/");
      } else {
        console.error("User not authenticated.");
      }
    } catch (error) {
      console.error("Error occurred during logout:", error);
    }
  };
  const [authUser, setAuthUser] = useAuth();
  return (
    <div>
      <button
        className="px-3 py-2 ml-4 bg-red-500 text-white rounded-md cursor-pointer hover:bg-red-700"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
}

export default Logout;
