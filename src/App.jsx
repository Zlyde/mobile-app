import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import { UserProvider } from "./context/UserContext";
import MainLayout from "./layout/MainLayout";
import UserLoginPage from "./pages/UserLoginPage";
import UserRegisterPage from "./pages/UserRegisterPage";
import GitCallback from "./pages/GitCallback";
import MapPage from "./pages/MapPage";
import RidePage from "./pages/RidePage";
import StartRidePage from "./pages/StartRidePage";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={< MainLayout />}>
        <Route index element={<UserLoginPage />}/>
        <Route path="/register" element={<UserRegisterPage />}/>
        <Route path='/oauth/callback' element={<GitCallback />}/>
        <Route path="/map" element={<MapPage />}/>
        <Route path="/ongoing" element={<RidePage />}/>
        <Route path="/start-ride/:bikeId" element={<StartRidePage />} />
      </Route>
    )
  )
  return (
    <UserProvider>
      <RouterProvider router={router}/>
    </UserProvider>
  );
}

export default App;
