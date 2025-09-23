import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

export default function MainLayout() {
  return (
    <div >
      <Header />
      <main>
        <Outlet /> {/* Sahifa shu joyda render bo‘ladi */}
      </main>
      <Footer />
    </div>
  );
}
