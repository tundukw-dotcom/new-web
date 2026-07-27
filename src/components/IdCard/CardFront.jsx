import "./idcard.css";
import frontBg from "../../assets/id-front.png";

export default function CardFront({ user }) {
  if (!user) return null;

  return (
    <div className="id-card">
      <img src={frontBg} alt="" className="card-bg" />

      <img src={user.photo} alt="" className="card-photo" />

      <div className="card-name">
        <span className="card-label">Аты / Имя / Name</span>
        <span className="card-value">
          {(user.firstNameKg || "").toUpperCase()} / {(user.firstNameEn || "").toUpperCase()}
        </span>
      </div>

      <div className="card-surname">
        <span className="card-label">Фамилия / Surname</span>
        <span className="card-value">
          {(user.lastNameKg || "").toUpperCase()} / {(user.lastNameEn || "").toUpperCase()}
        </span>
      </div>

      <div className="card-patronymic">
        <span className="card-label">Отчество / Patronymic</span>
        <span className="card-value">{(user.patronymicKg || "").toUpperCase()}</span>
      </div>

      <div className="card-sex">
        <span className="card-label">Пол / Sex</span>
        <span className="card-value">{user.sex}</span>
      </div>

      <div className="card-country">
        <span className="card-label">Гражданство / Citizenship</span>
        <span className="card-value">{user.citizenship}</span>
      </div>

      <div className="card-nationality">
        <span className="card-label">Национальность / Nationality</span>
        <span className="card-value">{(user.nationality || "").toUpperCase()}</span>
      </div>

      <div className="card-birth">
        <span className="card-label">Дата рождения / Date of birth</span>
        <span className="card-value">{user.birthDate}</span>
      </div>

      {user.signature && (
        <img src={user.signature} alt="" className="card-signature" />
      )}
    </div>
  );
}
