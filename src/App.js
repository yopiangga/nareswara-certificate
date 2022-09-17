import "./App.css";
import app from "./config/Firebase";
import { AppContextProvider } from "./context/AppContextProvider";
import { UserContext } from "./context/UserContext";
import UploaderRouterPage from "./pages/uploader/UploaderRouterPage";

function App() {
  return (
    <AppContextProvider>
      {true ? <UploaderRouterPage /> : <h1>Belum Login</h1>}
    </AppContextProvider>
  );
}

export default App;
