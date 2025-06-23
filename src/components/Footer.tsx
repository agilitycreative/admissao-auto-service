import { BiLogoInstagramAlt } from "react-icons/bi";
import { FaFacebook } from "react-icons/fa";
import React from "react";

export default function Footer(): React.ReactElement {
  return (
    <footer className="w-[100%] flex items-center justify-center bg-secondary py-6">
      <div className="flex w-full max-w-[954px] items-center justify-between">
        <div className="flex flex-col items-start">
          <p className="font-m3-body-medium text-primary-contrast text-sm tracking-[0.25px] leading-[20px]">
            © 2025 Admissão Auto Service, Todos os direitos reservados
          </p>
        </div>

        <div className="flex items-center gap-3">
          <a href="#" aria-label="Instagram">
            <BiLogoInstagramAlt style={{ fontSize: 24, color: "white" }} />
          </a>
          <a href="#" aria-label="Facebook">
            <FaFacebook style={{ fontSize: 24, color: "white" }} />
          </a>
        </div>
      </div>
    </footer>
  );
}
