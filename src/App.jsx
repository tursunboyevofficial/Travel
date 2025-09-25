import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./Layout/MainLayout";
import HomePage from "./Pages/HomePage/HomePage";
import Tours from "./Pages/Tours/Tours";
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
      </Routes>
    </Router>
  );
}

export default App;
