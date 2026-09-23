export default function SeatWarning({ used, included }) {
  if (used <= included) return null;
  return <p>Over seat quota by {used - included} seats.</p>;
}
