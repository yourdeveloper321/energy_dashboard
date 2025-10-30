import { useParams, useNavigate } from "react-router-dom";
import {
  useMemo,
  useLayoutEffect,
  useRef,
  useState,
  useEffect,
} from "react";
import devicesData from "../data/devices.json";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import { toast } from "react-toastify";

// ⚙️ Suppress known chart warning
const originalWarn = console.warn;
console.warn = (...args) => {
  if (
    typeof args[0] === "string" &&
    args[0].includes("The width(-1) and height(-1) of chart should be greater than 0")
  ) {
    return;
  }
  originalWarn(...args);
};

type Device = {
  id: string;
  name: string;
  type: string;
  site: string;
  usage: number[];
};

export default function DevicePage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const containerRef = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);

  const device = useMemo(
    () => (devicesData as Device[]).find((d) => d.id === id),
    [id]
  );

  // ✅ Wait for container to have size before rendering chart
  useLayoutEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const resizeObserver = new ResizeObserver((entries) => {
      const rect = entries[0].contentRect;
      if (rect.width > 0 && rect.height > 0) setReady(true);
    });
    resizeObserver.observe(el);
    return () => resizeObserver.disconnect();
  }, []);

  // ✅ Alert trigger logic inside component
  useEffect(() => {
    if (!device) return;

    const ruleStr = localStorage.getItem("alertRule");
    if (!ruleStr) return;

    const rule = JSON.parse(ruleStr);
    const exceeded = device.usage.filter((v) => v > rule.threshold);
    if (exceeded.length >= rule.minutes) {
      toast.warning(
        `⚠️ Alert: ${device.name} power > ${rule.threshold}W for ${rule.minutes} min!`
      );
    }
  }, [device]);

  if (!device) {
    return (
      <div style={{ padding: "2rem", textAlign: "center" }}>
        <p>Device not found!</p>
        <button
          onClick={() => navigate(-1)}
          style={{
            marginTop: "1rem",
            padding: "8px 14px",
            borderRadius: "6px",
            border: "1px solid #ccc",
            cursor: "pointer",
          }}
        >
          ⬅ Back
        </button>
      </div>
    );
  }

  const data = device.usage.map((v, i) => ({ hour: `${i}:00`, value: v }));

  const stats = {
    min: Math.min(...device.usage).toFixed(2),
    max: Math.max(...device.usage).toFixed(2),
    avg: (
      device.usage.reduce((a, b) => a + b, 0) / device.usage.length
    ).toFixed(2),
    last: device.usage[device.usage.length - 1].toFixed(2),
  };

  return (
    <div className="device-page" style={{ padding: "2rem" }}>
      <h2 style={{ marginBottom: "0.5rem" }}>{device.name}</h2>
      <p style={{ marginBottom: "1rem" }}>
        <strong>Type:</strong> {device.type} |{" "}
        <strong>Site:</strong> {device.site}
      </p>

      {/* ✅ Chart container ensures measurable size */}
      <div
        ref={containerRef}
        style={{
          width: "100%",
          height: "400px",
          border: "1px solid #ddd",
          borderRadius: "8px",
          background: "#fafafa",
          marginBottom: "1rem",
          padding: "1rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {ready ? (
          <ResponsiveContainer width="100%" height="100%" aria-label="Device power usage line chart">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="hour" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="value"
                stroke="#007bff"
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        ) : (
          <p>📊 Preparing chart...</p>
        )}
      </div>

      {/* Stats grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "10px",
          textAlign: "center",
        }}
      >
        {Object.entries(stats).map(([key, val]) => (
          <div
            key={key}
            style={{
              background: "#f2f2f2",
              padding: "10px",
              borderRadius: "6px",
            }}
          >
            <strong>{key.toUpperCase()}</strong>
            <div>{val} W</div>
          </div>
        ))}
      </div>
    </div>
  );
}
