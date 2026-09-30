import { slaHours, type SupportChannel } from "./tiers.js";

export function escalate(channel: SupportChannel, breached: boolean): SupportChannel {
  if (!breached) return channel;
  if (channel === "community") return "email-priority";
  return "slack";
}

export function breachNote(channel: SupportChannel): string {
  return "SLA " + slaHours(channel) + "h breached";
}
