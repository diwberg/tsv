"use client";

import React, { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface Client {
  id: number;
  name: string;
  logo: string; // Mudando de 'image' para 'logo' para ser mais específico
}

interface ClientCarouselProps {
  clients: Client[];
  className?: string;
}

export const ClientCarousel = ({ clients, className }: ClientCarouselProps) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);
  const positionRef = useRef(0);

  // Criar múltiplas cópias para loop infinito
  const duplicatedClients = [...clients, ...clients, ...clients];
  const itemWidth = 92; // Aumentando para acomodar melhor o círculo
  const totalWidth = clients.length * itemWidth;

  useEffect(() => {
    const animate = () => {
      if (!isPaused && containerRef.current) {
        positionRef.current -= 0.8; // Velocidade um pouco mais rápida
        
        // Reset quando chegar ao final de uma sequência
        if (Math.abs(positionRef.current) >= totalWidth) {
          positionRef.current = 0;
        }
        
        containerRef.current.style.transform = `translateX(${positionRef.current}px)`;
      }
      
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isPaused, totalWidth]);

  const handleMouseEnter = (clientId: number) => {
    setHoveredIndex(clientId);
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
    setIsPaused(false);
  };

  return (
    <div className={cn("max-w-screen overflow-hidden", className)}>
      <div
        ref={containerRef}
        className="flex items-center"
      >
        {duplicatedClients.map((client, idx) => (
          <div
            key={`${client.id}-${idx}`}
            className="flex-shrink-0" // Aumentando o gap
          >
            <ClientLogo
              client={client}
              hoveredIndex={hoveredIndex}
              handleMouseEnter={handleMouseEnter}
              handleMouseLeave={handleMouseLeave}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

interface ClientLogoProps {
  client: Client;
  hoveredIndex: number | null;
  handleMouseEnter: (clientId: number) => void;
  handleMouseLeave: () => void;
}

const ClientLogo = ({
  client,
  hoveredIndex,
  handleMouseEnter,
  handleMouseLeave,
}: ClientLogoProps) => {
  const isHovered = hoveredIndex === client.id;

  return (
    <div
      className="group relative"
      onMouseEnter={() => handleMouseEnter(client.id)}
      onMouseLeave={handleMouseLeave}
    >
      {/* Círculo com Logo */}
      <div
        className={cn(
          "relative w-20 h-20 m-3 rounded-full border-2 border-border bg-card flex items-center justify-center transition-all duration-500 overflow-hidden",
          isHovered && "scale-110 border-primary shadow-lg"
        )}
      >
        {/* Logo da Empresa */}
        <Image
          src={client.logo}
          width={80}
          height={80}
          alt={`Logo ${client.name}`}
          className={cn(
            "max-w-full max-h-full object-contain transition-all duration-500",
            isHovered && "scale-105"
          )}
          style={{
            width: '80%',
            height: '80%',
            objectFit: 'contain'
          }}
        />
      </div>
    </div>
  );
};

// Componente de exemplo com dados de clientes
export const ClientCarouselExample = () => {
  const clients: Client[] = [
    {
      id: 1,
      name: "Cargill",
      logo: "/clients/logocargill.avif",
    },
    {
      id: 2,
      name: "Super Frango",
      logo: "/clients/logosuperfrango.avif",
    },
    {
      id: 3,
      name: "Boi Brasil",
      logo: "/clients/logoboibrasil.avif",
    },
    {
      id: 4,
      name: "BRF",
      logo: "/clients/logobrf.avif",
    },
    {
      id: 5,
      name: "Nutriforte",
      logo: "/clients/logonutriforte.avif",
    },
    {
      id: 6,
      name: "Adimax",
      logo: "/clients/logoadimax.avif",
    },
    {
      id: 7,
      name: "Guabi",
      logo: "/clients/logoguabi.avif",
    },
    {
      id: 8,
      name: "JBS",
      logo: "/clients/logojbs.avif",
    },
    {
      id: 9,
      name: "Matsuda",
      logo: "/clients/logomatsuda.avif",
    },
    {
      id: 10,
      name: "Pantanal",
      logo: "/clients/logopantanal.avif",
    },
    {
      id: 11,
      name: "Olé",
      logo: "/clients/logoole.avif",
    },
    {
      id: 12,
      name: "Amaggi",
      logo: "/clients/logoamaggi.avif",
    },
    {
      id: 13,
      name: "Plena",
      logo: "/clients/logoplena.avif",
    },
    {
      id: 14,
      name: "Boeauvalett",
      logo: "/clients/logoboeauvalett.avif",
    },
    {
      id: 15,
      name: "Granol",
      logo: "/clients/logogranol.avif",
    },
    {
      id: 16,
      name: "Cedro",
      logo: "/clients/logocedro.avif",
    },

    
  ];

  return (
    <div className="md:py-10 py-3">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-foreground mb-2">
        Empresas líderes em seus setores que escolheram nossos serviços
        </h2>
      </div>
      <ClientCarousel clients={clients} />
    </div>
  );
};