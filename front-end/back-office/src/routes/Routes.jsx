import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminLogin from '../pages/AdminLogin/index';
import HomePage from '../pages/AdminDashboard/Home/index';
import { useCookies } from 'react-cookie';
import Navigation from './Navigation';
import Home from '../pages/AdminDashboard/Home/index';
import Managers from '../pages/AdminDashboard/manager';
import Users from '../pages/AdminDashboard/users';
// import Activity from '../pages/AdminDashboard/vaccinationList';
//app routes
const Routers = () => {
  const [cookies, setCookie, removeCookie] = useCookies();
  const role = cookies.role;
  return (
    <BrowserRouter>
      {role === "admin" || role === "manager" ? <Navigation /> : null}
        <div className={role === "admin" || role === "manager"  ? 'pl-[18em]  pr-[1.5em]' : ''}>
          <Routes>
            <Route path="/" element={<AdminLogin />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/Users" element={<Users />} />
            <Route path="/Managers" element={<Managers />} />
          </Routes>
        </div>
    </BrowserRouter>
  );
};

export default Routers;