import React from "react";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";

type ServiceCategory = {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
};

interface ServicesTabsProps {
  serviceCategories: ServiceCategory[];
}

const ServicesTabs: React.FC<ServicesTabsProps> = ({ serviceCategories }) => {
  const iconPositions = [
    { top: "28%", left: "23.14%" },
    { top: "50%", left: "50%" },
    { top: "40%", left: "14%" },
    { top: "30%", left: "6%" },
    { top: "50%", left: "30%" },
    { top: "40%", left: "40.10%" },
  ];

  return (
    <section className="w-full max-w-[954px]">
      <div className="flex flex-col items-center gap-12 py-2.5">
        <div className="flex flex-col items-center gap-24 w-full">
          <div className="w-full relative">
            <Image
              src={"/images/vector.svg"}
              alt="admissao vector"
              width={420}
              height={206}
              className="absolute -left-72 -top-4"
            />
            <h2 className="font-['Roboto-ExtraBold'] font-extrabold text-primary text-3xl leading-10">
              SERVIÇOS ADMISSÃO
            </h2>
            <p className="font-['Montserrat-Regular'] font-normal text-primary text-sm tracking-[0.25px] leading-5 max-w-[590px] mt-1.5">
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
                    className={`flex-1 flex flex-col items-center gap-4 py-5 px-0 h-[184px] rounded-none`}
                  >
                    <div className="flex flex-col items-center">
                      <div
                        className={`h-8 w-8 flex items-center justify-center rounded-full transition`}
                      >
                        {category.icon}
                      </div>
                      <div className="font-['Roboto-SemiBold'] font-semibold text-black text-base text-center mt-2">
                        {category.title}
                      </div>
                    </div>
                    <div className="font-['Roboto-Regular'] font-normal text-[#3c3c3cc3] text-sm text-center line-clamp-3">
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
                <div className="w-full max-w-[954px] max-h-[330px] mx-auto">
                  <div className="w-full h-[200px] sm:h-[250px] md:h-[330px] bg-[url(/images/car-services.png)] bg-contain bg-center bg-no-repeat relative">
                    {serviceCategories.map((cat, idx) => {
                      const isActive = cat.id === category.id;
                      const pos = iconPositions[idx] || {
                        top: "0px",
                        left: "0px",
                      };
                      return (
                        <div
                          key={cat.id}
                          style={{
                            position: "absolute",
                            top: pos.top,
                            left: pos.left,
                          }}
                          className={`w-8 h-8 md:h-10 md:w-10 flex items-center justify-center p-1.5 md:p-2.5 rounded-full transition
                            ${
                              isActive
                                ? "bg-white text-black shadow-lg"
                                : "bg-black text-white"
                            }
                          `}
                        >
                          {cat.icon}
                        </div>
                      );
                    })}
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
