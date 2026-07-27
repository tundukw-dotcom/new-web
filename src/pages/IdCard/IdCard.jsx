import { useNavigate } from "react-router-dom";
import { FiChevronLeft } from "react-icons/fi";
import IdCardStack from "./IdCardStack";
import QrSheet from "../../components/QrSheet/QrSheet";
import "./IdCard.css";

export default function IdCard() {
  const navigate = useNavigate();

  return (
    <div className="doc-view page--no-nav">
      <header className="doc-view-header">
        <button type="button" onClick={() => navigate(-1)} aria-label="Назад">
          <FiChevronLeft />
        </button>
        <h1>Паспорт</h1>
        <div />
      </header>

      <IdCardStack />
      <QrSheet />
    </div>
  );
}
