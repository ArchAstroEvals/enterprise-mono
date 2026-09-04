import { createServer, IncomingMessage, ServerResponse } from "node:http";

export interface Reply {
  status: number;
  body: unknown;
}

export type Handler = (
  req: IncomingMessage,
  params: Record<string, string>,
  body: unknown
) => Promise<Reply> | Reply;

interface Entry {
  method: string;
  parts: string[];
  handler: Handler;
}

export function readJson(req: IncomingMessage): Promise<unknown> {
  return new Promise((resolve, reject) => {
    let text = "";
    req.on("data", (chunk) => {
      text += String(chunk);
    });
    req.on("end", () => {
      if (!text) return resolve(null);
      try {
        resolve(JSON.parse(text));
      } catch {
        reject(new Error("bad json"));
      }
    });
  });
}

export function send(res: ServerResponse, status: number, body: unknown): void {
  const text = JSON.stringify(body);
  res.writeHead(status, { "content-type": "application/json" });
  res.end(text);
}

export function createApp(routes: Entry[] = []): (req: IncomingMessage, res: ServerResponse) => void {
  return (req, res) => {
    const url = new URL(req.url || "/", "http://x");
    const parts = url.pathname.split("/").filter(Boolean);
    for (const r of routes) {
      if (r.method !== req.method || r.parts.length !== parts.length) continue;
      const params: Record<string, string> = {};
      let hit = true;
      for (let i = 0; i < parts.length; i++) {
        const want = r.parts[i];
        if (want.startsWith(":")) params[want.slice(1)] = parts[i];
        else if (want !== parts[i]) {
          hit = false;
          break;
        }
      }
      if (!hit) continue;
      readJson(req).then(
        (body) => Promise.resolve(r.handler(req, params, body)).then((out) => send(res, out.status, out.body)),
        () => send(res, 400, { error: "bad_request" })
      );
      return;
    }
    send(res, 404, { error: "not_found" });
  };
}

export function listen(handler: (req: IncomingMessage, res: ServerResponse) => void, port = 0): Promise<{ port: number; close: () => void }> {
  const srv = createServer(handler);
  return new Promise((resolve) => {
    srv.listen(port, () => {
      const addr = srv.address();
      const p = typeof addr === "object" && addr ? addr.port : 0;
      resolve({ port: p, close: () => srv.close() });
    });
  });
}
