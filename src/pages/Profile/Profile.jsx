import "./Profile.css";
import { useNavigate } from "react-router-dom";
import { FiChevronRight } from "react-icons/fi";
import {
  FiHelpCircle,
  FiPhone,
  FiMessageCircle,
  FiShield,
  FiCloud,
  FiSmile,
  FiGlobe,
  FiInfo,
  FiBook,
} from "react-icons/fi";
import { MdOutlinePalette } from "react-icons/md";
import { PROFILE_GROUPS, APP } from "../../data/content";
import { useAuth } from "../../context/AuthContext";

const icons = {
  help: FiHelpCircle,
  phone: FiPhone,
  chat: FiMessageCircle,
  shield: FiShield,
  cloud: FiCloud,
  face: FiSmile,
  globe: FiGlobe,
  palette: MdOutlinePalette,
  info: FiInfo,
  book: FiBook,
};

export default function Profile() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  if (!user) return null;

  return (
    <div className="profile-page">
      <div className="profile-hero">
        {user.photoUrl ? (
          <img src={user.photoUrl} alt="" />
        ) : (
          <div className="profile-avatar-ph">
            {user.firstName?.[0]}
            {user.lastName?.[0]}
          </div>
        )}
        <h1>{user.fullName}</h1>
        <p className="profile-ver">v{APP.version}</p>
      </div>

      {PROFILE_GROUPS.map((group, gi) => (
        <div className="profile-card" key={gi}>
          {group.map((item) => {
            const Icon = icons[item.icon] || FiInfo;
            return (
              <button type="button" key={item.id} className="profile-row">
                <span className="profile-ico">
                  <Icon />
                </span>
                <strong>{item.title}</strong>
                <FiChevronRight />
              </button>
            );
          })}
        </div>
      ))}

      <button
        type="button"
        className="profile-logout"
        onClick={() => {
          logout();
          navigate("/");
        }}
      >
        Выйти из аккаунта
      </button>
    </div>
  );
}
