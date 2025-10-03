import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './i18n';
import MainLayout from "./Layout/MainLayout";
import HomePage from "./Pages/HomePage/HomePage";
import Tours from "./Pages/Tours/Tours";
import AboutPage from "./Pages/AboutPage/AboutPage";
import Contact from "./Pages/Contact/Contact";
import Login from "./Pages/Auth/Login/Login";
import Signup from "./Pages/Auth/Signup/Signup";
import ForgotPassword from "./Pages/Auth/ForgotPassword/ForgotPassword";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
        </Route>
        <Route path="/tours" element={<MainLayout />}>
          <Route index element={<Tours />} />
        </Route>
        <Route path="/about" element={<MainLayout />}>
          <Route index element={<AboutPage />} />
        </Route>
        <Route path="/contact" element={<MainLayout />}>
          <Route index element={<Contact />} />
        </Route>
        <Route path="/signup" element={<MainLayout />}>
          <Route index element={<Signup />} />
        </Route>
        <Route path="/login" element={<MainLayout />}>
          <Route index element={<Login />} />
        </Route>
        <Route path="/forgot-password" element={<MainLayout />}>
          <Route index element={<ForgotPassword />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
