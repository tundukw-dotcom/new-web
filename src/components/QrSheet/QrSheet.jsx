import { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence, useMotionValue, animate } from "framer-motion";
import { useAuth } from "../../context/AuthContext";
import "./QrSheet.css";

const QR_TTL = 178;

function makeTempPass(seed) {
  let h = 0;
  for (let i = 0; i < seed.length; i++) h = (h * 31 + seed.charCodeAt(i)) >>> 0;
  return String(100000 + (h % 900000)).slice(0, 6);
}

export default function QrSheet() {
  const { user } = useAuth();
  const [open, setOpen] = useState(false);
  const [left, setLeft] = useState(QR_TTL);
  const [cycle, setCycle] = useState(0);
  const y = useMotionValue(0);
  const openRef = useRef(false);
  const personalNumber = user?.personalNumber || "";

  useEffect(() => {
    openRef.current = open;
  }, [open]);

  useEffect(() => {
    if (!open) return;
    setLeft(QR_TTL);
    setCycle((c) => c + 1);
    const t = setInterval(() => {
      setLeft((v) => (v <= 1 ? 0 : v - 1));
    }, 1000);
    return () => clearInterval(t);
  }, [open]);

  useEffect(() => {
    if (!open || left > 0) return;
    setCycle((c) => c + 1);
    setLeft(QR_TTL);
  }, [left, open]);

  const resetY = () => {
    animate(y, 0, {
      type: "spring",
      stiffness: 380,
      damping: 36,
      mass: 0.8,
    });
  };

  const openSheet = () => {
    setOpen(true);
    y.set(80);
    animate(y, 0, {
      type: "spring",
      stiffness: 320,
      damping: 32,
      mass: 0.85,
    });
  };

  const closeSheet = () => {
    setOpen(false);
    resetY();
  };

  const mins = Math.floor(left / 60);
  const secs = left % 60;
  const progress = (left / QR_TTL) * 100;
  const tempPass = useMemo(
    () => makeTempPass(`${personalNumber}:${cycle}`),
    [personalNumber, cycle]
  );

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.button
            type="button"
            className="qr-backdrop"
            aria-label="Закрыть"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={closeSheet}
          />
        )}
      </AnimatePresence>

      <motion.div
        className={`qr-sheet ${open ? "is-open" : "is-closed"}`}
        style={{ y }}
        drag="y"
        dragConstraints={
          open ? { top: 0, bottom: 240 } : { top: -220, bottom: 40 }
        }
        dragElastic={0.18}
        dragMomentum={false}
        onDragEnd={(_, info) => {
          if (openRef.current) {
            if (info.offset.y > 90 || info.velocity.y > 650) {
              closeSheet();
            } else {
              resetY();
            }
          } else if (info.offset.y < -55 || info.velocity.y < -550) {
            openSheet();
          } else {
            resetY();
          }
        }}
      >
        {open ? (
          <div className="qr-open">
            <div className="qr-handle" />
            <div className="qr-card">
              <div className="qr-code-wrap">
                <img
                  src="/qr-code.png"
                  alt="QR"
                  className="qr-code"
                  draggable={false}
                />
                <span className="qr-globe" aria-hidden>
                  <img src="/qr-center.gif" alt="" className="qr-globe-gif" />
                </span>
              </div>
              <div className="qr-progress">
                <div style={{ width: `${progress}%` }} />
              </div>
              <p className="qr-timer">
                До истечения действия временного QR-кода осталось {mins} мин{" "}
                {secs} секунд
              </p>
            </div>

            <h3>QR-код цифрового документа</h3>
            <p className="qr-hint">
              Чтобы поделиться данными необходимо сообщить следующую информацию:
            </p>

            <div className="qr-meta">
              <div>
                <span>ПИН:</span>
                <strong>{personalNumber}</strong>
              </div>
              <div>
                <span>Временный пароль</span>
                <strong>{tempPass}</strong>
              </div>
            </div>
          </div>
        ) : (
          <div className="qr-collapsed">
            <div className="qr-pull-glow" aria-hidden />
            <div className="qr-pull-btn" aria-hidden>
              <img src="/qr-pull-icon.png" alt="" className="qr-pull-icon" />
            </div>
            <p>Потяните для просмотра QR кода</p>
          </div>
        )}
      </motion.div>
    </>
  );
}
