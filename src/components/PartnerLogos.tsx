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

const PartnerLogos: React.FC<PartnerLogosProps> = ({ partnerLogos }) => (
  <div className="inline-flex items-center gap-[83px] pt-[61px] pb-1 opacity-40">
    {partnerLogos.map((logo) => (
      <Image
        key={logo.id}
        className="h-[35px] w-auto object-contain"
        alt={logo.alt}
        src={logo.src}
        width={100}
        height={35}
      />
    ))}
  </div>
);

export default PartnerLogos;
