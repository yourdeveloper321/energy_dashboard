import { useState, useMemo } from "react";
import { Virtuoso } from "react-virtuoso";
import devicesData from "../data/devices.json";
import Skeleton from "./Skeleton";
import { motion } from "framer-motion";

type Device = {
  id: string;
  name: string;
  type: string;
  site: string;
};

export default function DeviceList() {
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState<keyof Device>("name");

  const filtered = useMemo(() => {
    const lower = search.toLowerCase();
    return (devicesData as Device[])
      .filter(
        (d) =>
          d.name.toLowerCase().includes(lower) ||
          d.type.toLowerCase().includes(lower) ||
          d.site.toLowerCase().includes(lower)
      )
      .sort((a, b) => a[sortBy].localeCompare(b[sortBy]));
  }, [search, sortBy]);

  return (
    <motion.div
      style={{ padding: "1rem" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <h2 style={{ textAlign: "center", marginBottom: "1rem" }}>
        ⚡ Devices List
      </h2>

      {/* Search and Sort Controls */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "1rem",
          gap: "10px",
          flexWrap: "wrap",
        }}
      >
        <input
          aria-label="Search devices"
          placeholder="Search devices..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            padding: "6px",
            width: "220px",
            borderRadius: "6px",
            border: "1px solid #ccc",
          }}
        />

        <select
          aria-label="Sort devices by"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value as keyof Device)}
          style={{
            padding: "6px",
            borderRadius: "6px",
            border: "1px solid #ccc",
          }}
        >
          <option value="name">Name</option>
          <option value="type">Type</option>
          <option value="site">Site</option>
        </select>
      </div>

      {/* Device Table */}
      <div
        style={{
          marginTop: "1rem",
          border: "1px solid #ccc",
          borderRadius: "10px",
          overflow: "hidden",
          boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
        }}
      >
        {/* Header Row */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr",
            background: "#f8f8f8",
            borderBottom: "1px solid #ddd",
            fontWeight: "bold",
            padding: "10px 16px",
          }}
          role="row"
          aria-label="Device table header"
        >
          <span>Name</span>
          <span>Type</span>
          <span>Site</span>
        </div>

        {/* Conditional Rendering */}
        {filtered.length === 0 ? (
          <div style={{ padding: "1rem" }} aria-label="Loading devices">
            <Skeleton width="100%" height="2rem" />
            <Skeleton width="95%" height="2rem" />
            <Skeleton width="90%" height="2rem" />
          </div>
        ) : (
          <Virtuoso
            style={{ height: 400 }}
            totalCount={filtered.length}
            itemContent={(index) => {
              const d = filtered[index];
              return (
                <motion.div
                  key={d.id}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "2fr 1fr 1fr",
                    padding: "10px 16px",
                    borderBottom: "1px solid #eee",
                    alignItems: "center",
                    cursor: "pointer",
                    backgroundColor: "white",
                  }}
                  whileHover={{ backgroundColor: "#f1f1f1" }}
                  onClick={() => (window.location.href = `/device/${d.id}`)}
                  role="button"
                  tabIndex={0}
                  aria-label={`View details for ${d.name}`}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") window.location.href = `/device/${d.id}`;
                  }}
                >
                  <span>{d.name}</span>
                  <span>{d.type}</span>
                  <span>{d.site}</span>
                </motion.div>
              );
            }}
          />
        )}
      </div>
    </motion.div>
  );
}
