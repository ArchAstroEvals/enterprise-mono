export interface Page<T> {
  items: T[];
  total: number;
  page: number;
  perPage: number;
}

export function paginate<T>(all: T[], page: number, perPage: number): Page<T> {
  const safePage = Math.max(1, page);
  const safePer = Math.min(100, Math.max(1, perPage));
  const start = (safePage - 1) * safePer;
  return { items: all.slice(start, start + safePer), total: all.length, page: safePage, perPage: safePer };
}
