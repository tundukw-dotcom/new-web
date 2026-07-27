import "./idcard.css";
import { motion } from "framer-motion";
import qr from "../../assets/qr.png";

export default function BottomSheet() {
  return (
    <motion.div
      className="bottomSheet"
      drag="y"
      dragConstraints={{ top: -360, bottom: 0 }}
      dragElastic={0.08}
    >
      <div className="dragLine" />
      <h2>QR документа</h2>
      <div className="qrBox">
        <img src={qr} alt="" className="qrImage" />
      </div>
      <div className="qrInfo">
        <span>Потяните для просмотра QR кода</span>
      </div>
    </motion.div>
  );
}
