"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";

const Frame = (): React.ReactElement => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      // Só aplica sticky/ocultar em telas menores que md
      if (window.innerWidth < 768) {
        if (currentScrollY > lastScrollY && currentScrollY > 40) {
          setShowHeader(false); // rolando para baixo
        } else {
          setShowHeader(true); // rolando para cima
        }
        setLastScrollY(currentScrollY);
      } else {
        setShowHeader(true); // sempre mostra em md+
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

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
    <div
      className={`
        z-50 flex max-w-[954px] 2xl:max-w-[1440px] w-[calc(100%-20px)] md:w-[calc(100%-64px)]
        justify-between p-5 bg-[#000000c2] rounded-full items-center
        transition-transform duration-300
        fixed left-1/2 -translate-x-1/2
        ${showHeader ? "translate-y-0 top-6" : "-translate-y-full"}
        lg:absolute lg:translate-y-0
      `}
      style={{ willChange: "transform" }}
    >
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
