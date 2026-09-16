export const CORS_HEADERS = {
  "access-control-allow-origin": "*",
  "access-control-allow-methods": "GET,POST,PATCH,DELETE",
};

export function corsHeaders(): Record<string, string> {
  return { ...CORS_HEADERS };
}
