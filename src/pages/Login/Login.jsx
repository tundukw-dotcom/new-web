import { useState } from "react";
import "./Login.css";
import PinDots from "./components/PinDots";
import NumberPad from "./components/NumberPad";
import { SplashGate } from "./Splash";
import { Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function Login() {
  const [pin, setPin] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const { login, isAuth } = useAuth();

  if (isAuth) return <Navigate to="/home" replace />;

  const addDigit = (digit) => {
    if (pin.length >= 4) return;
    setError(false);

    const newPin = pin + digit;
    setPin(newPin);

    if (newPin.length === 4) {
      const ok = login(newPin);
      if (ok) {
        setTimeout(() => navigate("/home"), 180);
      } else {
        setError(true);
        setTimeout(() => setPin(""), 350);
      }
    }
  };

  const removeDigit = () => {
    setError(false);
    setPin((p) => p.slice(0, -1));
  };

  return (
    <SplashGate>
      <div className="login page--no-nav">
        <div className="login-content">
          <h1>Введите ПИН-код</h1>
          <PinDots value={pin} error={error} />
          <NumberPad onPress={addDigit} onDelete={removeDigit} />

          <div className="forgot">
            <p>Забыли ПИН-код?</p>
            <button type="button" className="forgot-link">
              Восстановить доступ
            </button>
          </div>
        </div>
      </div>
    </SplashGate>
  );
}
