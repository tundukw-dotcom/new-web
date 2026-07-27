import driverBg from "../../assets/cards/driver-bg.png";
import { useAuth } from "../../context/AuthContext";
import "./cards.css";

function Field({ label, value }) {
  return (
    <div className="c-field">
      <span className="c-label">{label}</span>
      <strong className="c-value">{value}</strong>
    </div>
  );
}

function CatIcon({ type }) {
  const common = { viewBox: "0 0 24 14", fill: "currentColor", "aria-hidden": true };
  if (type === "moto") {
    return (
      <svg {...common}>
        <circle cx="5" cy="10.2" r="3" />
        <circle cx="19" cy="10.2" r="3" />
        <path d="M8 10h5.5l1.8-4.5H9.5L8 10zm7-4.5 2.6.3 1.3 2.8h-2.3L15 5.5zM7.2 5.6h3.2L9 9.4H6.4l.8-3.8z" />
      </svg>
    );
  }
  if (type === "car") {
    return (
      <svg {...common}>
        <path d="M3.8 8.4 5.8 4.5c.3-.6.9-1 1.6-1h9.2c.7 0 1.3.4 1.6 1l2 3.9h.6c.6 0 1 .5 1 1.1v1.6c0 .4-.3.7-.7.7h-1.2a2.35 2.35 0 0 1-4.5 0H8.2a2.35 2.35 0 0 1-4.5 0H2.6c-.4 0-.7-.3-.7-.7V9.5c0-.6.5-1.1 1.1-1.1h.8z" />
      </svg>
    );
  }
  if (type === "truck") {
    return (
      <svg {...common}>
        <path d="M1.2 3h11.5v7.4H1.2V3zm11.5 1.9h5.6L21 9.5v2H18.8a2.1 2.1 0 0 1-4.1 0h-2V4.9z" />
        <circle cx="5" cy="11.4" r="1.6" />
        <circle cx="17.5" cy="11.4" r="1.6" />
      </svg>
    );
  }
  if (type === "bus") {
    return (
      <svg {...common}>
        <path d="M2.8 2.5h18.4v7.8H2.8V2.5zm1.5 1.5h4.4v2.3H4.3V4zm5.6 0h4.6v2.3h-4.6V4zm5.8 0H19v2.3h-3.3V4z" />
        <circle cx="6.2" cy="11.5" r="1.55" />
        <circle cx="17.8" cy="11.5" r="1.55" />
      </svg>
    );
  }
  return (
    <svg {...common}>
      <path d="M3.5 8.6h3.4V4h2.3l1.5 2.3h5V4.6h2.5v4H20.5v2.2H3.5V8.6z" />
      <circle cx="7" cy="11.5" r="1.45" />
      <circle cx="17" cy="11.5" r="1.45" />
    </svg>
  );
}

function catType(code) {
  if (code === "A" || code === "A1") return "moto";
  if (code === "B" || code === "B1" || code === "BE") return "car";
  if (code.startsWith("C")) return "truck";
  if (code.startsWith("D")) return "bus";
  return "tractor";
}

export function DriverFront() {
  const { user, driver } = useAuth();
  if (!user || !driver) return null;

  return (
    <article className="card-sheet card-sheet--driver">
      <img src={driverBg} alt="" className="card-sheet-bg card-sheet-bg--driver" />
      <div className="card-sheet-content card-sheet-content--driver-front">
        {user.photoUrl ? (
          <img className="dl-photo" src={user.photoUrl} alt="" />
        ) : (
          <div className="dl-photo dl-photo--ph">ФОТО</div>
        )}

        <div className="dl-sign">
          <span className="c-label">Колу / Подпись</span>
          <div className="dl-sign-text">{user.signatureText}</div>
        </div>

        <div className="dl-fields">
          <Field label="Аты / Имя" value={user.firstName} />
          <Field label="Фамилиясы / Фамилия" value={user.lastName} />
          <Field label="Атасынын аты / Отчество" value={user.patronymic} />
          <Field label="Берилген күнү / Дата выдачи" value={driver.issueDate} />
          <Field label="Берген мекеме / Орган выдачи" value={driver.authority} />
          <Field label="Колдонуу мөөнөтү / Срок действия" value={driver.expiryDate} />
          <Field label="Статусу / Статус" value={driver.status} />
          <Field label="Күбөлүктүн № / № Удостоверения" value={driver.number} />
          <Field
            label="Жеке номери / Персональный номер"
            value={user.personalNumber}
          />
        </div>

        <span className="c-page-num c-page-num--dl">1</span>
      </div>
    </article>
  );
}

export function DriverBack() {
  const { driver } = useAuth();
  if (!driver) return null;

  return (
    <article className="card-sheet card-sheet--driver">
      <img src={driverBg} alt="" className="card-sheet-bg card-sheet-bg--driver" />
      <div className="card-sheet-content card-sheet-content--driver-back">
        <table className="driver-table">
          <colgroup>
            <col className="col-cat" />
            <col className="col-date" />
            <col className="col-date" />
          </colgroup>
          <thead>
            <tr>
              <th>Категория</th>
              <th>
                Берилген күнү /
                <br />
                Дата выдачи
              </th>
              <th>
                Аяктоо датасы /
                <br />
                Дата истечения
              </th>
            </tr>
          </thead>
          <tbody>
            {driver.categories.map((row) => (
              <tr key={row.code}>
                <td>
                  <span className="driver-cat">
                    <b>{row.code}</b>
                    <span className="driver-cat-icon">
                      <CatIcon type={catType(row.code)} />
                    </span>
                  </span>
                </td>
                <td>{row.issue}</td>
                <td>{row.expiry}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <span className="c-page-num c-page-num--dl">2</span>
      </div>
    </article>
  );
}
