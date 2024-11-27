import logo from './logo.svg';
import './App.css';
import Login from './Components/Login/Login';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DashboardJs from './Components/Dashboard/Dashboard';
import SignUp from './Components/Login/SignUp/SignUp';
import Dashboard from './Components/Dashboard/Dashboard';
import PickupDashboard from './Components/PickupGames/PickupDashboard';
import WsbcReg from './Components/WSBC_REGFORM/Wsbc_Form';
import WcbaReg from './Components/WCBA_REGFORM/Wcba_form';
import TeachersReg from './Components/Teachers_Regform/Teachers_Regform';
import AyalaReg from './Components/AyalaReg/AyalaReg';
function App() {
  return (
    <div className="App">

      <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<DashboardJs/>} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/PickupDash" element={<PickupDashboard />} />
        <Route path="/wsbcreg" element={<WsbcReg />} />
        <Route path="/teachersreg" element={<TeachersReg />} />
        <Route path="/ayalareg" element={<AyalaReg />} />
        <Route path="/wcbareg" element={<WcbaReg />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
