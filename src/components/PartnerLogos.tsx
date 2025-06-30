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
  <div className="w-full flex justify-center overflow-x-hidden items-center gap-20 opacity-40 max-w-[954px]">
    {partnerLogos.map((logo) => (
      <Image
        key={logo.id}
        className="size-9 object-cover flex-shrink-0"
        alt={logo.alt}
        src={logo.src}
        width={100}
        height={35}
      />
    ))}
  </div>
);

export default PartnerLogos;
