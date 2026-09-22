export default function UsageBar({ percent }) {
  return (
    <div>
      <div style={{ width: percent + "%", background: "#333", height: 8 }} />
      <p>{percent}% used</p>
    </div>
  );
}
