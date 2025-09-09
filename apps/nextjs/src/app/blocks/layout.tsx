import "@/styles/globals.css";
import "@/styles/fonts.css";
import { ReactNode } from "react";

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
    >
      <body className="antialiased font-sans flex flex-col min-h-screen">
         <main className="flex-grow">{children}</main>
      </body>
    </html>
  );
}
