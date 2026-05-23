"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, Search, Phone, Globe } from "lucide-react";

export default function Navbar() {
  return (
    <header className="w-full border-b border-gray-100 bg-white rtl">
      {/* TOP BAR */}
      <div className="bg-[#0E4B59] text-white">
        <div className="container mx-auto flex items-center justify-between px-4 py-2 text-sm">
          {/* Right Side */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Phone size={15} />
              <span dir="ltr">+964 770 000 0000</span>
            </div>

            <div className="hidden md:flex items-center gap-2">
              <Globe size={15} />
              <span>العراق</span>
            </div>
          </div>

          {/* Left Side */}
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
        <div className="flex h-[90px] items-center justify-between">
          {/* LOGO */}
          <Link href="/" className="flex items-center gap-3">
            <div className="relative   overflow-hidden rounded-full">
              <Image
                src="/madar-group.png"
                alt="Madar Logo"
                width={160}
                height={500}
                className="object-contain"
              />
            </div>

            <div className="flex flex-col leading-tight">
              <span className="text-sm text-gray-500">
                نظافة راقية لعناية تدوم
              </span>
            </div>
          </Link>

          {/* NAV LINKS */}
          <nav className="hidden lg:flex items-center gap-10">
            <Link
              href="#"
              className="text-[15px] font-medium text-gray-700 hover:text-[#0E4B59] transition-colors"
            >
              الرئيسية
            </Link>

            <Link
              href="#about"
              className="text-[15px] font-medium text-gray-700 hover:text-[#0E4B59] transition-colors"
            >
              من نحن
            </Link>

            <Link
              href="#products"
              className="text-[15px] font-medium text-gray-700 hover:text-[#0E4B59] transition-colors"
            >
              منتجاتنا
            </Link>

            <Link
              href="#vision"
              className="text-[15px] font-medium text-gray-700 hover:text-[#0E4B59] transition-colors"
            >
              رؤيتنا
            </Link>

            <Link
              href="#why-us"
              className="text-[15px] font-medium text-gray-700 hover:text-[#0E4B59] transition-colors"
            >
              لماذا نحن
            </Link>

            <Link
              href="#sustainability"
              className="text-[15px] font-medium text-gray-700 hover:text-[#0E4B59] transition-colors"
            >
              الاستدامة
            </Link>

            <Link
              href="#contact"
              className="text-[15px] font-medium text-gray-700 hover:text-[#0E4B59] transition-colors"
            >
              تواصل معنا
            </Link>
          </nav>

          {/* ACTIONS */}
          <div className="flex items-center gap-4">
            {/* Search */}
            <button className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 hover:border-[#0E4B59] hover:bg-[#0E4B59] hover:text-white transition-all">
              <Search size={18} />
            </button>

            {/* CTA */}
            <button className="hidden md:flex items-center rounded-full bg-[#0E4B59] px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all hover:scale-105 hover:bg-[#083742]">
              اكتشف منتجاتنا
            </button>

            {/* Mobile Menu */}
            <button className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 lg:hidden">
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
  );
}
