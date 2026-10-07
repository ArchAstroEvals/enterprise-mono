export function positionAhead(joined: number[], me: number): number {
  return joined.filter((t) => t < me).length;
}
