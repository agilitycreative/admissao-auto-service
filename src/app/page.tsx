import dynamic from "next/dynamic";
import HeroSection from "@/components/HeroSection";
import PartnerLogos from "@/components/PartnerLogos";
import AboutUsSection from "@/components/AboutUsSection";
import ServicesTabs from "@/components/ServicesTabs";
const ServiceSteps = dynamic(() => import("@/components/ServiceSteps"));
const FAQSection = dynamic(() => import("@/components/FAQSection"));
const Footer = dynamic(() => import("@/components/Footer"));
import ContactSection from "@/components/ContactSection";
import React from "react";
import Header from "@/components/Header";
import { BiSolidZap } from "react-icons/bi";
import { FaCarSide, FaOilCan, FaTools } from "react-icons/fa";
import { IoMdSettings, IoMdTime } from "react-icons/io";
import { PiEngineFill } from "react-icons/pi";
import { LuHouse } from "react-icons/lu";
import InstagramTimelineSection from "@/components/InstagramTimelineSection";

export default function Home() {
  const partnerLogos = [
    { id: 1, src: "/images/citroen-logo.png", alt: "Partner Logo 1" },
    { id: 2, src: "/images/bmw-logo.png", alt: "Partner Logo 2" },
    { id: 3, src: "/images/peugeot-logo.png", alt: "Partner Logo 3" },
    { id: 4, src: "/images/audi-logo.png", alt: "Partner Logo 4" },
    { id: 5, src: "/images/citroen-logo.png", alt: "Partner Logo 5" },
    { id: 6, src: "/images/bmw-logo.png", alt: "Partner Logo 6" },
    { id: 7, src: "/images/peugeot-logo.png", alt: "Partner Logo 7" },
    { id: 8, src: "/images/audi-logo.png", alt: "Partner Logo 8" },
  ];

  const serviceCategories = [
    {
      id: "eletrica",
      title: "Elétrica",
      description: "Sistema elétrico completo",
      icon: <BiSolidZap style={{ fontSize: 30 }} />,
    },
    {
      id: "suspensao",
      title: "Suspensão",
      description: "Amortecedores e molas novas e originais",
      icon: <FaCarSide style={{ fontSize: 37.5 }} />,
    },
    {
      id: "motor",
      title: "Motor",
      description: "Bloco, cabeçote e Injeção eletrônica",
      icon: <PiEngineFill style={{ fontSize: 35 }} />,
    },
    {
      id: "troca-oleo",
      title: "Troca de Óleo",
      description: "Óleos e filtros de qualidade",
      icon: <FaOilCan style={{ fontSize: 37.5 }} />,
    },
    {
      id: "alinhamento",
      title: "Alinhamento",
      description: "Balanceamento e geometria",
      icon: <IoMdSettings style={{ fontSize: 30 }} />,
    },
    {
      id: "outros",
      title: "Outros",
      description: "Consulte para saber mais",
      icon: <FaTools style={{ fontSize: 30 }} />,
    },
  ];

  const serviceSteps = [
    {
      id: 1,
      title: "Agende sua visita",
      icon: <FaCarSide className="w-7 h-5" />,
    },
    {
      id: 2,
      title: "Análise do Veículo",
      icon: <FaCarSide className="w-7 h-5" />,
    },
    {
      id: 3,
      title: "Entrega do Orçamento",
      icon: <FaCarSide className="w-7 h-5" />,
    },
    {
      id: 4,
      title: "Realização do Serviços",
      subtitle: "Monitore com vídeos",
      icon: <FaCarSide className="w-7 h-5" />,
    },
    {
      id: 5,
      title: "Veículo entregue",
      subtitle: "Garantia Admissão",
      icon: <FaCarSide className="w-7 h-5" />,
    },
  ];

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

  const contactInfo = [
    {
      id: 1,
      title: "Horário de funcionamento",
      details: "Segunda - Sexta\n08:30 as 18:00",
      icon: <IoMdTime className="size-6" />,
    },
    {
      id: 2,
      title: "Cidade dos Funcionários",
      details: "Av. Desembargador Gonzaga, 158\n(85) 9 9609-3955",
      icon: <LuHouse className="size-6" />,
    },
  ];

  return (
    <div className="flex flex-col items-center w-full gap-16 md:gap-20 px-4">
      <Header />
      <HeroSection id="inicio" />
      <PartnerLogos partnerLogos={partnerLogos} />
      <AboutUsSection id="sobre" />
      <ServicesTabs id="servicos" serviceCategories={serviceCategories} />
      <ServiceSteps serviceSteps={serviceSteps} />
      <InstagramTimelineSection id="instagram" />
      <FAQSection id="faq" faqItems={faqItems} />
      <div className="w-full">
        <ContactSection id="contato" contactInfo={contactInfo} />
        <Footer />
      </div>
    </div>
  );
}
