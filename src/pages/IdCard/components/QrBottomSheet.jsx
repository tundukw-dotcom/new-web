import { motion } from "framer-motion";
import qr from "../../../assets/qr.png";

export default function QrBottomSheet() {
    return (
        <motion.div
            className="bottomSheet"
            drag="y"
            dragConstraints={{
                top: -420,
                bottom: 0,
            }}
        >
            <div className="handle" />

            <img src={qr} className="qrImage" />

            <h2>Потяните для просмотра QR</h2>
        </motion.div>
    );
}