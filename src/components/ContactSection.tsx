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
    <div className="flex flex-col-reverse sm:relative w-full sm:h-[440px]">
      {/* Container para respeitar max-width */}
      <div className="w-full max-w-[954px] mx-auto relative">
        {/* Caixa de texto */}
        <div className="w-full sm:w-[300px] z-50 h-auto sm:h-[440px] bg-secondary-dark bg-opacity-90 py-6 px-8 sm:absolute sm:top-0 sm:left-0 sm:mx-0 sm:my-0">
          <h2 className="font-['Montserrat-Bold'] font-bold text-primary-contrast text-2xl leading-10">
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
                  <h3 className="font-['Montserrat-SemiBold'] font-semibold text-sm">
                    {info.title}
                  </h3>
                  <p className="font-['Montserrat-Regular'] font-normal text-sm whitespace-pre-line">
                    {info.details}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <Button className="flex mt-8 items-center text-sm justify-center gap-2.5 rounded-full border border-white bg-transparent text-primary-contrast w-full sm:w-[201px]">
            ENVIAR MENSAGEM
            <FaWhatsapp style={{ fontSize: 18 }} />
          </Button>
        </div>
      </div>
      {/* Imagem */}
      <div className="relative w-full h-96 md:h-[200px] sm:h-full md:mt-4 sm:mt-0">
        <Image
          src="/images/maps.png"
          alt="Contact background"
          width={800}
          height={200}
          className="object-cover w-full h-full sm:fill sm:absolute sm:inset-0"
          priority
        />
      </div>
    </div>
  </section>
);

export default ContactSection;
