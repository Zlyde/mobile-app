import { HashRouter as Router, Route, Routes } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Map from "./components/Map";
import UserLogin from "./components/UserLogin";

function App() {
  return (
    <div>
      <Header></Header>
      <Router>
        <main className="main">
          <Routes>
            <Route path="/" element={<UserLogin />} />

            {/*             <Route 
            path="/map" 
            element={
              <PrivateRoute>
                <Map className="map" />
              </PrivateRoute>} 
            /> */}
            <Route path="/map" element={<Map className="map" />} />
          </Routes>
        </main>
        <Navigation />
      </Router>
    </div>
  );
}

export default App;
