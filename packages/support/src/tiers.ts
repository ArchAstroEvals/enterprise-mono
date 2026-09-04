export type SupportChannel = "slack" | "email-priority" | "community";

export function supportTier(planId: string): SupportChannel {
  if (planId === "scale") return "slack";
  if (planId === "growth") return "email-priority";
  return "community";
}

export function slaHours(channel: SupportChannel): number {
  if (channel === "slack") return 4;
  if (channel === "email-priority") return 24;
  return 72;
}
