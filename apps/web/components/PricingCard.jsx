export default function PricingCard({ plan, yearly, eff }) {
  return (
    <div className="card">
      <h2>{plan.name}</h2>
      <p>
        ${plan.monthlyCents / 100}/mo or ${yearly}/yr · {plan.seats} seats
      </p>
      <p>Yearly works out to about ${eff}/mo.</p>
    </div>
  );
}
