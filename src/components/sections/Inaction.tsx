import { AlertCircle, AlertTriangle, EyeOff, BrainCircuit } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { trackEvent } from '@/lib/facebook'

export const Inaction = () => {
  const handlePurchase = () => {
    trackEvent('InitiateCheckout')
    window.location.href = 'https://pay.hotmart.com/E103583426A'
  }

  return (
    <section className="py-20 bg-white border-t border-slate-100">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-brand-dark mb-6">
            E se você não fizer nada?
          </h2>
          <p className="text-lg text-slate-600">
            O tempo de tela não vai diminuir sozinho. Pelo contrário, o custo da
            inércia é alto:
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4 mb-12">
          <div className="flex items-start gap-4 p-5 sm:p-6 bg-red-50 rounded-2xl border border-red-100 transition-transform hover:-translate-y-1">
            <div className="bg-red-100 p-3 rounded-full shrink-0 mt-0.5">
              <AlertTriangle className="w-5 h-5 sm:w-6 sm:h-6 text-red-600" />
            </div>
            <div>
              <p className="text-red-900 font-medium text-base sm:text-lg leading-relaxed">
                A tolerância ao tédio tende a piorar: tudo que exige esforço
                vira “chato”.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-5 sm:p-6 bg-orange-50 rounded-2xl border border-orange-100 transition-transform hover:-translate-y-1">
            <div className="bg-orange-100 p-3 rounded-full shrink-0 mt-0.5">
              <EyeOff className="w-5 h-5 sm:w-6 sm:h-6 text-orange-600" />
            </div>
            <div>
              <p className="text-orange-900 font-medium text-base sm:text-lg leading-relaxed">
                E quando você perceber, a tela não é mais ferramenta: é rotina,
                hábito e dependência de estímulo.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-5 sm:p-6 bg-slate-50 rounded-2xl border border-slate-200 transition-transform hover:-translate-y-1">
            <div className="bg-slate-200 p-3 rounded-full shrink-0 mt-0.5">
              <BrainCircuit className="w-5 h-5 sm:w-6 sm:h-6 text-slate-600" />
            </div>
            <div>
              <p className="text-slate-800 font-medium text-base sm:text-lg leading-relaxed">
                A verdade é simples: se você não direcionar o uso da tecnologia,
                alguém vai. E esse “alguém” não está preocupado com o futuro do
                seu filho — está preocupado com retenção.
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-3xl mx-auto bg-amber-50 border border-amber-200 rounded-2xl p-5 md:p-6 flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4 shadow-sm mb-12">
          <AlertCircle className="w-8 h-8 text-amber-500 shrink-0" />
          <p className="text-amber-800 font-medium text-sm md:text-base">
            <strong className="block mb-1">Aviso Importante:</strong>
            Em breve, o valor volta para R$ 497. Aproveite essa janela de
            oportunidade para garantir o acesso vitalício do seu filho com
            desconto máximo.
          </p>
        </div>

        <div className="text-center flex justify-center">
          <Button
            onClick={handlePurchase}
            size="lg"
            className="w-full sm:w-auto h-auto min-h-[64px] py-4 rounded-full bg-green-500 hover:bg-green-600 text-white font-bold text-sm sm:text-base md:text-lg px-4 md:px-8 shadow-xl shadow-green-500/20 animate-pulse-slow border-0 whitespace-normal leading-tight text-center"
          >
            👉 Quero dar direção e transformar tela em criação (começar hoje)
          </Button>
        </div>
      </div>
    </section>
  )
}
