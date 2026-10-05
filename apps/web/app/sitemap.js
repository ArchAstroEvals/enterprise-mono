export default function sitemap() {
  const base = "https://example.com";
  return ["/", "/pricing", "/dashboard", "/signup", "/team", "/checkout"].map((path) => ({
    url: base + path,
  }));
}
