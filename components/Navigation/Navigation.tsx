"use client";
import { useState } from 'react'
import Link from "next/link";
import { useRouter } from "next/router";



export default function Navigation() {
  const router = useRouter();
  const pathname = router.pathname;

  const navItems = [
    { name: "Menu", href: "/menu" },
    { name: "Event", href: "/event" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="flex items-start md:items-center flex-col md:flex-row">
      {navItems.map((item) => (
        <Link
          key={item.name}
          href={item.href}
          className={`px-3 py-3 md:py-5 rounded border-b border-b-[#e0c59d] border-dashed md:border-none w-full ${
            pathname === item.href ? "active-nav text-colorPrimary nav-link text-sm" : "text-DarkPrimary nav-link text-sm hover:text-colorPrimary"
          }`}
        >
          {item.name}
        </Link>
      ))}
    </nav>
  );
}