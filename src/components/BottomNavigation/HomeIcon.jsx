/** Home icon from asset — outline / filled (blue inside when active) */
export function HomeIcon({ filled = false, ...props }) {
  return (
    <span
      className={`home-icon ${filled ? "home-icon--filled" : ""}`}
      aria-hidden
      {...props}
    />
  );
}
