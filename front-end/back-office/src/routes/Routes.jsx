import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminLogin from '../pages/AdminLogin/index';
import HomePage from '../pages/AdminDashboard/index';
import { useCookies } from 'react-cookie';
import Navigation from './Navigation'

//app routes
const Routers = () => {
  const [cookies, setCookie, removeCookie] = useCookies();
  const role = cookies.role;
  return (
    <BrowserRouter>
      {role === "admin" || role === "manager" ? <Navigation /> : null}
        <div className={role === "admin" || role === "manager"  ? 'pl-[18em]  pr-[1.5em]' : ''}>
          <Routes>
            <Route path="/AdminLogin" element={<AdminLogin />} />
            <Route path="/" element={<HomePage />} />
          </Routes>
        </div>
    </BrowserRouter>
  );
};

export default Routers;