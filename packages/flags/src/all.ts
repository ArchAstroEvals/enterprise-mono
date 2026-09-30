import { FLAGS, type FlagName } from "./flags.js";

export function allFlags(): FlagName[] {
  return Object.keys(FLAGS) as FlagName[];
}
