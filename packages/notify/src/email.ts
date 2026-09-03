export function welcomeSubject(planName: string): string {
  return "Welcome to Acme " + planName;
}

export function receiptLines(totalCents: number, planName: string): string[] {
  if (totalCents < 0) throw new Error("total must be >= 0");
  return ["Plan: " + planName, "Total due: $" + (totalCents / 100).toFixed(2)];
}

export function dunningSubject(status: string): string {
  return "Billing " + status + ": action needed";
}
