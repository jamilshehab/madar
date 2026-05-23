"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, Search, Phone, Globe, X } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  // Lock body scroll
  useEffect(() => {
    if (mobileMenuOpen || searchOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [mobileMenuOpen, searchOpen]);

  // ESC close
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileMenuOpen(false);
        setSearchOpen(false);
      }
    };

    window.addEventListener("keydown", handleEsc);

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, []);

  const navLinks = [
    { href: "#", label: "الرئيسية" },
    { href: "#about", label: "من نحن" },
    { href: "#products", label: "منتجاتنا" },
    { href: "#vision", label: "رؤيتنا" },
    { href: "#why-us", label: "لماذا نحن" },
    { href: "#sustainability", label: "الاستدامة" },
    { href: "#contact", label: "تواصل معنا" },
  ];

  return (
    <>
      <header className="w-full border-b border-gray-100 bg-white">
        {/* TOP BAR */}
        <div className="bg-[#0E4B59] text-white">
          <div className="container mx-auto flex items-center justify-between px-4 py-2 text-sm">
            {/* Right */}
            <div className="flex items-center gap-4 sm:gap-6">
              <div className="flex items-center gap-2">
                <Phone size={15} />
                <span dir="ltr">+964 770 000 0000</span>
              </div>

              <div className="hidden md:flex items-center gap-2">
                <Globe size={15} />
                <span>العراق</span>
              </div>
            </div>

            {/* Left */}
            <div className="hidden md:flex items-center gap-6">
              <Link href="#" className="hover:text-gray-200 transition-colors">
                Facebook
              </Link>

              <Link href="#" className="hover:text-gray-200 transition-colors">
                Instagram
              </Link>

              <Link href="#" className="hover:text-gray-200 transition-colors">
                X
              </Link>
            </div>
          </div>
        </div>

        {/* MAIN NAVBAR */}
        <div className="container mx-auto px-4">
          <div className="flex h-[80px] lg:h-[90px] items-center justify-between gap-4">
            {/* LOGO */}
            <Link href="/" className="flex items-center gap-3 shrink-0">
              <div className="relative overflow-hidden rounded-full">
                <Image
                  src="/madar-group.png"
                  alt="Madar Logo"
                  width={160}
                  height={500}
                  className="object-contain w-[110px] sm:w-[130px] lg:w-[160px]"
                  priority
                />
              </div>

              <div className="hidden sm:flex flex-col leading-tight">
                <span className="text-xs sm:text-sm text-gray-500">
                  نظافة راقية لعناية تدوم
                </span>
              </div>
            </Link>

            {/* DESKTOP NAV */}
            <nav className="hidden lg:flex items-center gap-8 xl:gap-10">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-[15px] font-medium text-gray-700 transition-colors hover:text-[#0E4B59]"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* ACTIONS */}
            <div className="flex items-center gap-2 sm:gap-4">
              {/* SEARCH */}
              <button
                onClick={() => setSearchOpen(true)}
                className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full border border-gray-200 transition-all hover:border-[#0E4B59] hover:bg-[#0E4B59] hover:text-white"
              >
                <Search size={18} />
              </button>

              {/* CTA */}
              <button className="hidden md:flex items-center rounded-full bg-[#0E4B59] px-5 lg:px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all hover:scale-105 hover:bg-[#083742]">
                اكتشف منتجاتنا
              </button>

              {/* MOBILE MENU BUTTON */}
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full border border-gray-200 lg:hidden"
              >
                <Menu size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* BOTTOM CATEGORY BAR */}
        <div className="hidden xl:block border-t border-gray-100 bg-[#F8FAFB]">
          <div className="container mx-auto flex items-center justify-center gap-10 px-4 py-4">
            <Link
              href="#"
              className="text-sm font-medium text-gray-600 hover:text-[#0E4B59]"
            >
              منظفات الملابس
            </Link>

            <Link
              href="#"
              className="text-sm font-medium text-gray-600 hover:text-[#0E4B59]"
            >
              معطرات الأقمشة
            </Link>

            <Link
              href="#"
              className="text-sm font-medium text-gray-600 hover:text-[#0E4B59]"
            >
              منظفات متعددة الاستخدام
            </Link>

            <Link
              href="#"
              className="text-sm font-medium text-gray-600 hover:text-[#0E4B59]"
            >
              منتجات العناية المنزلية
            </Link>
          </div>
        </div>
      </header>

      {/* SEARCH OVERLAY */}
      {searchOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm p-4">
          <div className="flex min-h-screen items-start justify-center pt-24">
            <div className="w-full max-w-2xl rounded-3xl bg-white p-5 shadow-2xl">
              <div className="flex items-center gap-3">
                <input
                  type="text"
                  placeholder="ابحث هنا..."
                  className="h-14 flex-1 rounded-2xl border border-gray-200 px-5 text-right outline-none transition-all focus:border-[#0E4B59]"
                />

                <button
                  onClick={() => setSearchOpen(false)}
                  className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0E4B59] text-white"
                >
                  <X size={20} />
                </button>
              </div>
            </div>
          </div>

          {/* OUTSIDE CLICK */}
          <button
            onClick={() => setSearchOpen(false)}
            className="absolute inset-0 -z-10"
          />
        </div>
      )}

      {/* MOBILE MENU */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm">
          <div className="absolute right-0 top-0 h-full w-[85%] max-w-sm bg-white shadow-2xl">
            {/* HEADER */}
            <div className="flex items-center justify-between border-b border-gray-100 p-5">
              <h2 className="text-lg font-bold text-[#0E4B59]">القائمة</h2>

              <button
                onClick={() => setMobileMenuOpen(false)}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200"
              >
                <X size={18} />
              </button>
            </div>

            {/* LINKS */}
            <div className="flex flex-col p-5">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="border-b border-gray-100 py-4 text-right text-[15px] font-medium text-gray-700 transition-colors hover:text-[#0E4B59]"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* CTA */}
            <div className="p-5">
              <button className="w-full rounded-2xl bg-[#0E4B59] py-4 text-sm font-semibold text-white">
                اكتشف منتجاتنا
              </button>
            </div>
          </div>

          {/* OUTSIDE CLICK */}
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="absolute inset-0 -z-10"
          />
        </div>
      )}
    </>
  );
}
