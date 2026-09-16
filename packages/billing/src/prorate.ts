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
  for (const l of lines) {
    if (l.qty < 0) throw new Error("qty must be >= 0");
  }
  return lines.reduce((sum, l) => sum + l.qty * l.unitCents, 0);
}
