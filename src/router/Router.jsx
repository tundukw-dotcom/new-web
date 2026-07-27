import { Routes, Route } from "react-router-dom";

import Login from "../pages/Login/Login";
import Home from "../pages/Home/Home";
import Documents from "../pages/Documents/Documents";
import Services from "../pages/Services/Services";
import Profile from "../pages/Profile/Profile";
import Layout from "../layouts/Layout";
import IdCard from "../pages/IdCard/IdCard.jsx";
import DriverLicense from "../pages/DriverLicense/DriverLicense.jsx";
import YourDocuments from "../pages/YourDocuments/YourDocuments.jsx";
import RequireAuth from "../components/RequireAuth";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route
        element={
          <RequireAuth>
            <Layout />
          </RequireAuth>
        }
      >
        <Route path="/home" element={<Home />} />
        <Route path="/documents" element={<Documents />} />
        <Route path="/services" element={<Services />} />
        <Route path="/profile" element={<Profile />} />
      </Route>
      <Route
        path="/your-documents"
        element={
          <RequireAuth>
            <YourDocuments />
          </RequireAuth>
        }
      />
      <Route
        path="/id-card"
        element={
          <RequireAuth>
            <IdCard />
          </RequireAuth>
        }
      />
      <Route
        path="/driver-license"
        element={
          <RequireAuth>
            <DriverLicense />
          </RequireAuth>
        }
      />
    </Routes>
  );
}
