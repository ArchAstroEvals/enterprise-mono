export interface LogLine {
  method: string;
  path: string;
  status: number;
}

export function formatLine(l: LogLine): string {
  return l.method + " " + l.path + " " + l.status;
}
