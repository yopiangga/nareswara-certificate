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
import AuthRouterPage from "./pages/auth/AuthRouterPage";
import { SmartContractContext } from "./context/SmartContractContext";
import AdminRouterPage from "./pages/admin/AdminRouterPage";
const auth = getAuth(app);

const queryClient = new QueryClient();
const userServices = new UserServices();

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
  const { currentAccount, isLoading } = useContext(SmartContractContext);
  const { user, setUser } = useContext(UserContext);
  const [load, setLoad] = useState(true);

  useEffect(() => {
    fetch();
  }, []);

  async function fetch() {
    onAuthStateChanged(auth, async function (users) {
      if (users) {
        const resUser = await userServices.getUserByEmail(users.email);
        setUser(resUser);
        setLoad(isLoading);
      } else {
        setUser(null);
        setLoad(false);
      }
    });
  }

  if (load) {
    return <Loader />;
  } else if (user == null) {
    return <AuthRouterPage />;
  } else if (user.role == 2) {
    return <UploaderRouterPage />;
  } else if (user.role == 1) {
    return <DownloaderRouterPage />;
  } else if (user.role == 99) {
    return <AdminRouterPage />;
  } else {
    return <h1>404 Page</h1>;
  }
}
