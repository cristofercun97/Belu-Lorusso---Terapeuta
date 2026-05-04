export default function EmotionalSection() {
  return (
    <section className="section-padding bg-[#F5F1EB]">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Image */}
          <div className="rounded-2xl overflow-hidden shadow-md aspect-[4/5]">
            <img
              src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80&auto=format&fit=crop"
              alt="Mujer en conexión con la naturaleza"
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="flex flex-col gap-6">
            <span className="text-xs font-medium tracking-widest text-[#6B7D3A] uppercase">
              Filosofía
            </span>
            <blockquote className="text-3xl md:text-4xl font-serif text-[#1E1E1E] leading-snug">
              "El cuerpo guarda lo que la mente olvida, y el movimiento libera lo que el alma necesita."
            </blockquote>
            <p className="text-[#6B6B6B] leading-relaxed">
              En cada sesión creamos un espacio seguro y amoroso donde tu cuerpo puede soltar, integrar y florecer a su propio ritmo.
            </p>
            <a
              href="#contacto"
              className="btn-primary self-start"
            >
              Quiero saber más
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
