"use client";
import Image from "next/image";
import React, { useState } from "react";

const Frame = (): React.ReactElement => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navItems = [
    {
      name: "Início",
      href: "Início",
    },
    {
      name: "Início",
      href: "Início",
    },
    {
      name: "Início",
      href: "Início",
    },
    {
      name: "Início",
      href: "Início",
    },
  ];

  return (
    <div className="mt-6 fixed z-50 flex max-w-[954px] w-[calc(100%-40px)] sm:w-[calc(100%-48px)] md:w-[calc(100%-64px)] lg:w-[954px] justify-between p-5 bg-[#000000c2] rounded-full items-center left-1/2 -translate-x-1/2">
      <div className="inline-flex items-center gap-3">
        <Image
          className="w-[161px] h-6"
          alt="Admissão logo symbol"
          width={160}
          height={24}
          src="/images/logo-marca-white.png"
        />
      </div>

      <div className="hidden md:inline-flex gap-10 items-center">
        {navItems.map((item, index) => (
          <div key={`nav-item-${index}`}>
            <div className="font-semibold font-sans text-primary-contrast text-xs sm:text-sm">
              {item.name}
            </div>
          </div>
        ))}
      </div>

      {/* Menu burguer em telas pequenas */}
      <div className="md:hidden flex items-center">
        <button
          className="flex flex-col justify-center items-center w-8 h-8 focus:outline-none"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Abrir menu"
        >
          <span className="block w-6 h-0.5 bg-white mb-1 rounded transition-all" />
          <span className="block w-6 h-0.5 bg-white mb-1 rounded transition-all" />
          <span className="block w-6 h-0.5 bg-white rounded transition-all" />
        </button>
        {/* Dropdown do menu */}
        {menuOpen && (
          <div className="absolute top-16 right-5 bg-[#222] rounded-lg shadow-lg flex flex-col items-start py-4 px-6 gap-4 z-50 min-w-[150px]">
            {navItems.map((item, index) => (
              <div
                key={`nav-item-mobile-${index}`}
                className="font-semibold font-sans text-primary-contrast text-sm sm:text-base w-full text-left cursor-pointer hover:underline"
                onClick={() => setMenuOpen(false)}
              >
                {item.name}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Frame;
