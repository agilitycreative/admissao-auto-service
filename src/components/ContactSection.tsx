import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";

type ContactInfo = {
  id: number;
  title: string;
  details: string;
  icon: React.ReactNode;
};

interface ContactSectionProps {
  contactInfo: ContactInfo[];
}

const ContactSection: React.FC<ContactSectionProps> = ({ contactInfo }) => (
  <section className="-mx-4 w-[100vw] max-w-none">
    <div className="flex flex-col-reverse sm:block sm:relative sm:h-[440px]">
      {/* Container da Caixa de Texto (em desktop, vira um overlay) */}
      <div className="w-full sm:absolute sm:inset-0 sm:z-10">
        <div className="h-full max-w-[954px] 2xl:max-w-[1440px] mx-auto sm:relative">
          {/* Caixa de Texto */}
          <div className="w-full sm:w-[300px] sm:h-full bg-secondary-dark bg-opacity-90 py-6 px-8">
            <h2 className="font-bold font-sans text-primary-contrast text-xl sm:text-2xl leading-10">
              FALE CONOSCO
            </h2>
            <div className="flex flex-col pt-2 gap-8 w-full sm:w-[241px]">
              {contactInfo.map((info) => (
                <div
                  key={info.id}
                  className="flex items-center gap-5 text-primary-contrast"
                >
                  {info.icon}
                  <div className="flex flex-col">
                    <h3 className="font-semibold font-sans text-xs sm:text-sm">
                      {info.title}
                    </h3>
                    <p className="font-normal font-sans text-xs sm:text-sm whitespace-pre-line">
                      {info.details}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <Button className="flex mt-8 items-center text-xs sm:text-sm justify-center gap-2.5 rounded-full border border-white bg-transparent text-primary-contrast w-full sm:w-[201px]">
              ENVIAR MENSAGEM
              <FaWhatsapp style={{ fontSize: 18 }} />
            </Button>
          </div>
        </div>
      </div>

      {/* Container da Imagem */}
      <div className="relative w-full h-96 sm:h-full">
        <Image
          src="/images/maps.png"
          alt="Contact background"
          fill
          className="object-cover"
        />
      </div>
    </div>
  </section>
);

export default ContactSection;
