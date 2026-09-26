import { meterPercent, quotaLeft, overage, formatCents } from "@mono/billing";
import UsageBar from "../../components/UsageBar.jsx";

const USED = 30;
const QUOTA = 25;
const PER_SEAT = 400;

export const metadata = { title: "Dashboard — Mono Web" };

export default function Dashboard() {
  const pct = meterPercent(USED, QUOTA);
  const extra = overage(USED, QUOTA, PER_SEAT);
  return (
    <div>
      <h1>Dashboard</h1>
      <UsageBar percent={pct} />
      <p>
        {USED} of {QUOTA} seats used · {quotaLeft(USED, QUOTA)} left
      </p>
      {extra > 0 && <p>Overage due: {formatCents(extra)}</p>}
    </div>
  );
}
