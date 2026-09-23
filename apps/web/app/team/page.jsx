import { seatsLeft } from "@mono/teams";
import { getPlan } from "@mono/billing";
import SeatWarning from "../../components/SeatWarning.jsx";

const MEMBERS = 27;

export const metadata = { title: "Team — Mono Web" };

export default function Team() {
  const plan = getPlan("growth");
  return (
    <div>
      <h1>Team settings</h1>
      <p>
        Plan {plan.name} · {seatsLeft(plan.seats, 3)} seats open
      </p>
      <SeatWarning used={MEMBERS} included={plan.seats} />
    </div>
  );
}
