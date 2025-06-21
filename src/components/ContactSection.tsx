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
  <section className="w-full h-[436.25px]">
    <div className="w-full h-[438px] relative">
      <Image
        className="absolute w-full h-[437px] object-cover"
        alt="Contact background"
        src="/images/maps.png"
        fill
      />
      <div className="absolute w-[300px] h-[437px] left-60 bg-[#0e0e0ee6] py-6 px-8">
        <h2 className="font-['Montserrat-Bold'] font-bold text-white text-2xl leading-10">
          FALE CONOSCO
        </h2>
        <div className="flex flex-col pt-2 gap-[31px] w-[241px]">
          {contactInfo.map((info) => (
            <div key={info.id} className="flex items-center gap-5 text-white">
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
        <Button className="flex mt-8 items-center text-sm justify-center gap-2.5 rounded-full border border-white bg-transparent text-white w-[201px]">
          ENVIAR MENSAGEM
          <FaWhatsapp style={{ fontSize: 18 }} />
        </Button>
      </div>
    </div>
  </section>
);

export default ContactSection;
