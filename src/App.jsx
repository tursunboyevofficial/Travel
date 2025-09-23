import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./Layout/MainLayout";
import HomePage from "./Pages/HomePage/HomePage";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
