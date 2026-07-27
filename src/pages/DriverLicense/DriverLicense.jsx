import { useNavigate } from "react-router-dom";
import { FiChevronLeft } from "react-icons/fi";
import { DriverFront, DriverBack } from "../../components/Cards/DriverBlocks";
import QrSheet from "../../components/QrSheet/QrSheet";
import { useAuth } from "../../context/AuthContext";
import IdCardStack from "../IdCard/IdCardStack";
import "../IdCard/IdCard.css";

export default function DriverLicense() {
  const navigate = useNavigate();
  const { driver } = useAuth();

  return (
    <div className="doc-view page--no-nav">
      <header className="doc-view-header">
        <button type="button" onClick={() => navigate(-1)} aria-label="Назад">
          <FiChevronLeft />
        </button>
        <h1>{driver?.title || "Водительское удостоверение"}</h1>
        <div />
      </header>

      <IdCardStack front={DriverFront} back={DriverBack} />

      <QrSheet />
    </div>
  );
}
