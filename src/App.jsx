import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import MainLayout from "./layout/MainLayout";
import UserLoginPage from "./pages/UserLoginPage";
import MapPage from "./pages/MapPage";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={< MainLayout />}>
        <Route index element={<UserLoginPage />}/>
        <Route path="/map" element={<MapPage />}/>
      </Route>
    )
  )
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
