import beluPhoto from "../assets/images/belulorusso.png";

const TRUST_ITEMS = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    stat: "+20 años",
    label: "de experiencia",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    stat: "TO",
    label: "Terapeuta ocupacional",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    stat: "Biodanza",
    label: "Facilitadora certificada",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    stat: "100%",
    label: "Espacios seguros y contenedores",
  },
];

export default function TrustSection() {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif text-[#1E1E1E] mb-3">
            Por qué elegirme
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {TRUST_ITEMS.map((item) => (
            <div
              key={item.label}
              className="flex flex-col items-center text-center gap-3 p-6 rounded-2xl bg-[#F5F1EB]"
            >
              <div className="text-[#6B7D3A]">{item.icon}</div>
              <p className="text-2xl font-serif font-semibold text-[#6B7D3A]">{item.stat}</p>
              <p className="text-xs text-[#6B6B6B] leading-snug">{item.label}</p>
            </div>
          ))}
        </div>

        {/* Sobre mí */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* Photo */}
          <div className="flex flex-col gap-4">
            <div className="rounded-2xl overflow-hidden shadow-md">
              <img
                src={beluPhoto}
                alt="Belu Lorusso - Terapeuta ocupacional y facilitadora de Biodanza"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex gap-3">
              <a
                href="https://wa.me/34633070753?text=Hola%20Belu%2C%20quiero%20saber%20m%C3%A1s"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center btn-primary px-5 py-3"
                aria-label="WhatsApp"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/belu.movimient.o"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center btn-outline px-5 py-3"
                aria-label="Instagram"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Bio */}
          <div className="flex flex-col gap-5">
            <div>
              <span className="text-xs font-medium tracking-widest text-[#6B7D3A] uppercase">
                Sobre mí
              </span>
              <h3 className="text-2xl md:text-3xl font-serif text-[#1E1E1E] mt-2 leading-snug">
                Belu Lorusso
              </h3>
            </div>

            <div className="flex flex-col gap-4 text-[#6B6B6B] text-sm leading-relaxed">
              <p>
                Nací en Mar del Plata, Argentina. Allí me formé como <strong className="text-[#1E1E1E] font-medium">Terapeuta Ocupacional</strong> y <strong className="text-[#1E1E1E] font-medium">Facilitadora de Biodanza</strong> — herramientas que se entrelazan, se potencian y dialogan entre sí, dando lugar a procesos profundos de salud, movimiento y transformación personal.
              </p>
              <p>
                Desde una mirada terapéutica y humana, acompaño procesos de crecimiento. El movimiento, para mí, es puente: hacia el cuerpo, la emoción, la conciencia y el bienestar integral.
              </p>
              <p>
                Mi alma siempre fue inquieta, viajera e iniciadora. En el 2020 emprendí un viaje y durante dos años y medio, la intuición y el mar guiaron mi andar por Europa. Realicé 16 experiencias de voluntariado, donde el intercambio humano, el servicio y la diversidad cultural fueron escuela viva.
              </p>
              <p>
                En 2022 sentí la necesidad de cerrar ese ciclo. No para dejar de moverme, sino para habitar y enraizar. Elegí quedarme, crear un nuevo nido, expandir mi red.
              </p>
              <p>
                Hoy me comparto desde mi Ser, desde <strong className="text-[#1E1E1E] font-medium">Valencia al mundo</strong>, a través de las herramientas que me habitan. Vivo una vida con sentido, con-moVida por la belleza que me rodea, buscando coherencia entre sentir, pensar y accionar.
              </p>
              <p className="text-[#6B7D3A] font-medium italic">
                "Este espacio es para compartirlas contigo."
              </p>
            </div>

            <a
              href="https://wa.me/34633070753?text=Hola%20Belu%2C%20quiero%20saber%20m%C3%A1s"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary self-start mt-2"
            >
              Conectar con Belu
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
