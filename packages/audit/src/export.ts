export function toCSV(rows: string[][]): string {
  return rows.map((r) => r.join(",")).join("\n") + "\n";
}
