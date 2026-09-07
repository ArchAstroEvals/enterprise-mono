export function ok<T>(data: T): { status: 200; body: T } {
  return { status: 200, body: data };
}

export function created<T>(data: T): { status: 201; body: T } {
  return { status: 201, body: data };
}

export function fail(status: number, code: string, detail?: string): { status: number; body: unknown } {
  return { status, body: detail ? { error: code, detail } : { error: code } };
}
