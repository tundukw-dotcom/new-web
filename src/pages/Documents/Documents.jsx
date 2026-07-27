import "./DocumentsPage.css";
import { FiChevronRight } from "react-icons/fi";
import DocumentsPreview from "../../components/Documents/Documents";
import { HEALTH_TILE, EMPTY_STATES } from "../../data/content";
import "../../components/Documents/Documents.css";

export default function DocumentsPage() {
  return (
    <div className="docs-page">
      <DocumentsPreview />

      <section className="docs-block">
        <h2>Здоровье</h2>
        <button
          type="button"
          className="health-tile"
          style={{
            background: `linear-gradient(120deg, ${HEALTH_TILE.colorFrom}, ${HEALTH_TILE.colorTo})`,
          }}
        >
          <span>{HEALTH_TILE.title}</span>
          <div className="health-shield">+</div>
        </button>
      </section>

      <section className="docs-block">
        <div className="docs-head">
          <h2>История услуг</h2>
          <button type="button">
            Все <FiChevronRight />
          </button>
        </div>
        <div className="docs-empty">
          <div className="docs-empty-ico folder" />
          <strong>{EMPTY_STATES.services.title}</strong>
          <p>{EMPTY_STATES.services.text}</p>
        </div>
      </section>

      <section className="docs-block">
        <div className="docs-head">
          <h2>История оплат</h2>
          <button type="button">
            Все <FiChevronRight />
          </button>
        </div>
        <div className="docs-empty">
          <div className="docs-empty-ico wallet" />
          <strong>{EMPTY_STATES.payments.title}</strong>
          <p>{EMPTY_STATES.payments.text}</p>
        </div>
      </section>
    </div>
  );
}
