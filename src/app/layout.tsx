import React from "react";
import Navbar from "@/components/Header";
import "./globals.css";
import Wrapper from "./Wrapper";

export const metadata = {
  title:
    "MLS.com - MLS Listings, Real Estate Property Listings, Homes for Sale",
  description: "...test for the role of FE DEV",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Wrapper>{children}</Wrapper>
      </body>
    </html>
  );
}
