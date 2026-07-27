import "./idcard.css";
import backBg from "../../assets/id-front.png";

export default function CardBack({ user }) {
  if (!user) return null;

  return (
    <div className="back-card">
      <img src={backBg} alt="" className="back-bg" />

      <div className="field authority">
        <span className="label">Берген мекеме / Орган выдачи / Authority</span>
        <h3>{user.authority}</h3>
      </div>

      <div className="field issueDate">
        <span className="label">Берилген күнү / Дата выдачи / Date of issue</span>
        <h3>{user.issueDate}</h3>
      </div>

      <div className="field personalNumber">
        <span className="label">Жеке номери / Персональный номер</span>
        <span className="label">/ Personal number</span>
        <h3>{user.personalNumber}</h3>
      </div>

      <div className="field documentNumber">
        <span className="label">Документтин № / № Документа</span>
        <span className="label">/ Document №</span>
        <h3>{user.documentNumber}</h3>
      </div>

      <div className="field expiryDate">
        <span className="label">Колдонуу мөөнөтү / Срок действия</span>
        <span className="label">/ Date of expiry</span>
        <h3>{user.expiryDate}</h3>
      </div>

      <div className="field address">
        <span className="label">Катталган жери / Адрес прописки / Address</span>
        <p>{user.registrationAddress}</p>
      </div>

      <div className="page-number">2</div>
    </div>
  );
}
