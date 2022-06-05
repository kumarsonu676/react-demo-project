import "./App.css";
import "../public/css/style.css";
import RouteConfig from "./RouteConfig";
import { ToastContainer } from "react-toastify";
import AuthContext from "./store/auth-context";

function App() {
  return (
    <>
      <AuthContext.Provider
        value={{
          ctxUserName: "sonu@user.com",
          role: "Admin",
          access: 123,
          loggedIn: true,
        }}
      >
        <ToastContainer />
        <RouteConfig />
      </AuthContext.Provider>
    </>
  );
}

export default App;
