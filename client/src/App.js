import "./App.css";
import app from "./config/Firebase";
import { AppContextProvider } from "./context/AppContextProvider";
import { UserContext } from "./context/UserContext";
import RegisterPage from "./pages/auth/RegisterPage";
import UploaderRouterPage from "./pages/uploader/UploaderRouterPage";

function App() {
  return (
    <AppContextProvider>
      {true ? <UploaderRouterPage /> : <RegisterPage />}
    </AppContextProvider>
  );
}

export default App;
