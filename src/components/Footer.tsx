import React from "react";

export default function Footer(): React.ReactElement {
  return (
    <footer className="w-full flex items-center justify-center bg-secondary py-6">
      <div className="flex flex-col gap-y-2 w-full items-center md:justify-between px-4 md:px-0">
        <div className="flex flex-col text-center w-auto px-32 py-3">
          <p className="font-m3-body-medium text-primary-contrast text-sm tracking-[0.25px] leading-[20px]">
            Admissão Auto Service © 2025 - Todos os direitos reservados
          </p>
        </div>
      <div className="flex flex-col items-center justify-center w-full">
        <p className="font-m3-body-medium text-white opacity-30 text-sm tracking-[0.25px] leading-[20px]">
          Site desenvolvido por <a href="https://www.agilitycreative.com/" target="_blank" rel="noopener noreferrer">Agility Creative</a>
        </p>
      </div>
      </div>
    </footer>
  );
}
