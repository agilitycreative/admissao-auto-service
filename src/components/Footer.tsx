import React from "react";
import Image from "next/image";

export default function Footer(): React.ReactElement {
  return (
    <footer className="-mx-4 w-[100vw] max-w-none flex items-center justify-center bg-secondary py-6">
      <div className="flex flex-wrap gap-y-2 justify-center w-full max-w-[954px] 2xl:max-w-[1280px] items-center md:justify-between px-4 md:px-0">
        <div className="flex flex-col items-start">
          <p className="font-m3-body-medium text-primary-contrast text-sm tracking-[0.25px] leading-[20px]">
            © 2025 Admissão Auto Service, Todos os direitos reservados
          </p>
        </div>

        <a className="flex items-center mr-2 md:mr-[95px] cursor-pointer" target="_blank" href="https://www.agilitycreative.com/">
          <Image
            src="/images/agility-logo.png"
            alt="Agility Logo"
            height={32}
            width={100}
            className="w-auto h-6 md:h-8"
            priority
          />
        </a>
      </div>
    </footer>
  );
}
