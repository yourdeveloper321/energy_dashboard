import { motion } from "framer-motion";

export default function Skeleton({ width = "100%", height = "1rem" }) {
  return (
    <motion.div
      animate={{ opacity: [0.4, 1, 0.4] }}
      transition={{ repeat: Infinity, duration: 1.5 }}
      style={{
        width,
        height,
        borderRadius: "6px",
        background: "linear-gradient(90deg,#eee,#ddd,#eee)",
      }}
    />
  );
}
