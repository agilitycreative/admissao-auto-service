import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";
import {
  getWhatsAppLink,
  WHATSAPP_PHONE,
  WHATSAPP_DEFAULT_MESSAGE,
} from "@/lib/utils";

type ContactInfo = {
  id: number;
  title: string;
  details: string;
  icon: React.ReactNode;
};

interface ContactSectionProps {
  id?: string;
  contactInfo: ContactInfo[];
}

const ContactSection = ({ id, contactInfo }: ContactSectionProps) => (
  <section id={id} className="-mx-4 w-[100vw] max-w-none">
    <div className="flex flex-col-reverse sm:block sm:relative sm:h-[440px]">
      {/* Container da Caixa de Texto (em desktop, vira um overlay) */}
      <div className="w-full sm:absolute sm:inset-0 sm:z-10">
        <div className="h-full max-w-[954px] 2xl:max-w-[1440px] mx-auto sm:relative">
          {/* Caixa de Texto */}
          <div className="w-full sm:w-[300px] sm:h-full bg-secondary-dark bg-opacity-90 py-6 px-8">
            <h2 className="font-bold font-sans text-primary-contrast text-xl sm:text-2xl leading-10">
              FALE CONOSCO
            </h2>
            <div className="flex flex-col pt-2 pb-6 gap-8 w-full sm:w-[241px]">
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
            <a
              href={getWhatsAppLink(WHATSAPP_PHONE, WHATSAPP_DEFAULT_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4"
            >
              <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-primary-contrast font-semibold text-sm shadow hover:bg-primary-dark transition-colors">
                ENTRAR EM CONTATO
                <FaWhatsapp style={{ fontSize: 18 }} />
              </button>
            </a>
          </div>
        </div>
      </div>

      {/* Container do Mapa */}
      <div className="relative w-full h-96 sm:h-full">
        <iframe
          src="https://www.google.com/maps/d/u/0/embed?mid=17gmyxkquP9i_jkVcIY1CNFZjM7vihNk&ehbc=2E312F&noprof=1"
          width="100%"
          height="100%"
          loading="lazy"
          style={{ border: 0, minHeight: 300, borderRadius: 8 }}
          allowFullScreen={true}
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  </section>
);

export default ContactSection;
