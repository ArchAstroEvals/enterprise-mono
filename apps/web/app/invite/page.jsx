import { getPlan } from "@mono/billing";

export const metadata = { title: "Invite — Mono Web" };

export default function Invite() {
  const plan = getPlan("starter");
  return (
    <div>
      <h1>Invite your team</h1>
      <p>
        {plan.name} fits {plan.seats} seats.
      </p>
    </div>
  );
}
