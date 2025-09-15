export function Hero() {
    return (
    <section className="bg-gradient-to-r from-primary to-primary/50 text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Tecnologia em Sistemas de Vapor
            </h2>
            <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 max-w-4xl mx-auto">
            Com sede em Goiânia e atuação em todo o território nacional, prontos para atender 
            empresas dos mais diversos segmentos. 
            </p>
            <p className="mb-4 hidden md:block text-primary-foreground/90 max-w-4xl mx-auto">Nosso compromisso é apoiar cada operação na redução de perdas, otimização de processos e aumento da produtividade, sempre com foco na preservação de recursos e conformidade com normas regulamentadoras, como a NR-13.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-background text-primary px-8 py-3 rounded-lg font-semibold hover:bg-secondary/90 hover:text-white transition-colors">
                Solicitar Orçamento
            </button>
            <button className="border-2 border-background text-background px-8 py-3 rounded-lg font-semibold hover:bg-background hover:text-primary transition-colors">
                Conhecer Serviços
            </button>
            </div>
        </div>
    </section>
    )
}