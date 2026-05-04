import beluHero from "../assets/images/belu-hero.png";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url('${beluHero}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#1E1E1E]/50" />

      {/* Content */}
      <div className="relative z-10 text-center px-5 max-w-2xl mx-auto flex flex-col items-center gap-6">
        <p className="text-sm font-medium tracking-widest text-[#F5F1EB]/80 uppercase">
          Terapia corporal · Biodanza · Masaje consciente
        </p>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-white leading-tight">
          Reconecta con tu cuerpo, libera tensión y vuelve a sentirte bien.
        </h1>

        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-2">
          <a
            href="https://wa.me/5491100000000?text=Hola%20Belu%2C%20quiero%20reservar%20una%20sesi%C3%B3n"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary w-full sm:w-auto text-center text-base"
          >
            Reservar sesión
          </a>
          <a
            href="#servicios"
            className="btn-outline w-full sm:w-auto text-center text-base border-white text-white hover:bg-white hover:text-[#6B7D3A]"
          >
            Conocer más
          </a>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 animate-bounce">
        <div className="w-px h-8 bg-white/40" />
        <div className="w-1.5 h-1.5 rounded-full bg-white/60" />
      </div>
    </section>
  );
}
