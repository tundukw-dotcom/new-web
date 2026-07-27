import idBg from "../../assets/cards/id-bg.png";
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

export function IdCardFront() {
  const { user } = useAuth();
  if (!user) return null;

  return (
    <article className="card-sheet card-sheet--id">
      <img src={idBg} alt="" className="card-sheet-bg" />
      <div className="card-sheet-content card-sheet-content--id-front">
        {user.photoUrl ? (
          <img className="id-photo" src={user.photoUrl} alt="" />
        ) : (
          <div className="id-photo id-photo--ph">ФОТО</div>
        )}

        <div className="id-sign">
          <span className="c-label">Колу / Подпись / Signature</span>
          <div className="id-sign-text">{user.signatureText}</div>
        </div>

        <div className="id-fields">
          <Field
            label="Аты / Имя / Name"
            value={`${user.firstNameKg} / ${user.firstNameEn}`}
          />
          <Field
            label="Фамилиясы / Фамилия / Surname"
            value={`${user.lastNameKg} / ${user.lastNameEn}`}
          />
          <Field
            label="Атасынын аты / Отчество / Patronymic"
            value={user.patronymicKg}
          />
          <Field label="Жынысы / Пол / Sex" value={user.sex} />
          <Field
            label="Жарандыгы / Гражданство / Citizenship"
            value={user.citizenship}
          />
          <Field
            label="Улуту / Национальность / Nationality"
            value={user.nationality}
          />
          <Field
            label="Туулган күнү / Дата рождения / Date of birth"
            value={user.birthDate}
          />
        </div>

        <span className="c-page-num">1</span>
      </div>
    </article>
  );
}

export function IdCardBack() {
  const { user, idCard } = useAuth();
  if (!user || !idCard) return null;

  return (
    <article className="card-sheet card-sheet--id">
      <img src={idBg} alt="" className="card-sheet-bg" />
      <div className="card-sheet-content card-sheet-content--id-back">
        <div className="id-back-fields">
          <Field label="Берген мекеме / Орган выдачи / Authority" value={idCard.authority} />
          <Field label="Берилген күнү / Дата выдачи / Date of issue" value={idCard.issueDate} />
          <Field
            label="Жеке номуру / Персональный номер / Personal number"
            value={user.personalNumber}
          />
          <Field label="Документтин № / № Документа / Document №" value={idCard.documentNumber} />
          <Field
            label="Колдонуу мөөнөтү / Срок действия / Date of expiry"
            value={idCard.expiryDate}
          />
          <Field
            label="Катталган жери / Адрес прописки / Address"
            value={idCard.address}
          />
        </div>
        <span className="c-page-num">2</span>
      </div>
    </article>
  );
}
