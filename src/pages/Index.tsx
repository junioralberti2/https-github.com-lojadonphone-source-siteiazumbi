import { Hero } from '@/components/sections/Hero'
import { Problem } from '@/components/sections/Problem'
import { Opportunity } from '@/components/sections/Opportunity'
import { Solution } from '@/components/sections/Solution'
import { Modules } from '@/components/sections/Modules'
import { ParentChild } from '@/components/sections/ParentChild'
import { Results } from '@/components/sections/Results'
import { Includes } from '@/components/sections/Includes'
import { ProfessionalKit } from '@/components/sections/ProfessionalKit'
import { GuaranteeSection } from '@/components/sections/GuaranteeSection'
import { PriceJustification } from '@/components/sections/PriceJustification'
import { Pricing } from '@/components/sections/Pricing'
import { Author } from '@/components/sections/Author'
import { FAQ } from '@/components/sections/FAQ'
import { Inaction } from '@/components/sections/Inaction'
import { EmotionalClosing } from '@/components/sections/EmotionalClosing'

const Index = () => {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <Problem />
      <Opportunity />
      <Solution />
      <Modules />
      <ParentChild />
      <Results />
      <Includes />
      <ProfessionalKit />
      <GuaranteeSection />
      <PriceJustification />
      <Pricing />
      <Author />
      <FAQ />
      <Inaction />
      <EmotionalClosing />
    </div>
  )
}

export default Index
