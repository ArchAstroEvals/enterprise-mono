export function prorate(monthlyCents: number, daysLeft: number, daysInMonth = 30): number {
  if (monthlyCents < 0) throw new Error("monthly must be >= 0");
  if (daysLeft < 0 || daysLeft > daysInMonth) throw new Error("bad daysLeft");
  return Math.round((monthlyCents * daysLeft) / daysInMonth);
}

export interface InvoiceLine {
  qty: number;
  unitCents: number;
}

export function invoiceTotal(lines: InvoiceLine[]): number {
  return lines.reduce((sum, l) => sum + l.qty * l.unitCents, 0);
}
