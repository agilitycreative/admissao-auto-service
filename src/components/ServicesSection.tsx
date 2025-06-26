import React from "react";
import PartnerLogos from "./PartnerLogos";
import AboutUsSection from "./AboutUsSection";
import ServicesTabs from "./ServicesTabs";
import ServiceSteps from "./ServiceSteps";
import LocationsSection from "./LocationsSection";
import FAQSection from "./FAQSection";
import ContactSection from "./ContactSection";
import Image from "next/image";

const ServicesSection = (): React.ReactElement => {
  // Partner logos data
  const partnerLogos = [
    { id: 1, src: "", alt: "Partner Logo 1" },
    { id: 2, src: "", alt: "Partner Logo 2" },
    { id: 3, src: "", alt: "Partner Logo 3" },
    { id: 4, src: "", alt: "Partner Logo 4" },
    { id: 5, src: "", alt: "Partner Logo 5" },
    { id: 6, src: "", alt: "Partner Logo 6" },
    { id: 7, src: "", alt: "Partner Logo 7" },
    { id: 8, src: "", alt: "Partner Logo 8" },
  ];

  // Service categories data
  const serviceCategories = [
    {
      id: "eletrica",
      title: "Elétrica",
      description: "Sistema elétrico completo",
      icon: <></>,
    },
    {
      id: "suspensao",
      title: "Suspensão",
      description: "Amortecedores e molas novas e originais",
      icon: <></>,
    },
    {
      id: "motor",
      title: "Motor",
      description: "Bloco, cabeçote e Injeção eletrônica",
      icon: <></>,
    },
    {
      id: "troca-oleo",
      title: "Troca de Óleo",
      description: "Óleos e filtros de qualidade",
      icon: <></>,
    },
    {
      id: "alinhamento",
      title: "Alinhamento",
      description: "Balanceamento e geometria",
      icon: <></>,
    },
    {
      id: "outros",
      title: "Outros",
      description: "Consulte para saber mais",
      icon: <></>,
    },
  ];

  // Service steps data
  const serviceSteps = [
    {
      id: 1,
      title: "Agende sua visita",
      icon: <></>,
    },
    {
      id: 2,
      title: "Análise do Veículo",
      icon: <></>,
    },
    {
      id: 3,
      title: "Entrega do Orçamento",
      icon: <></>,
    },
    {
      id: 4,
      title: "Realização do Serviços",
      subtitle: "Monitore com vídeos",
      icon: <></>,
    },
    {
      id: 5,
      title: "Veículo entregue",
      subtitle: "Garantia Admissão",
      icon: <></>,
    },
  ];

  // Locations data
  const locations = [
    {
      id: 1,
      name: "Admissão Sapiranga",
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi.",
      address: "Lorem ipsum dolor sit, 2900 - Sapiranga",
      phone: "(85) 9 9837-2938 | 3390-2039",
      image: "",
    },
    {
      id: 2,
      name: "Admissão Guararapes",
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi.",
      address: "Lorem ipsum dolor sit, 2900 - Sapiranga",
      phone: "(85) 9 9837-2938 | 3390-2039",
      image: "",
    },
  ];

  // FAQ data
  const faqItems = [
    {
      id: "item-1",
      question: "Meu carro está estranhos ou com problemas, o que devo fazer?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus..",
    },
    {
      id: "item-2",
      question: "Meu carro está estranhos ou com problemas, o que devo fazer?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus..",
    },
    {
      id: "item-3",
      question: "Meu carro está estranhos ou com problemas, o que devo fazer?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus..",
    },
    {
      id: "item-4",
      question: "Meu carro está estranhos ou com problemas, o que devo fazer?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus..",
    },
  ];

  // Contact info data
  const contactInfo = [
    {
      id: 1,
      title: "Horário de funcionamento",
      details: "Segunda - Sexta\n08:30 as 18:00",
      icon: <></>,
    },
    {
      id: 2,
      title: "Cidade dos Funcionários",
      details: "Av. Desembargador Gonzaga, 158\n(85) 9 9609-3955",
      icon: <></>,
    },
    {
      id: 3,
      title: "Sapiranga",
      details: "Av. Presidente Arthur Bernardes, 2116\n(85) 9 9609-3955",
      icon: <></>,
    },
  ];

  return (
    <div className="flex flex-col items-center gap-20 w-full">
      <PartnerLogos partnerLogos={partnerLogos} />
      <AboutUsSection />
      <ServicesTabs serviceCategories={serviceCategories} />
      <ServiceSteps serviceSteps={serviceSteps} />
      <LocationsSection locations={locations} />
      <section className="w-full">
        <div className="max-w-[950px] mx-auto flex gap-32">
          <FAQSection faqItems={faqItems} />
          <div className="w-[337px] relative">
            <div className="w-[369px] h-[436px] relative left-[-29px]">
              <Image
                className="w-full h-full object-cover"
                alt="Service image"
                src="/service-image.png"
                width={369}
                height={436}
              />
              <div className="absolute w-[280px] h-[383px] top-6 left-[39px]">
                <div className="flex items-center gap-2.5 absolute top-0 left-0">
                  <Image
                    className="w-[50.24px] h-6"
                    alt="Logo part 1"
                    src="/logo1.png"
                    width={50}
                    height={24}
                  />
                  <Image
                    className="w-[100.01px] h-[24.71px]"
                    alt="Logo part 2"
                    src="/logo2.png"
                    width={100}
                    height={25}
                  />
                </div>
                <h3 className="absolute w-[278px] top-[251px] left-0 font-sans font-extrabold text-primary-contrast text-2xl leading-10">
                  Diagnóstico, Análise e Manutenção
                </h3>
                <button className="absolute top-[346px] left-0 flex items-center justify-center gap-2.5 rounded-[100px] border border-white bg-transparent text-primary-contrast px-5 py-2">
                  ENTRAR EM CONTATO
                  <Image
                    className="w-[18px] h-[18.01px]"
                    alt="WhatsApp icon"
                    src="/whatsapp.png"
                    width={18}
                    height={18}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ContactSection contactInfo={contactInfo} />
    </div>
  );
};

export default ServicesSection;
