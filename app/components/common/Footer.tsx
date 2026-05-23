"use client";

import Link from "next/link";
import { FaInstagram, FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer
      className="w-full border-t border-neutral-200 bg-white"
      id="contact"
    >
      <div className="container mx-auto flex flex-col items-center justify-center px-6 py-8">
        {/* SOCIALS */}
        <div className="flex items-center gap-4">
          <Link
            href="https://instagram.com/madargroupheadoffice/"
            target="_blank"
            aria-label="Instagram"
            className="group flex h-12 w-12 items-center justify-center rounded-full border border-neutral-300 transition-all duration-300 hover:-translate-y-1 hover:border-black hover:bg-black"
          >
            <FaInstagram className="text-[20px] text-neutral-700 transition-colors duration-300 group-hover:text-white" />
          </Link>

          <Link
            href="https://x.com/MadarGroup_HO/"
            target="_blank"
            aria-label="Twitter"
            className="group flex h-12 w-12 items-center justify-center rounded-full border border-neutral-300 transition-all duration-300 hover:-translate-y-1 hover:border-black hover:bg-black"
          >
            <FaXTwitter className="text-[18px] text-neutral-700 transition-colors duration-300 group-hover:text-white" />
          </Link>
        </div>

        {/* COPYRIGHT */}
        <p className="mt-6 text-center text-sm tracking-wide text-neutral-500">
          © 2026{" "}
          <Link
            href="https://www.madargroup.com"
            target="_blank"
            className="hover:underline"
          >
            MADAR
          </Link>
          . All rights reserved.
        </p>
      </div>
    </footer>
  );
}
