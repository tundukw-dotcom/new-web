import { useRef, useState } from "react";
import { motion, animate, useMotionValue, useTransform } from "framer-motion";
import { IdCardFront, IdCardBack } from "../../components/Cards/IdCardBlocks";

const SWAP = 64;
const MAX = 120;

function clamp(v, a, b) {
  return Math.max(a, Math.min(b, v));
}

export default function IdCardStack({
  front: Front = IdCardFront,
  back: Back = IdCardBack,
}) {
  const [side, setSide] = useState(0); // 0 = front on top
  const [busy, setBusy] = useState(false);
  const start = useRef({ x: 0, y: 0 });
  const dragging = useRef(false);

  // Only the TOP card moves — bottom stays fixed and peeks through (video behavior)
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rot = useTransform(x, [-120, 120], [-6, 6]);
  const bottomOpacity = useTransform([x, y], ([vx, vy]) => {
    const distance = Math.hypot(vx, vy);
    return clamp((distance - 2) / 14, 0, 1);
  });

  const Top = side === 0 ? Front : Back;
  const Bottom = side === 0 ? Back : Front;

  const snapHome = () =>
    Promise.all([
      animate(x, 0, { type: "spring", stiffness: 420, damping: 34, mass: 0.7 }),
      animate(y, 0, { type: "spring", stiffness: 420, damping: 34, mass: 0.7 }),
    ]);

  const swapTo = async (next, dir) => {
    setBusy(true);
    const fly = dir * 380;
    await animate(x, fly, {
      type: "spring",
      stiffness: 300,
      damping: 30,
      mass: 0.65,
    });
    x.set(0);
    y.set(0);
    setSide(next);
    setBusy(false);
  };

  const onPointerDown = (e) => {
    if (busy) return;
    dragging.current = true;
    start.current = { x: e.clientX, y: e.clientY };
    e.currentTarget.setPointerCapture?.(e.pointerId);
  };

  const onPointerMove = (e) => {
    if (!dragging.current || busy) return;
    x.set(clamp(e.clientX - start.current.x, -MAX, MAX));
    y.set(clamp(e.clientY - start.current.y, -MAX, MAX));
  };

  const onPointerUp = async (e) => {
    if (!dragging.current || busy) return;
    dragging.current = false;

    const dx = e.clientX - start.current.x;
    const dy = e.clientY - start.current.y;
    const horizontal = Math.abs(dx) >= Math.abs(dy) * 0.75;

    if (horizontal && Math.abs(dx) > SWAP) {
      await swapTo(side === 0 ? 1 : 0, dx > 0 ? 1 : -1);
      return;
    }

    await snapHome();
  };

  return (
    <div className="id-stack-wrap">
      <div
        className="id-stack"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
      >
        <motion.div
          className="id-stack-card is-back"
          style={{ opacity: bottomOpacity }}
        >
          <Bottom />
        </motion.div>

        <motion.div className="id-stack-card is-front" style={{ x, y, rotate: rot }}>
          <Top />
        </motion.div>
      </div>

      <div className="id-stack-dots" aria-hidden>
        <span className={side === 0 ? "on" : ""} />
        <span className={side === 1 ? "on" : ""} />
      </div>
    </div>
  );
}
