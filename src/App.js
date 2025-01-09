import logo from './logo.svg';
import './App.css';
import Login from './Components/Login/Login';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DashboardJs from './Components/Dashboard/Dashboard';
import SignUp from './Components/Login/SignUp/SignUp';
import Dashboard from './Components/Dashboard/Dashboard';
import PickupDashboard from './Components/PickupGames/PickupDashboard';
import WsbcReg from './Components/PickupGames/WSBC_REGFORM/Wsbc_Form';
import WcbaReg from './Components/PickupGames/WCBA_REGFORM/Wcba_form';
import TeachersReg from './Components/PickupGames/Teachers_Regform/Teachers_Regform';
import AyalaReg from './Components/PickupGames/AyalaReg/AyalaReg';
import TermsAndConditions from './Components/Terms And Condition Page/Terms';
import TrainDash from './Components/TrainingCamp/TrainingDashboard/TrainDash';
import BucalCamp from './Components/TrainingCamp/TrainingDashboard/BucalCamp/BucalCamp';
import LeagueDashboard from './Components/Basketdayo_League/League_Dashboard/LeagueDash';
import WcbaLeague from './Components/Basketdayo_League/Wcba_League/WcbaLeague';
import RegisteredPlayersWcba from './Components/Basketdayo_League/Wcba_League/RegisteredPlayers';
import ForgotPassword from './Components/TrainingCamp/TrainingDashboard/PasswordReset/Passwordreset';

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
        <Route path="/terms" element={<TermsAndConditions />} />
        <Route path="/traindash" element={<TrainDash />} />
        <Route path="/bucalcamp" element={<BucalCamp />} />
        <Route path="/leaguedash" element={<LeagueDashboard />} />
        <Route path="/wcbaleague" element={<WcbaLeague />} />
        <Route path="/passwordreset" element={<ForgotPassword />} />
        <Route path="/registeredplayersleaguewcba" element={<RegisteredPlayersWcba />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
