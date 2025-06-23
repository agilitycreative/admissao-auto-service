import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FaRegClock } from "react-icons/fa";
import { GoHome } from "react-icons/go";
import { FaWhatsapp } from "react-icons/fa";

import React from "react";

const HeroSection: React.FC = () => {
  return (
    <div className="-mx-4 w-[100vw] max-w-none h-[686px]">
      <div className="w-full h-[686px] flex flex-col justify-between bg-[url('/images/hero-img.png')] bg-cover bg-[50%_50%] relative">
        <div className="bg-transparent w-full h-20"> </div>
        <div className="mx-auto p-4 items-start w-full max-w-[950px] flex flex-col gap-6">
          <h1 className="w-full mt-26 md:mt-0 max-w-[424px] text-center md:text-left [font-family:'Montserrat-ExtraBold',Helvetica] font-extrabold text-primary-contrast text-2xl md:text-3xl tracking-[0] leading-[normal]">
            Sua oficina mecânica de confiança em Fortaleza!
          </h1>

          <p className="max-w-[490px] text-center md:text-left [font-family:'Montserrat-Medium',Helvetica] font-medium text-primary-contrast text-sm tracking-[0] leading-[normal]">
            Especialistas em manutenção automotiva com mais de 15 anos de
            experiência. Qualidade, confiança e atendimento personalizado.
          </p>

          <Button className="inline-flex items-center justify-center gap-2.5 px-5 py-[15px] bg-accent-green rounded-[100px] h-auto w-full md:w-auto self-center md:self-start">
            <span className="relative w-fit mt-[-0.50px] [font-family:'Montserrat-SemiBold',Helvetica] font-semibold text-primary-contrast text-sm tracking-[0] leading-[normal]">
              ENTRAR EM CONTATO
            </span>
            <FaWhatsapp style={{ fontSize: 18, color: "white" }} />
          </Button>
        </div>

        <Card className="bg-secondary-overlay w-full items-center justify-center gap-2.5 px-5 py-0 md:py-10 border-none rounded-none">
          <CardContent className="flex flex-col sm:flex-row w-full max-w-[952px] mx-auto items-start gap-6 sm:gap-8 md:gap-20 p-0">
            {/* Horário de funcionamento */}
            <div className="flex items-center gap-5">
              <FaRegClock style={{ fontSize: 24, color: "white" }} />
              <div>
                <h3 className="font-['Montserrat-SemiBold'] font-semibold text-primary-contrast text-sm">
                  Horário de funcionamento
                </h3>
                <p className="font-['Montserrat-Regular'] font-normal text-primary-contrast text-sm">
                  Segunda - Sexta
                  <br />
                  08:30 as 18:00
                </p>
              </div>
            </div>

            {/* Cidade dos Funcionários */}
            <div className="flex items-start gap-5">
              <GoHome style={{ fontSize: 24, color: "white" }} />
              <div>
                <h3 className="font-['Montserrat-SemiBold'] font-semibold text-primary-contrast text-sm">
                  Cidade dos Funcionários
                </h3>
                <p className="font-['Montserrat-Regular'] font-normal text-primary-contrast text-sm">
                  Av. Desembargador Gonzaga, 158
                  <br />
                  (85) 9 9609-3955
                </p>
              </div>
            </div>

            {/* Sapiranga */}
            <div className="flex items-start gap-5">
              <GoHome style={{ fontSize: 24, color: "white" }} />
              <div>
                <h3 className="font-['Montserrat-SemiBold'] font-semibold text-primary-contrast text-sm">
                  Sapiranga
                </h3>
                <p className="font-['Montserrat-Regular'] font-normal text-primary-contrast text-sm">
                  Av. Presidente Arthur Bernardes, 2116
                  <br />
                  (85) 9 9609-3955
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default HeroSection;
