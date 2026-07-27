/**
 * ============================================================
 *  TUNDUK — общие данные UI (баннеры, услуги, настройки)
 *  Профили пользователей: src/data/users.json
 * ============================================================
 */

export const APP = {
  name: "Tunduk",
  version: "3.2.1",
};

/** Плитки документов на главной / во вкладке Документы */
export const DOC_TILES = [
  {
    id: "id-card",
    title: "ID-карта",
    route: "/id-card",
    image: "/docs/id-card.png",
  },
  {
    id: "driver",
    title: "Водительское удостоверение",
    route: "/driver-license",
    image: "/docs/driver-license.png",
  },
];

/** Полный список «Ваши документы» */
export const ALL_DOCUMENTS = [
  {
    id: "id-card",
    title: "Идентификационная карта",
    icon: "id",
    route: "/id-card",
  },
  {
    id: "driver",
    title: "Водительское удостоверение",
    icon: "wheel",
    route: "/driver-license",
  },
  {
    id: "diploma",
    title: "Аттестат о среднем общем образовании",
    icon: "diploma",
    route: null,
  },
];

export const HEALTH_TILE = {
  title: "Цифровой профиль здоровья",
  colorFrom: "#5aa8ea",
  colorTo: "#2f78d4",
};

/** Баннеры на главной */
export const BANNERS = [
  {
    id: 1,
    title: "Обращение к президенту",
    image: "/banners/president.png",
  },
  {
    id: 2,
    title: "Сообщить о коррупции",
    image: "/banners/corruption.png",
  },
  {
    id: 3,
    title: "Остерегайтесь мошенников",
    image: "/banners/scammers.png",
  },
  {
    id: 4,
    title: "Замена водительского удостоверения онлайн",
    image: "/banners/driver-license.png",
  },
  {
    id: 5,
    title: "Замена загранпаспорта онлайн",
    image: "/banners/passport.png",
  },
  {
    id: 6,
    title: "Самозапрет на кредит",
    image: "/banners/credit-ban.png",
  },
  {
    id: 7,
    title: "Справка о наличии или отсутствии судимости",
    image: "/banners/criminal-record.png",
  },
];

/** Рекомендуемые услуги на главной */
export const HOME_SERVICES = [
  { id: 1, title: "Бала ырысы", icon: "heart" },
  { id: 2, title: "Справка о несудимости", icon: "doc" },
  { id: 3, title: "Замена водительского удостоверения", icon: "wheel" },
  { id: 4, title: "Информация о составе семьи", icon: "family" },
];

export const LIFE_SITUATIONS = [
  { id: "reg", title: "Смена прописки", count: 4, icon: "map" },
  { id: "con", title: "Услуги ЦОН", count: 14, icon: "pattern" },
  { id: "home", title: "Покупка жилья", count: 12, icon: "house" },
  { id: "car", title: "Покупка авто", count: 5, icon: "car" },
];

export const SERVICE_CATEGORIES = [
  { id: "family", title: "Семья", icon: "family" },
  { id: "reg", title: "Прописка", icon: "pin" },
  { id: "health", title: "Здоровье", icon: "health" },
  { id: "realty", title: "Недвижимость", icon: "house" },
  { id: "auto", title: "Авто", icon: "wheel" },
  { id: "docs", title: "Документы", icon: "folder" },
  { id: "pension", title: "Пенсия", icon: "elder" },
  { id: "social", title: "Соцвыплаты", icon: "heart-hand" },
  { id: "work", title: "Работа", icon: "wallet" },
];

export const PROFILE_GROUPS = [
  [
    { id: "faq", title: "Частые вопросы", icon: "help" },
    { id: "support", title: "Служба поддержки", icon: "phone" },
    { id: "appeals", title: "Электронные обращения", icon: "chat" },
  ],
  [
    { id: "access", title: "Доступ к моим данным", icon: "shield" },
    { id: "sign", title: "Моя электронная подпись", icon: "cloud" },
    { id: "bio", title: "Отпечаток и Face ID", icon: "face" },
  ],
  [
    { id: "lang", title: "Язык", icon: "globe" },
    { id: "theme", title: "Оформление", icon: "palette" },
    { id: "about", title: "О приложении", icon: "info" },
  ],
  [{ id: "terms", title: "Пользовательское соглашение", icon: "book" }],
];

export const EMPTY_STATES = {
  services: {
    title: "Недавних услуг пока нет",
    text: "Здесь будут отображаться услуги, которыми вы пользовались ранее.",
  },
  payments: {
    title: "Платежей пока нет",
    text: "Здесь будет отображаться история ваших оплат за государственные услуги и справки.",
  },
};

export const HELP_ITEMS = [
  { id: "faq", title: "Частые вопросы", icon: "help" },
  { id: "support", title: "Служба поддержки", icon: "phone" },
];
