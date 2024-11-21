import logo from './logo.svg';
import './App.css';
import Login from './Components/Login/Login';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DashboardJs from './Components/Dashboard/Dashboard';
import SignUp from './Components/Login/SignUp/SignUp';
import Dashboard from './Components/Dashboard/Dashboard';
import PickupDashboard from './Components/PickupGames/PickupDashboard';

function App() {
  return (
    <div className="App">

      <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<DashboardJs/>} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/PickupDash" element={<PickupDashboard />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
