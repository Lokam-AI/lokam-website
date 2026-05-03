"use client";

import { usePathname, useRouter } from "next/navigation";
import { scrollToSection } from "../utils/scroll";

interface Props {
  href: string;
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
  onClick?: () => void;
}

export default function SmoothAnchor({ href, className, style, children, onClick }: Props) {
  const pathname = usePathname();
  const router = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    // Extract the section id — handles both "#roi" and "/#roi"
    const id = href.replace(/^\/?#/, "");

    if (pathname === "/") {
      scrollToSection(id);
    } else {
      router.push(`/?scroll=${id}`);
    }

    onClick?.();
  };

  return (
    <a href={href} className={className} style={style} onClick={handleClick}>
      {children}
    </a>
  );
}
