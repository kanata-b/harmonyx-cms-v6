"use client";

import { useRef, useEffect } from "react";
import { useVisualEditing } from "@/hooks/useVisualEditing";
import { useRouter } from "next/navigation";
import NavigationBar from "@/components/layout/NavigationBar";
import Footer from "@/components/layout/Footer";
import { Navigation, Globals } from "@/types/directus-schema";

export interface VisualEditingLayoutProps {
  headerNavigation: Navigation | null;
  footerNavigation: Navigation | null;
  globals: Globals | null;
  children: React.ReactNode;
}

export default function VisualEditingLayout({
  headerNavigation,
  footerNavigation,
  globals,
  children,
}: VisualEditingLayoutProps) {
  const navRef = useRef<HTMLElement>(null);
  const footerRef = useRef<HTMLElement>(null);
  const { isVisualEditingEnabled, apply } = useVisualEditing();
  const router = useRouter();

  useEffect(() => {
    if (isVisualEditingEnabled) {
      // Apply visual editing for the navigation bar if its ref is set.
      if (navRef.current) {
        apply({
          elements: [navRef.current],
          onSaved: () => router.refresh(),
        });
      }
      // Apply visual editing for the footer if its ref is set.
      if (footerRef.current) {
        apply({
          elements: [footerRef.current],
          onSaved: () => router.refresh(),
        });
      }
    }
  }, [isVisualEditingEnabled, apply, router]);

  return (
    <>
      {headerNavigation && (
        <NavigationBar
          ref={navRef}
          navigation={headerNavigation}
          globals={globals as Globals}
        />
      )}
      {children}
      {footerNavigation && (
        <Footer
          ref={footerRef}
          navigation={footerNavigation}
          globals={globals as Globals}
        />
      )}
    </>
  );
}
