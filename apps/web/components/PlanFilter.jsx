"use client";

import { useState } from "react";

export default function PlanFilter({ plans }) {
  const [q, setQ] = useState("");
  const shown = plans.filter((p) =>
    p.name.toLowerCase().includes(q.trim().toLowerCase())
  );
  return (
    <div>
      <input
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="filter plans"
      />
      <ul>
        {shown.map((p) => (
          <li key={p.id}>{p.name}</li>
        ))}
      </ul>
    </div>
  );
}
