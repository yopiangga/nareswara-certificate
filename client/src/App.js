import "./App.css";
import app from "./config/Firebase";
import { AppContextProvider } from "./context/AppContextProvider";
import { UserContext } from "./context/UserContext";
import UploaderRouterPage from "./pages/uploader/UploaderRouterPage";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { useContext, useEffect, useState } from "react";
import { UserServices } from "./services/UserServices";
import { onAuthStateChanged, getAuth } from "firebase/auth";
import { Loader } from "./components/Loader";
import LoginPage from "./pages/auth/LoginPage";
import DownloaderRouterPage from "./pages/downloader/DownloaderRouterPage";
const auth = getAuth(app);

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppContextProvider>
        <UserManager />
      </AppContextProvider>
    </QueryClientProvider>
  );
}

export default App;

function UserManager() {
  const { user, setUser } = useContext(UserContext);
  const [load, setLoad] = useState(true);

  useEffect(() => {
    fetch();
  }, []);

  async function fetch() {
    onAuthStateChanged(auth, async function (user) {
      if (user) {
        const resUser = await UserServices.getUser("email", user.email);
        if (resUser != false) {
          setUser(resUser);
          setLoad(false);
        }
      } else {
        setUser(null);
        setLoad(false);
      }
    });
  }

  if (load) {
    return <Loader />;
  } else if (user == null) {
    return <LoginPage />;
  } else if (user.role == 1) {
    return <UploaderRouterPage />;
  } else if (user.role == 2) {
    return <DownloaderRouterPage />;
  } else {
    return <h1>404 Page</h1>;
  }
}
