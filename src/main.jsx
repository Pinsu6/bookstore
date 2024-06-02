import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import AuthProvider from "./context/AuthProvider.jsx";
import EditProvider from "./admin/context/EditProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AuthProvider>
      <EditProvider>
        <div>
          <App />
        </div>
      </EditProvider>
    </AuthProvider>
  </BrowserRouter>
);
