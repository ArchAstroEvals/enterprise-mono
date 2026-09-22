import { PLANS, monthlyToAnnual } from "@mono/billing";
import PricingCard from "../../components/PricingCard.jsx";

export const metadata = { title: "Pricing — Mono Web" };

function yearly(id) {
  const plan = PLANS.find((p) => p.id === id);
  return monthlyToAnnual(plan.monthlyCents);
}

export default function Pricing() {
  return (
    <div>
      <h1>Pricing</h1>
      {PLANS.map((plan) => (
        <PricingCard key={plan.id} plan={plan} yearly={yearly(plan.id)} />
      ))}
    </div>
  );
}
