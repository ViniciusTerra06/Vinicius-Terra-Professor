import { methodologySteps } from "@/data/content";
import { MessageSquare, Settings, Rocket } from "lucide-react";

export const iconMap: Record<string, React.ReactNode> = {
  MessageSquare: <MessageSquare className="h-6 w-6 text-primary" />,
  Settings: <Settings className="h-6 w-6 text-primary" />,
  Rocket: <Rocket className="h-6 w-6 text-primary" />,
};

const MethodologySection = () => {
  return (
    <section id="como-funciona" className="relative py-24">
      <div className="container relative z-10 mx-auto px-4">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 font-display text-3xl font-bold md:text-4xl">
            Como funcionam as <span className="text-primary glow-text-teal">Aulas</span>
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Uma abordagem mão na massa para transformar o modo como você trabalha, desde o nosso primeiro contato até a automação pronta.
          </p>
        </div>

        {/* Steps */}
        <div className="relative mx-auto mt-20 max-w-4xl pt-8">
          {/* Timeline Line */}
          <div className="absolute top-0 bottom-0 left-[20px] w-px bg-border md:left-1/2 md:-ml-px" />

          <div className="flex flex-col gap-12">
            {methodologySteps.map((step, index) => {
              const Icon = iconMap[step.icon];
              const isEven = index % 2 === 0;

              return (
                <div key={step.id} className="relative flex items-center md:justify-center">
                  {/* Indicator center */}
                  <div className="absolute left-[8px] flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-4 border-background bg-primary shadow-glow md:left-1/2 md:ml-[-12px]" />

                  {/* Content card */}
                  <div
                    className={`ml-12 w-full max-w-md md:ml-0 md:w-1/2 ${
                      isEven ? "md:pr-12 text-left" : "md:pl-12 text-left"
                    } ${isEven ? "" : "md:ml-auto"}`}
                  >
                    <div className="gradient-border overflow-hidden rounded-2xl bg-card p-6 shadow-xl transition-all hover:shadow-2xl hover:shadow-primary/5">
                      <div className="mb-4 flex items-center gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                          {Icon}
                        </div>
                      </div>
                      
                      <h3 className="mb-2 font-display text-xl font-semibold text-foreground">
                        {step.title}
                      </h3>
                      <p className="mb-4 text-sm text-muted-foreground md:text-base leading-relaxed">
                        {step.description}
                      </p>

                      {step.subItems && (
                        <div className="mt-4 flex flex-col gap-3">
                          {step.subItems.map((item, idx) => (
                            <div key={idx} className="flex items-start gap-2">
                              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                              <span className="text-sm text-foreground/80">{item}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default MethodologySection;
