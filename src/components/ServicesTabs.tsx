"use client";
import React from "react";
import { Card } from "@/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  useTabs,
} from "@/components/ui/tabs";
import Image from "next/image";

type ServiceCategory = {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
};

interface ServicesTabsProps {
  id?: string;
  serviceCategories: ServiceCategory[];
}

const ServicesTabs: React.FC<ServicesTabsProps> = ({
  id,
  serviceCategories,
}) => {
  const iconPositions = [
    "top-[35%] left-[35%] 2xl:top-[35%] 2xl:left-[42%]",
    "top-[50%] left-[73%] 2xl:top-[50%] 2xl:left-[65%]",
    "top-[37%] left-[20%] 2xl:top-[37%] 2xl:left-[30%]",
    "top-[37%] left-[11%] 2xl:top-[37%] 2xl:left-[24%]",
    "top-[62%] left-[50%] 2xl:top-[62%] 2xl:left-[50%]",
    "top-[30%] left-[55%] 2xl:top-[30%] 2xl:left-[55%]",
  ];

  // Componente interno para renderizar os ícones com acesso ao contexto das tabs
  function ServiceIcons() {
    const tabsCtx = useTabs();
    return (
      <>
        {serviceCategories.map((cat, idx) => {
          const isActive = tabsCtx.value === cat.id;
          return (
            <div
              key={cat.id}
              className={`
                absolute
                ${iconPositions[idx]}
                w-6 h-6 md:h-10 md:w-10 flex items-center justify-center p-1.5 md:p-2.5 rounded-full transition
                ${
                  isActive
                    ? "bg-white text-black shadow-lg"
                    : "bg-black text-white"
                }
                cursor-pointer
              `}
              onClick={() => tabsCtx.setValue(cat.id)}
            >
              {cat.icon}
            </div>
          );
        })}
      </>
    );
  }

  return (
    <section id={id} className="w-full max-w-[954px] 2xl:max-w-[1280px]">
      <div className="flex flex-col items-center gap-12 py-2.5">
        <div className="flex flex-col items-center gap-24 w-full">
          <div className="w-full relative">
            <Image
              src={"/images/vector.svg"}
              alt="admissao vector"
              width={420}
              height={206}
              className="absolute -left-60 -top-10"
            />
            <h2 className="font-extrabold font-sans text-primary text-2xl sm:text-3xl leading-10">
              SERVIÇOS ADMISSÃO
            </h2>
            <p className="font-normal font-sans text-primary text-xs sm:text-sm tracking-wide leading-5 max-w-[590px] 2xl:max-w-full mt-2">
              Conheça alguns dos serviços que oferemos aqui na Admissão Auto
              Service. Desde revisões de rotina até os problemas mais sérios de
              motor, câmbio ou similar, conte sempre com a equipe especializada
              de uma de nossas unidades em Fortaleza/CE.
            </p>
          </div>
        </div>
        <Card className="w-full shadow-[0px_0px_40.5px_#00000008] rounded-[10px]">
          <Tabs defaultValue={serviceCategories[0].id}>
            <TabsList className="w-full h-auto rounded-[10px_10px_0px_0px] overflow-x-auto bg-primary-contrast p-0 flex">
              {serviceCategories.map((category) => {
                return (
                  <TabsTrigger
                    key={category.id}
                    value={category.id}
                    className={`flex-1 flex flex-col items-center gap-4 py-5 px-0 h-48 rounded-none min-w-[150px] max-w-[200px] 2xl:min-w-0 2xl:max-w-none`}
                  >
                    <div className="flex flex-col items-center">
                      <div
                        className={`h-8 w-8 flex items-center justify-center rounded-full transition`}
                      >
                        {category.icon}
                      </div>
                      <div className="font-semibold font-sans text-black text-sm sm:text-base text-center mt-2">
                        {category.title}
                      </div>
                    </div>
                    <div className="font-normal font-sans text-[#3c3c3cc3] text-xs sm:text-sm text-center line-clamp-3">
                      {category.description}
                    </div>
                  </TabsTrigger>
                );
              })}
            </TabsList>
            {serviceCategories.map((category) => (
              <TabsContent
                key={category.id}
                value={category.id}
                className="flex flex-col items-center justify-center rounded-[0px_0px_10px_10px] bg-[radial-gradient(50%_50%_at_50%_50%,rgba(255,255,255,1)_0%,rgba(221,221,221,1)_100%)]"
              >
                <div className="w-full max-w-[954px] 2xl:max-w-[1280px] max-h-[330px] mx-auto">
                  <div className="w-full h-[200px] sm:h-[250px] md:h-[330px] 2xl:px-48 bg-[url(/images/car-services.png)] bg-contain bg-center bg-no-repeat relative">
                    <ServiceIcons />
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </Card>
      </div>
    </section>
  );
};

export default ServicesTabs;
