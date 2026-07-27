import { Outlet } from "react-router-dom";
import BottomNavigation from "../components/BottomNavigation/BottomNavigation";
import "./Layout.css";

export default function Layout() {
  return (
    <div className="layout">
      <div className="layout-body">
        <Outlet />
      </div>
      <BottomNavigation />
    </div>
  );
}
