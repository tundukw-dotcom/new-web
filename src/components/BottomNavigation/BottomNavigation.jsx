import "./BottomNavigation.css";
import { NavLink } from "react-router-dom";
import {
  HiDocumentText,
  HiOutlineDocumentText,
  HiUserCircle,
  HiOutlineUserCircle,
} from "react-icons/hi2";
import { BsGrid, BsGridFill } from "react-icons/bs";
import { HomeIcon } from "./HomeIcon";

const items = [
  {
    to: "/home",
    title: "Главная",
    icon: HomeIcon,
    active: (props) => <HomeIcon filled {...props} />,
  },
  {
    to: "/documents",
    title: "Документы",
    icon: HiOutlineDocumentText,
    active: HiDocumentText,
  },
  {
    to: "/services",
    title: "Услуги",
    icon: BsGrid,
    active: BsGridFill,
  },
  {
    to: "/profile",
    title: "Профиль",
    icon: HiOutlineUserCircle,
    active: HiUserCircle,
  },
];

export default function BottomNavigation() {
  return (
    <nav className="bottomNav" aria-label="Основная навигация">
      {items.map((item) => {
        const Icon = item.icon;
        const ActiveIcon = item.active;

        return (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              isActive ? "navItem active" : "navItem"
            }
          >
            {({ isActive }) => (
              <>
                <span className="navIcon" aria-hidden>
                  {isActive ? <ActiveIcon /> : <Icon />}
                </span>
                <span className="navLabel">{item.title}</span>
              </>
            )}
          </NavLink>
        );
      })}
    </nav>
  );
}
