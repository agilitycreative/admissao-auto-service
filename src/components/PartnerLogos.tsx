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
  <div className="w-full flex items-center overflow-x-hidden max-w-[954px] 2xl:max-w-[1280px] justify-center gap-20 opacity-40 2xl:justify-between 2xl:gap-0">
    {partnerLogos.map((logo) => (
      <Image
        key={logo.id}
        className="size-9 2xl:size-16 object-cover flex-shrink-0"
        alt={logo.alt}
        src={logo.src}
        width={100}
        height={35}
      />
    ))}
  </div>
);

export default PartnerLogos;
