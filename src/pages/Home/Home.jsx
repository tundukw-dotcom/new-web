import "./Home.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FiBell,
  FiChevronRight,
  FiHelpCircle,
  FiPhone,
  FiSearch,
} from "react-icons/fi";
import { BsQrCodeScan } from "react-icons/bs";
import {
  MdOutlineFavorite,
  MdOutlineDescription,
  MdOutlineFamilyRestroom,
  MdOutlineMap,
  MdOutlineHome,
  MdOutlineDirectionsCar,
} from "react-icons/md";
import { PiSteeringWheel } from "react-icons/pi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import {
  BANNERS,
  HOME_SERVICES,
  LIFE_SITUATIONS,
  HELP_ITEMS,
} from "../../data/content";
import DocumentsPreview from "../../components/Documents/Documents";
import { useAuth } from "../../context/AuthContext";

const serviceIcons = {
  heart: MdOutlineFavorite,
  doc: MdOutlineDescription,
  wheel: PiSteeringWheel,
  family: MdOutlineFamilyRestroom,
};

const lifeIcons = {
  map: MdOutlineMap,
  pattern: MdOutlineDescription,
  house: MdOutlineHome,
  car: MdOutlineDirectionsCar,
};

export default function Home() {
  const navigate = useNavigate();
  const [tab, setTab] = useState("rec");
  const { user } = useAuth();

  return (
    <div className="home">
      <header className="home-top">
        <button type="button" className="home-user" onClick={() => navigate("/profile")}>
          {user?.shortName}
          <FiChevronRight />
        </button>
        <div className="home-tools">
          <button type="button" aria-label="Уведомления">
            <FiBell />
          </button>
          <button type="button" aria-label="Помощь">
            <FiHelpCircle />
          </button>
        </div>
      </header>

      <Swiper
        className="home-banners"
        modules={[Autoplay]}
        centeredSlides
        slidesPerView={2.15}
        spaceBetween={12}
        loop
        autoplay={{ delay: 4200, disableOnInteraction: false }}
      >
        {BANNERS.map((b) => (
          <SwiperSlide key={b.id}>
            <button type="button" className="home-banner">
              <img src={b.image} alt={b.title} draggable={false} />
            </button>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="home-search">
        <FiSearch />
        <input
          placeholder="Поиск услуг"
          readOnly
          onClick={() => navigate("/services")}
        />
        <BsQrCodeScan />
      </div>

      <section className="home-section">
        <DocumentsPreview />
      </section>

      <section className="home-section">
        <div className="home-section-head">
          <h2>
            Жизненные ситуации
            <i className="home-info">?</i>
          </h2>
        </div>
        <div className="home-life">
          {LIFE_SITUATIONS.map((item) => {
            const Icon = lifeIcons[item.icon] || MdOutlineHome;
            return (
              <button
                type="button"
                key={item.id}
                className="home-life-card"
                onClick={() => navigate("/services")}
              >
                <span className="home-life-ico">
                  <Icon />
                </span>
                <strong>{item.title}</strong>
                <small>{item.count} услуг</small>
              </button>
            );
          })}
        </div>
      </section>

      <section className="home-section">
        <div className="home-section-head">
          <h2>Услуги</h2>
          <button type="button" onClick={() => navigate("/services")}>
            Все <FiChevronRight />
          </button>
        </div>
        <div className="home-svc-card">
          <div className="home-tabs">
            <button
              type="button"
              className={tab === "rec" ? "active" : ""}
              onClick={() => setTab("rec")}
            >
              Рекомендуемые
            </button>
            <button
              type="button"
              className={tab === "new" ? "active" : ""}
              onClick={() => setTab("new")}
            >
              Новинки
            </button>
          </div>
          <div className="home-svc-list">
            {(tab === "rec" ? HOME_SERVICES : HOME_SERVICES.slice().reverse()).map((s) => {
              const Icon = serviceIcons[s.icon] || MdOutlineDescription;
              return (
                <button type="button" key={s.id} className="home-svc-item">
                  <span>
                    <Icon />
                  </span>
                  <strong>{s.title}</strong>
                  <FiChevronRight />
                </button>
              );
            })}
          </div>
          <div className="home-dots">
            <i className="on" />
            <i />
          </div>
        </div>
      </section>

      <section className="home-section">
        <div className="home-section-head">
          <h2>Возникли вопросы?</h2>
          <button type="button">
            Все <FiChevronRight />
          </button>
        </div>
        <div className="home-help-card">
          {HELP_ITEMS.map((item) => (
            <button type="button" key={item.id}>
              <span>{item.icon === "help" ? <FiHelpCircle /> : <FiPhone />}</span>
              {item.title}
              <FiChevronRight />
            </button>
          ))}
        </div>
      </section>
    </div>
  );
}
