export default function sitemap() {
  const base = "https://example.com";
  return ["/", "/pricing", "/dashboard", "/signup"].map((path) => ({
    url: base + path,
  }));
}
