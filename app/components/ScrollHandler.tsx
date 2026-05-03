"use client";

import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { scrollToSection } from "../utils/scroll";

export default function ScrollHandler() {
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const target = searchParams.get("scroll");
    if (!target) return;

    // Small delay to let the page render before scrolling
    const t = setTimeout(() => {
      scrollToSection(target);
      router.replace("/", { scroll: false });
    }, 80);

    return () => clearTimeout(t);
  }, [searchParams, router]);

  return null;
}
