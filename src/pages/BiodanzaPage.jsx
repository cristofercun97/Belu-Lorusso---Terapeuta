import { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import biodanza1 from "../assets/images/biodanza1.png";
import biodanza2 from "../assets/images/biodanza2.png";

export default function BiodanzaPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#F5F1EB] min-h-screen font-sans">
      <Header />
      <main>

      {/* Hero */}
      <section className="px-5 pt-24 pb-16 md:px-10 md:pt-28 lg:px-20">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="flex flex-col gap-5">
            <span className="text-xs font-medium tracking-widest text-[#6B7D3A] uppercase">
              Servicio
            </span>
            <h1 className="text-4xl md:text-5xl font-serif text-[#1E1E1E] leading-tight">
              Biodanza
            </h1>
            <p className="text-[#6B6B6B] leading-relaxed">
              Herramienta que llegó a mi vida hace más de 11 años. Desde entonces, <em>danzo todo lo que vivo y todo lo que siento.</em>
            </p>
            <p className="text-[#6B6B6B] leading-relaxed">
              La Biodanza me aporta coherencia, potencia vital, conexión con el placer de estar viva y coraje existencial para ser y hacer. Es una práctica que atraviesa mi vida y mi forma de acompañar a otrxs.
            </p>
            <a
              href="https://wa.me/5491100000000?text=Hola%20Belu%2C%20quiero%20saber%20m%C3%A1s%20sobre%20Biodanza"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary self-start mt-2"
            >
              Reservar clase
            </a>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-md aspect-[4/5]">
            <img
              src={biodanza1}
              alt="Biodanza - movimiento y vitalidad"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Qué es */}
      <section className="bg-white px-5 py-16 md:px-10 lg:px-20">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="rounded-2xl overflow-hidden shadow-md aspect-[4/5] order-last md:order-first">
            <img
              src={biodanza2}
              alt="Biodanza - encuentro grupal"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col gap-5">
            <h2 className="text-3xl font-serif text-[#1E1E1E]">¿Qué es la Biodanza?</h2>
            <p className="text-[#6B6B6B] leading-relaxed">
              Un sistema de integración humana que, a través del <strong className="text-[#1E1E1E] font-medium">movimiento, la música y el encuentro en grupo</strong>, favorece procesos de bienestar, expresión, vitalidad y transformación personal, colocando al cuerpo y al vínculo en el centro de la experiencia.
            </p>
          </div>
        </div>
      </section>

      {/* Cómo la ofrezco */}
      <section className="px-5 py-16 md:px-10 lg:px-20">
        <div className="max-w-3xl mx-auto flex flex-col gap-10">
          <h2 className="text-3xl font-serif text-[#1E1E1E]">¿Cómo la ofrezco?</h2>

          {/* Clases regulares */}
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-serif text-[#6B7D3A]">Clases regulares de Biodanza</h3>
            <div className="flex flex-col gap-3">
              {[
                { grupo: "Grupo de iniciación", horario: "Lunes 19hs", lugar: "Hogar Micelio" },
                { grupo: "Grupo de profundización", horario: "Martes 19hs", lugar: "Hogar Micelio" },
              ].map((c) => (
                <div key={c.grupo} className="bg-white rounded-2xl p-5 shadow-sm border border-[#e8e2d9] flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-[#6B7D3A] mt-2 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-[#1E1E1E]">{c.grupo}</p>
                    <p className="text-sm text-[#6B6B6B]">{c.horario} · {c.lugar}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Retiros */}
          <div className="flex flex-col gap-4">
            <div className="bg-white rounded-2xl p-5 shadow-sm border border-[#e8e2d9] flex items-start gap-4">
              <div className="w-2 h-2 rounded-full bg-[#6B7D3A] mt-2 flex-shrink-0" />
              <p className="text-[#1E1E1E]">Retiros, eventos y festivales</p>
            </div>
          </div>

          {/* Biodanza Clínica */}
          <div className="flex flex-col gap-4">
            <p className="text-[#6B6B6B] leading-relaxed">
              Integro la Biodanza con la salud, creando propuestas que contemplan a la persona de manera integral.
            </p>
            <h3 className="text-lg font-serif text-[#6B7D3A]">Biodanza Clínica</h3>
            <p className="text-[#6B6B6B] text-sm">
              Trabajo en distintos colectivos y contextos de salud, acercándome a los espacios que lo requieren:
            </p>
            <div className="flex flex-col gap-3">
              {["Salud mental", "Discapacidad física", "Personas mayores"].map((item) => (
                <div key={item} className="bg-white rounded-2xl p-4 shadow-sm border border-[#e8e2d9] flex items-center gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-[#6B7D3A] flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <p className="text-[#1E1E1E] text-sm font-medium">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#6B7D3A] px-5 py-16 md:px-10 lg:px-20">
        <div className="max-w-2xl mx-auto flex flex-col items-center text-center gap-6">
          <h2 className="text-3xl font-serif text-white">¿Te suma explorar la Biodanza?</h2>
          <p className="text-white/80">Escribime y te cuento todo sobre las próximas clases y eventos.</p>
          <a
            href="https://wa.me/5491100000000?text=Hola%20Belu%2C%20quiero%20saber%20m%C3%A1s%20sobre%20Biodanza"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-[#6B7D3A] hover:bg-[#F5F1EB] font-medium px-8 py-3 rounded-2xl transition-all duration-200 shadow-md flex items-center gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Escribir por WhatsApp
          </a>
        </div>
      </section>

      </main>
      <Footer />
    </div>
  );
}
