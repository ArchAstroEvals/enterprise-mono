import { PLANS, type Plan } from "./plans.js";

export function filterPlans(query: string): Plan[] {
  const q = query.trim().toLowerCase();
  if (!q) return PLANS;
  return PLANS.filter((p) => p.name.toLowerCase().includes(q) || p.id.includes(q));
}

export function filterPlansLimit(query: string, limit: number): Plan[] {
  return filterPlans(query).slice(0, Math.max(0, limit));
}
