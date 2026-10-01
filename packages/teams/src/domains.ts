export function trustedDomain(email: string, domains: string[]): boolean {
  const at = email.lastIndexOf("@");
  if (at < 0) return false;
  const domain = email.slice(at + 1).toLowerCase();
  return domains.map((d) => d.toLowerCase()).includes(domain);
}
