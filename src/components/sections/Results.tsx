import { Card } from '@/components/ui/card'

export const Results = () => {
  return (
    <section className="py-20 bg-brand-light">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-indigo font-bold tracking-wider uppercase text-sm mb-2 block">
            Resultados Comprovados
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-brand-dark mb-4">
            Resultados reais (demonstração): meus filhos criaram a própria
            música com IA
          </h2>
          <p className="text-lg text-slate-600">
            Antes de abrir para o público, eu testei o passo a passo dentro de
            casa com meus filhos — e eles conseguiram criar uma música com IA.
          </p>
        </div>

        <div className="max-w-sm mx-auto">
          <Card className="overflow-hidden border-none shadow-2xl rounded-3xl bg-slate-900 ring-4 ring-brand-indigo/10">
            <div className="relative aspect-[9/16] w-full">
              <iframe
                src="https://www.youtube.com/embed/RTxAuNtN2OM?autoplay=0&rel=0"
                title="Resultados reais (demonstração): meus filhos criaram a própria música com IA"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full border-0"
              />
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
