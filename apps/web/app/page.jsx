import { PLANS } from "@mono/billing";

export default function Home() {
  return (
    <div>
      <h1>Mono SaaS</h1>
      <p>One monorepo, every team plan.</p>
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
