import "./Services.css";
import { useState } from "react";
import { FiChevronRight, FiSearch } from "react-icons/fi";
import {
  MdOutlineFamilyRestroom,
  MdOutlineLocationOn,
  MdOutlineFavoriteBorder,
  MdOutlineHome,
  MdOutlineFolder,
  MdOutlineAccountBalanceWallet,
  MdOutlineElderly,
} from "react-icons/md";
import { PiSteeringWheel, PiHandHeart } from "react-icons/pi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { SERVICE_CATEGORIES, LIFE_SITUATIONS } from "../../data/content";

const icons = {
  family: MdOutlineFamilyRestroom,
  pin: MdOutlineLocationOn,
  health: MdOutlineFavoriteBorder,
  house: MdOutlineHome,
  wheel: PiSteeringWheel,
  folder: MdOutlineFolder,
  elder: MdOutlineElderly,
  "heart-hand": PiHandHeart,
  wallet: MdOutlineAccountBalanceWallet,
  map: MdOutlineLocationOn,
  pattern: MdOutlineFolder,
  car: PiSteeringWheel,
};

export default function Services() {
  const [query, setQuery] = useState("");

  const cats = SERVICE_CATEGORIES.filter((c) =>
    c.title.toLowerCase().includes(query.trim().toLowerCase())
  );

  return (
    <div className="svc-page">
      <div className="svc-search">
        <FiSearch />
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Поиск услуг"
        />
      </div>

      <p className="svc-label">Категории</p>

      <Swiper className="svc-cats" modules={[Pagination]} pagination={{ clickable: true }}>
        <SwiperSlide>
          <div className="svc-grid">
            {cats.map((c) => {
              const Icon = icons[c.icon] || MdOutlineFolder;
              return (
                <button type="button" key={c.id} className="svc-cat">
                  <span>
                    <Icon />
                  </span>
                  <small>{c.title}</small>
                </button>
              );
            })}
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="svc-grid">
            {cats.slice(0, 6).map((c) => {
              const Icon = icons[c.icon] || MdOutlineFolder;
              return (
                <button type="button" key={`p2-${c.id}`} className="svc-cat">
                  <span>
                    <Icon />
                  </span>
                  <small>{c.title}</small>
                </button>
              );
            })}
          </div>
        </SwiperSlide>
      </Swiper>

      <div className="svc-head">
        <h2>Жизненные ситуации</h2>
        <button type="button">
          Все <FiChevronRight />
        </button>
      </div>

      <div className="svc-life">
        {LIFE_SITUATIONS.map((item) => {
          const Icon = icons[item.icon] || MdOutlineHome;
          return (
            <button type="button" key={item.id} className="svc-life-card">
              <span>
                <Icon />
              </span>
              <strong>{item.title}</strong>
              <small>{item.count} услуг</small>
            </button>
          );
        })}
      </div>
    </div>
  );
}
