import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import { UserProvider } from "./contex/UserContext";
import MainLayout from "./layout/MainLayout";
import UserLoginPage from "./pages/UserLoginPage";
import GitCallback from "./pages/GitCallback";
import MapPage from "./pages/MapPage";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={< MainLayout />}>
        <Route index element={<UserLoginPage />}/>
        <Route path='/oauth/callback' element={<GitCallback />}/>
        <Route path="/map" element={<MapPage />}/>
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
