import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Splash.css";

const LETTERS = [0, 1, 2, 3, 4, 5];

export default function Splash({ onDone }) {
  useEffect(() => {
    const t = setTimeout(() => onDone?.(), 1600);
    return () => clearTimeout(t);
  }, [onDone]);

  return (
    <div className="splash">
      <div className="splash-inner">
        <motion.img
          src="/tunduk-logo.png"
          alt=""
          className="splash-logo"
          initial={{ opacity: 0, scale: 0.86 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.28, ease: "easeOut" }}
          draggable={false}
        />
        <h1 className="splash-title" aria-label="ТҮНДҮК">
          {LETTERS.map((i) => (
            <motion.img
              key={i}
              src={`/splash-letters/${i}.png`}
              alt=""
              className="splash-letter"
              initial={{ x: -80 - i * 22, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                duration: 0.26,
                delay: 0.16 + i * 0.04,
                ease: [0.22, 1, 0.36, 1],
              }}
              draggable={false}
            />
          ))}
        </h1>
      </div>
    </div>
  );
}

export function SplashGate({ children }) {
  const [show, setShow] = useState(true);

  return (
    <AnimatePresence mode="wait">
      {show ? (
        <motion.div
          key="splash"
          className="splash-gate"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.28, ease: "easeOut" }}
        >
          <Splash onDone={() => setShow(false)} />
        </motion.div>
      ) : (
        <motion.div
          key="after"
          className="splash-gate"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.28 }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
