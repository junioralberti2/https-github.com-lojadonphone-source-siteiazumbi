import { CheckCircle2 } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

export const ParentChild = () => {
  return (
    <section className="py-20 bg-brand-indigo text-white overflow-hidden relative">
      <div className="absolute inset-0 bg-[url('https://img.usecurling.com/p/800/600?q=parent%20and%20child%20computer&color=blue')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-gold font-bold tracking-wider uppercase text-sm mb-2 block">
            Sinergia Familiar
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">
            Aqui vocês aprendem juntos — e isso muda o jogo.
          </h2>
          <p className="text-lg text-slate-300 leading-relaxed">
            Isso não é "curso pra criança ficar isolada". Você entra junto,
            aprende junto e passa a ter repertório para guiar o uso de
            tecnologia em casa.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
          {[
            'menos briga para tirar o celular',
            'mais "me mostra o que você criou"',
            'mais controle e menos culpa',
            'tecnologia vira ferramenta, não fuga',
          ].map((item, index) => (
            <Card
              key={index}
              className="bg-white/10 border-none backdrop-blur-sm hover:bg-white/20 transition-colors"
            >
              <CardContent className="p-6 flex items-center gap-4 text-white h-full">
                <div className="bg-brand-gold/20 p-2 rounded-full shrink-0">
                  <CheckCircle2 className="w-6 h-6 text-brand-gold" />
                </div>
                <p className="font-medium text-lg leading-snug">
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
