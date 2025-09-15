import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Services() {

  const services = [
    {
      name: "Trocador de Calor",
      designation: "Manutenção, Calibração e Venda",
      quote: "Estudos para Ampliação fabricação e Manutenção de Trocadores a placa",
      src: "/services/service-1.jpg",
    },
    {
      name: "Eficiência Energética",
      designation: "Manutenção, Calibração e Venda",
      quote: "Soluções  para manutenções e adequações de sistemas de drenagem e reaproveitamento do vapor flash, com análise de câmera termográfica e laudos técnicos.",
      src: "/services/service-2.jpg",
    },
    {
      name: "Válvulas e Purgadores",
      designation: "Manutenção, Calibração e Venda",
      quote: "Serviços técnicos de manutenção e calibração, são realizados por instrumentistas, técnicos em mecânica altamente treinados e qualificados.",
      src: "/services/service-1.jpg",
    },
    {
      name: "Válvulas e Purgadores",
      designation: "Manutenção, Calibração e Venda",
      quote: "Serviços técnicos de manutenção e calibração, são realizados por instrumentistas, técnicos em mecânica altamente treinados e qualificados.",
      src: "/services/service-1.jpg",
    },

  ]
  
  return (
    <div className="md:py-8 py-4 bg-muted/30" id="services">
      <h1 className="text-4xl font-bold text-center">Nossos Serviços</h1>
      <AnimatedTestimonials testimonials={services} autoplay />
      <div className="flex justify-center items-center">
        <Link href="/services" className="text-primary hover:cursor-pointer">
          <Button variant="link" className="hover:cursor-pointer">Ver todos os serviços</Button>
        </Link>
      </div>
    </div>
  );
}