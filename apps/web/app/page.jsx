import { PLANS } from "@mono/billing";

const TOTAL_SEATS = PLANS.reduce((sum, p) => sum + p.seats, 0);

export default function Home() {
  return (
    <div>
      <h1>Mono SaaS</h1>
      <p>
        One monorepo, every team plan. {TOTAL_SEATS} seats across tiers.
      </p>
      <ul>
        {PLANS.map((p) => (
          <li key={p.id}>
            {p.name}: {p.seats} seats
          </li>
        ))}
      </ul>
    </div>
  );
}
