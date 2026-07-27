export default function PinDots({ value, error }) {
  return (
    <div className="pin-dots">
      {[0, 1, 2, 3].map((item) => (
        <div
          key={item}
          className={`pin-dot ${value[item] ? "filled" : ""} ${error ? "error" : ""}`}
        />
      ))}
    </div>
  );
}
