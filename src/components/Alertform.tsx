import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import "react-toastify/dist/ReactToastify.css";

export default function AlertForm() {
  const [threshold, setThreshold] = useState<number>(300);
  const [minutes, setMinutes] = useState<number>(5);

  const saveRule = () => {
    const rule = { threshold, minutes };
    localStorage.setItem("alertRule", JSON.stringify(rule));
    toast.success("Alert rule saved successfully!");
  };

  useEffect(() => {
    const stored = localStorage.getItem("alertRule");
    if (stored) {
      const { threshold, minutes } = JSON.parse(stored);
      setThreshold(threshold);
      setMinutes(minutes);
    }
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      style={{
        border: "1px solid #ddd",
        borderRadius: "10px",
        padding: "1.2rem",
        marginTop: "1.5rem",
        background: "#f9f9f9",
        boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
      }}
    >
      <h3 style={{ marginBottom: "1rem" }}>Alert Rules</h3>

      <div
        style={{
          display: "flex",
          gap: "12px",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <label>
          Power &gt;
          <input
            aria-label="Power threshold in watts"
            type="number"
            value={threshold}
            onChange={(e) => setThreshold(Number(e.target.value))}
            style={{
              marginLeft: "5px",
              width: "80px",
              padding: "4px 6px",
              borderRadius: "6px",
              border: "1px solid #ccc",
            }}
          />{" "}
          W
        </label>

        <label>
          for
          <input
            aria-label="Duration in minutes"
            type="number"
            value={minutes}
            onChange={(e) => setMinutes(Number(e.target.value))}
            style={{
              marginLeft: "5px",
              width: "60px",
              padding: "4px 6px",
              borderRadius: "6px",
              border: "1px solid #ccc",
            }}
          />{" "}
          min
        </label>

        <motion.button
          aria-label="Save alert rule"
          whileTap={{ scale: 0.95 }}
          whileHover={{ backgroundColor: "#eaeaea" }}
          onClick={saveRule}
          style={{
            padding: "6px 12px",
            borderRadius: "8px",
            border: "1px solid #bbb",
            cursor: "pointer",
            fontWeight: 500,
            background: "white",
          }}
        >
          Save
        </motion.button>
      </div>
    </motion.div>
  );
}
