import "./App.css";
import app from "./config/Firebase";
import { AppContextProvider } from "./context/AppContextProvider";
import { UserContext } from "./context/UserContext";
import LoginPage from "./pages/auth/LoginPage";
import UploaderRouterPage from "./pages/uploader/UploaderRouterPage";

function App() {
  return (
    <AppContextProvider>
      {false ? <UploaderRouterPage /> : <LoginPage />}
    </AppContextProvider>
  );
}

export default App;
