import { PLANS, monthlyToAnnual, effectiveMonthly } from "@mono/billing";
import PricingCard from "../../components/PricingCard.jsx";
import PlanFilter from "../../components/PlanFilter.jsx";

export const metadata = { title: "Pricing — Mono Web" };

export default function Pricing() {
  return (
    <div>
      <h1>Pricing</h1>
      <PlanFilter plans={PLANS} />
      {PLANS.map((plan) => {
        const yearly = monthlyToAnnual(plan.monthlyCents);
        return (
          <PricingCard
            key={plan.id}
            plan={plan}
            yearly={yearly}
            eff={effectiveMonthly(yearly)}
          />
        );
      })}
    </div>
  );
}
