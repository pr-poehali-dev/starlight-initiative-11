import { Button } from "@/components/ui/button"
import type { SectionProps } from "@/types"

export default function Section({ id, title, subtitle, content, showButton, buttonText, buttonUrl, bgImage }: SectionProps) {
  return (
    <section id={id} className="relative min-h-screen w-full flex flex-col justify-center p-8 md:p-16 lg:p-24">
      {bgImage && (
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${bgImage})` }}
        >
          <div className="absolute inset-0 bg-black/65" />
        </div>
      )}
      <div className="relative z-10">
        {subtitle && (
          <div className="mb-12">{subtitle}</div>
        )}
        <h2 className="text-4xl md:text-6xl lg:text-[5rem] xl:text-[6rem] font-bold leading-[1.1] tracking-tight max-w-4xl text-white">
          {title}
        </h2>
        {content && (
          <p className="text-lg md:text-xl lg:text-2xl max-w-2xl mt-6 text-neutral-400">
            {content}
          </p>
        )}
        {showButton && (
          <div className="mt-12 md:mt-16">
            <Button
              variant="outline"
              size="lg"
              className="text-[#FFD700] bg-transparent border-[#FFD700] hover:bg-[#FFD700] hover:text-black transition-colors font-bold tracking-widest uppercase"
              onClick={() => buttonUrl && window.open(buttonUrl, '_blank')}
            >
              {buttonText}
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}
