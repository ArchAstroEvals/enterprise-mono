export interface Plan {
  id: string;
  name: string;
  seats: number;
  monthlyCents: number;
}

export const PLANS: Plan[] = [
  { id: "starter", name: "Starter", seats: 5, monthlyCents: 1900 },
  { id: "growth", name: "Growth", seats: 25, monthlyCents: 7900 },
  { id: "scale", name: "Scale", seats: 100, monthlyCents: 24900 },
];

export function getPlan(id: string): Plan | null {
  return PLANS.find((p) => p.id === id) || null;
}
