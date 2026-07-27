import "./YourDocuments.css";
import { useNavigate } from "react-router-dom";
import { FiChevronLeft, FiChevronRight, FiRefreshCw } from "react-icons/fi";
import { HiOutlineShieldExclamation } from "react-icons/hi2";
import { MdOutlineBadge, MdOutlineSchool } from "react-icons/md";
import { PiSteeringWheelFill } from "react-icons/pi";
import { ALL_DOCUMENTS } from "../../data/content";

const icons = {
  id: MdOutlineBadge,
  wheel: PiSteeringWheelFill,
  diploma: MdOutlineSchool,
};

export default function YourDocuments() {
  const navigate = useNavigate();

  return (
    <div className="your-docs page--no-nav">
      <header className="your-docs-header">
        <button type="button" onClick={() => navigate(-1)} aria-label="Назад">
          <FiChevronLeft />
        </button>
        <h1>Ваши документы</h1>
        <button type="button" aria-label="Обновить">
          <FiRefreshCw strokeWidth={2.2} />
        </button>
      </header>

      <div className="your-docs-body">
        <div className="your-docs-hint">
          <HiOutlineShieldExclamation className="your-docs-hint-ico" />
          <p>
            Если некоторые документы не отображаются, нажмите «Обновить», чтобы
            загрузить актуальный список.
          </p>
        </div>

        <div className="your-docs-card">
          {ALL_DOCUMENTS.map((doc) => {
            const Icon = icons[doc.icon] || MdOutlineBadge;
            return (
              <button
                key={doc.id}
                type="button"
                className="your-docs-row"
                onClick={() => doc.route && navigate(doc.route)}
              >
                <span className="your-docs-ico" aria-hidden>
                  <Icon />
                </span>
                <span className="your-docs-title">{doc.title}</span>
                <FiChevronRight className="your-docs-chevron" />
              </button>
            );
          })}
        </div>
      </div>

      <div className="your-docs-footer">
        <button type="button" className="your-docs-refresh">
          Обновить
        </button>
      </div>
    </div>
  );
}
