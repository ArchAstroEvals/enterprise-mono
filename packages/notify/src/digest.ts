export interface Notice {
  day: string;
  text: string;
}

export function groupByDay(notices: Notice[]): Record<string, string[]> {
  const out: Record<string, string[]> = {};
  for (const n of notices) {
    if (!out[n.day]) out[n.day] = [];
    out[n.day].push(n.text);
  }
  return out;
}
