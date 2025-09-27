import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './i18n';
import MainLayout from "./Layout/MainLayout";
import HomePage from "./Pages/HomePage/HomePage";
import Tours from "./Pages/Tours/Tours";
import AboutPage from "./Pages/AboutPage/AboutPage";
import Contact from "./Pages/Contact/Contact";
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
      </Routes>
    </Router>
  );
}

export default App;
