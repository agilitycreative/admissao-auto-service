import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FaRegClock } from "react-icons/fa";
import { GoHome } from "react-icons/go";
import { FiMessageCircle } from "react-icons/fi";

import React from "react";
import { cn } from "@/lib/utils";

const HeroSection: React.FC = () => {
  return (
    <div className=" w-full h-[686px]">
      <div className="w-full h-[686px] top-0 left-0 bg-[url('/images/hero-img.png')] bg-cover bg-[50%_50%] relative">
        <div className="absolute w-[494px] h-[215px] top-56 left-[243px]">
          <h1 className="absolute w-[424px] top-0 left-0 [font-family:'Montserrat-ExtraBold',Helvetica] font-extrabold text-white text-[32px] tracking-[0] leading-[normal]">
            Sua oficina mecânica de confiança em Fortaleza!
          </h1>

          <p className="absolute w-[490px] top-[99px] left-0 [font-family:'Montserrat-Medium',Helvetica] font-medium text-white text-sm tracking-[0] leading-[normal]">
            Especialistas em manutenção automotiva com mais de 15 anos de
            experiência. Qualidade, confiança e atendimento personalizado.
          </p>

          <Button className="absolute top-[167px] left-0 inline-flex items-center justify-center gap-2.5 px-5 py-[15px] bg-green-600 rounded-[100px] h-auto">
            <span className="relative w-fit mt-[-0.50px] [font-family:'Montserrat-SemiBold',Helvetica] font-semibold text-white text-sm tracking-[0] leading-[normal]">
              ENTRAR EM CONTATO
            </span>
            <FiMessageCircle style={{ fontSize: 18, color: "white" }} />
          </Button>
        </div>

        <Card className="bg-[#00000080] w-full items-center justify-center gap-2.5 px-5 py-10 absolute bottom-0 left-0 border-none rounded-none">
          <CardContent className="flex w-full max-w-[952px] mx-auto items-center gap-8 md:gap-20 p-0">
            <div className="inline-flex items-center gap-5 relative flex-[0_0_auto]">
              <FaRegClock style={{ fontSize: 24, color: "white" }} />
              <div className="relative w-[195px] h-[51px] mr-[-4.00px]">
                <h3 className="absolute top-0 left-0 [font-family:'Montserrat-SemiBold',Helvetica] font-semibold text-white text-sm tracking-[0] leading-[normal]">
                  Horário de funcionamento
                </h3>

                <p className="absolute top-[17px] left-0 [font-family:'Montserrat-Regular',Helvetica] font-normal text-white text-sm tracking-[0] leading-[normal]">
                  Segunda - Sexta
                  <br />
                  08:30 as 18:00
                </p>
              </div>
            </div>

            <div className="inline-flex items-center gap-5 relative flex-[0_0_auto]">
              <GoHome style={{ fontSize: 24, color: "white" }} />
              <div className="gap-10  relative flex-[0_0_auto] inline-flex items-start">
                <div className="relative w-[235px] h-[55px]">
                  <h3 className="absolute top-0 left-0 [font-family:'Montserrat-SemiBold',Helvetica] font-semibold text-white text-sm tracking-[0] leading-[normal]">
                    Cidade dos Funcionários
                  </h3>

                  <div className="gap-[15px] absolute top-[21px] left-0 inline-flex items-start">
                    <p className="relative w-fit mt-[-1.00px] [font-family:'Montserrat-Regular',Helvetica] font-normal text-white text-sm tracking-[0] leading-[normal]">
                      Av. Desembargador Gonzaga, 158
                      <br />
                      (85) 9 9609-3955
                    </p>
                  </div>
                </div>

                <div className="inline-flex items-start justify-center gap-[46px] relative flex-[0_0_auto]">
                  <div className="relative w-[262px] h-[51px] mr-[-4.00px]">
                    <h3 className="absolute top-0 left-0 [font-family:'Montserrat-SemiBold',Helvetica] font-semibold text-white text-sm tracking-[0] leading-[normal]">
                      Sapiranga
                    </h3>

                    <p className="absolute top-[17px] left-0 [font-family:'Montserrat-Regular',Helvetica] font-normal text-white text-sm tracking-[0] leading-[normal]">
                      Av. Presidente Arthur Bernardes, 2116
                      <br />
                      (85) 9 9609-3955
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default HeroSection;
