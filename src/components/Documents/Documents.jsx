import "./Documents.css";
import { useNavigate } from "react-router-dom";
import { FiChevronRight } from "react-icons/fi";
import { DOC_TILES } from "../../data/content";

export default function DocumentsPreview({ showAllLink = true }) {
  const navigate = useNavigate();

  return (
    <section className="docs-preview">
      <h2>Мои документы</h2>
      <div className="docs-preview-row">
        {DOC_TILES.map((tile) => (
          <button
            key={tile.id}
            type="button"
            className="doc-tile"
            onClick={() => navigate(tile.route)}
            aria-label={tile.title}
          >
            <img src={tile.image} alt={tile.title} draggable={false} />
          </button>
        ))}
      </div>

      {showAllLink && (
        <button
          type="button"
          className="docs-all-link"
          onClick={() => navigate("/your-documents")}
        >
          Все документы <FiChevronRight />
        </button>
      )}
    </section>
  );
}
