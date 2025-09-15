import { EyeIcon, SproutIcon, TargetIcon } from "lucide-react";

export function About() {
    return (
        <section className="py-10 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 text-foreground">
              Sobre Nós
            </h2>

            <div className="flex flex-col gap-4">
                <div className="bg-muted/50 p-6 rounded-lg space-y-2">
                    <div className="flex items-center gap-2">
                        <TargetIcon className="size-16 text-primary" />
                        <h3 className="text-lg font-bold text-foreground">
                            Missão
                        </h3>
                    </div>

                    <p className="text-muted-foreground">
                        Mais do que prestar serviços, entregamos soluções completas e sustentáveis que contribuem 
                        para a eficiência operacional, a segurança e a economia de nossos clientes.
                    </p>
                </div>

                <div className="bg-muted/50 p-6 rounded-lg space-y-2">
                    <div className="flex items-center gap-2">
                        <EyeIcon className="size-16 text-primary" />
                        <h3 className="text-lg font-bold text-foreground">
                            Visão
                        </h3>
                    </div>

                    <p className="text-muted-foreground">
                    Permanecer como referência de qualidade, transparência, eficiência
                    e inovação nos serviços prestados, prezando total segurança e
                    satisfação aos clientes.
                    </p>
                </div>

                <div className="bg-muted/50 p-6 rounded-lg space-y-2">
                    <div className="flex items-center gap-2">
                        <SproutIcon className="size-16 text-primary" />
                        <h3 className="text-lg font-bold text-foreground">
                            Valores
                        </h3>
                    </div>

                    <p className="text-muted-foreground">
                    Prover a satisfação dos clientes através de nossos serviços atendendo
                    suas necessidades e expectativas, garantindo a qualidade e
                    confiabilidade nos serviços prestados, mantendo sempre um
                    padrão de qualidade, ética, transparência e comprometimento...
                    </p>
                </div>

            </div>


            <div className="bg-primary text-primary-foreground p-4 rounded-lg my-3">
              <p className="text-xl font-semibold">
                TSV-TEC: precisão, confiabilidade e compromisso com a performance da sua operação.
              </p>
            </div>

          </div>
        </div>
      </section>
    )
}