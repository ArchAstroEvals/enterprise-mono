import "./globals.css";

export const metadata = {
  title: "Mono Web",
  description: "Enterprise SaaS storefront",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <nav>
            <a href="/">Home</a> | <a href="/pricing">Pricing</a> |{" "}
            <a href="/dashboard">Dashboard</a> | <a href="/signup">Sign up</a>
          </nav>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
