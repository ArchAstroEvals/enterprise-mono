export const MAX_BODY_BYTES = 1 << 20;

export function bodyTooLarge(bytes: number): boolean {
  return bytes > MAX_BODY_BYTES;
}
