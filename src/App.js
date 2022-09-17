import "./App.css";
import app from "./config/Firebase";
import { AppContextProvider } from "./context/AppContextProvider";
import UploaderPage from "./pages/UploaderPage";

function App() {
  return (
    <AppContextProvider>
      <UploaderPage />
    </AppContextProvider>
  );
}

export default App;
