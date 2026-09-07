let seq = 0;

export function nextInvoiceNumber(prefix = "INV"): string {
  seq += 1;
  return prefix + "-" + String(seq).padStart(4, "0");
}

export function resetInvoiceSeq(): void {
  seq = 0;
}

export function dueDate(issuedAt: number, netDays = 30): number {
  if (netDays < 0) throw new Error("netDays must be >= 0");
  return issuedAt + netDays * 24 * 3600 * 1000;
}
