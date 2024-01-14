"use client";
import React from "react";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemeProvider } from "next-themes";
export default function Provider({ children }) {
  return (
    <NextUIProvider>
      <NextThemeProvider
        attribute="class"
        defaultTheme="dark"
        themes={["light", "dark", "modern"]}
      >
        <>
        {children}
        </>
      </NextThemeProvider>
    </NextUIProvider>
  );
}
