import Image from "next/image";
import React from "react";

const Frame = (): React.ReactElement => {
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
    <div className="mt-6 fixed z-50 flex w-[954px] justify-between p-5 bg-[#000000c2] rounded-[500px] items-center">
      <div className="inline-flex items-center gap-[11px]">
        <Image
          className="w-[161px] h-6"
          alt="Admissão logo symbol"
          width={160}
          height={24}
          src="/images/logo-marca-white.png"
        />
      </div>

      <div className="inline-flex gap-10 items-center">
        {navItems.map((item, index) => (
          <div key={`nav-item-${index}`}>
            <div className="font-semibold text-white text-sm [font-family:'Montserrat-SemiBold',Helvetica]">
              {item.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Frame;
