import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "React simple loader",
  description: "React simple loader by Amal Jose A",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
