"use client"
import { HoverEffect } from "@/components/ui/card-hover-effect"

export function Specs() {

    const industries = [
        {
            title: "Manutenção e Calibração de Válvulas",
            description: "Válvulas de segurança, controle, redutoras, reguladoras e purgadores. Calibração de instrumentos de pressão e temperatura.",
            link: "#"
        },
        {
            title: "Inspeções NR-13",
            description: "Inspeções em caldeiras, vasos de pressão, tubulações e reservatórios metálicos, sempre em conformidade com as normas regulamentadoras.",
            link: "#"
        },
        {
            title: "Serviços NR-12",
            description: "Proteção de máquinas e equipamentos com laudos e adequações, garantindo segurança operacional.",
            link: "#"
        },
        {
            title: "Trocadores de Calor",
            description: "Estudos, ampliação e manutenção de trocadores de calor a placas para otimização de processos industriais.",
            link: "#"
        },
        {
            title: "Parcerias Estratégicas",
            description: "Parceria com marcas reconhecidas como SF International e WDISP (WEG), garantindo qualidade e confiabilidade.",
            link: "#"
        },
        {
            title: "Supervisão Técnica",
            description: "Todos os projetos são conduzidos sob supervisão de engenheiros mecânicos com ART emitida pelo responsável técnico.",
            link: "#"
        },
        {
            title: "E muito mais",
            description: "Na TSV-TEC, aliamos experiência de campo, tecnologia e rigor técnico para oferecer resultados confiáveis e duradouros. Conduzido sob a supervisão de engenheiros mecânicos, garantindo qualidade e segurança com ART emitida pelo responsável técnico.",
            link: "#"
        }
    ]

    return (
        <section className="py-10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-foreground">
            Nossas especialidades
          </h2>
          <HoverEffect items={industries} />
        </div>
      </section>
    )
}