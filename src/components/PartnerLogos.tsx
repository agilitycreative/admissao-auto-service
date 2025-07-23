"use client";
import React from "react";
import Image from "next/image";

type PartnerLogo = {
  id: number;
  src: string;
  alt: string;
};

interface PartnerLogosProps {
  partnerLogos: PartnerLogo[];
}

const PartnerLogos: React.FC<PartnerLogosProps> = ({ partnerLogos }) => {
  return (
    <div className="w-full overflow-hidden max-w-[954px] 2xl:max-w-[1280px] opacity-40">
      <div
        className="flex animate-[scroll_30s_linear_infinite]"
        style={{
          width: "max-content",
        }}
      >
        {/* Primeira sequência */}
        {partnerLogos.map((logo) => (
          <Image
            key={`original-${logo.id}`}
            className="size-9 2xl:size-16 object-contain mr-20"
            alt={logo.alt}
            src={logo.src}
            width={100}
            height={35}
          />
        ))}

        {/* Segunda sequência — idêntica à primeira */}
        {partnerLogos.map((logo) => (
          <Image
            key={`clone-${logo.id}`}
            className="size-9 2xl:size-16 object-contain mr-20"
            alt={logo.alt}
            src={logo.src}
            width={100}
            height={35}
          />
        ))}
      </div>
    </div>
  );
};

export default PartnerLogos;
