import { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import imgMovimiento from "../assets/images/proyecto-movimiento.png";
import imgTalleres from "../assets/images/talleres-de-salud-emocional.png";
import imgBelu from "../assets/images/belulorusso.png";
import imgLogo from "../assets/images/4.png";
import imgAlma from "../assets/images/5.png";
import imgGeppe from "../assets/images/6.png";

export default function MovimientoPage() {
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
                Proyecto
              </span>
              <h1 className="text-4xl md:text-5xl font-serif text-[#1E1E1E] leading-tight">
                MovimienT.O
              </h1>
              <p className="text-[#6B6B6B] leading-relaxed">
                Un proyecto personal que nace en 2016, como una forma de integrar y compartir aquello que mueve mi universo:{" "}
                <em>las danzas, las rondas, la salud, la integración y la mirada biocéntrica.</em>
              </p>
              <p className="text-[#6B6B6B] leading-relaxed">
                Une dos profesiones que dialogan y se potencian: la{" "}
                <strong className="text-[#1E1E1E]">Terapia Ocupacional</strong> y la{" "}
                <strong className="text-[#1E1E1E]">Biodanza</strong>, dos enfoques terapéuticos
                integrativos y complementarios que amplían la práctica profesional y abren nuevos
                modos de intervención en el campo de la salud.
              </p>
              <a
                href="https://wa.me/5491100000000?text=Hola%20Belu%2C%20quiero%20saber%20m%C3%A1s%20sobre%20MovimienT.O"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary self-start"
              >
                Quiero inscribirme
              </a>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-xl">
              <img
                src={imgMovimiento}
                alt="Proyecto MovimienT.O"
                className="w-full h-full object-cover max-h-[460px]"
              />
            </div>
          </div>
        </section>

        {/* Visión */}
        <section className="bg-white px-5 py-16 md:px-10 lg:px-20">
          <div className="max-w-4xl mx-auto flex flex-col gap-8">
            <h2 className="text-3xl font-serif text-[#1E1E1E] text-center">
              ¿Qué es MovimienT.O?
            </h2>
            <p className="text-[#6B6B6B] leading-relaxed text-center max-w-2xl mx-auto">
              Desde MovimienT.O concebimos la salud como un proceso vivo, donde la persona es
              protagonista de su camino de autocuidado, bienestar y transformación, activando sus
              propios <strong className="text-[#6B7D3A]">potenciales de salud</strong> a través del
              cuerpo, el movimiento y el vínculo.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
              {[
                {
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  ),
                  title: "Mirada biocéntrica",
                  text: "La vida como centro de todo proceso terapéutico y educativo.",
                },
                {
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  ),
                  title: "Enfoque integrativo",
                  text: "TO + Biodanza en diálogo constante para ampliar los modos de acompañar.",
                },
                {
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  ),
                  title: "Transformación activa",
                  text: "El cuerpo y el movimiento como vía de acceso a los recursos propios de cada persona.",
                },
              ].map((item) => (
                <div key={item.title} className="bg-[#F5F1EB] rounded-2xl p-6 flex flex-col gap-3">
                  <div className="text-[#6B7D3A]">{item.icon}</div>
                  <h3 className="font-serif text-[#1E1E1E] text-lg">{item.title}</h3>
                  <p className="text-[#6B6B6B] text-sm leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Biodanza Clínica */}
        <section className="px-5 py-16 md:px-10 lg:px-20">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="rounded-3xl overflow-hidden shadow-xl order-last md:order-first">
              <img
                src={imgMovimiento}
                alt="Biodanza Clínica y Danza Inclusiva"
                className="w-full h-full object-cover max-h-[400px]"
              />
            </div>
            <div className="flex flex-col gap-5">
              <span className="text-xs font-medium tracking-widest text-[#6B7D3A] uppercase">
                Línea de trabajo
              </span>
              <h2 className="text-3xl font-serif text-[#1E1E1E] leading-tight">
                Biodanza Clínica y Danza Inclusiva
              </h2>
              <p className="text-[#6B6B6B] leading-relaxed">
                Integro la Biodanza en contextos de salud, creando propuestas que contemplan a la
                persona de manera integral: cuerpo, emoción, vínculo y potencial de vida.
              </p>
              <div className="flex flex-col gap-3">
                {[
                  "Salud mental",
                  "Discapacidad física",
                  "Personas mayores / Tercera edad",
                  "Adicciones",
                ].map((item) => (
                  <div
                    key={item}
                    className="bg-white rounded-2xl p-4 shadow-sm border border-[#e8e2d9] flex items-center gap-3"
                  >
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

        {/* Talleres para profesionales */}
        <section className="bg-white px-5 py-16 md:px-10 lg:px-20">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="flex flex-col gap-5">
              <span className="text-xs font-medium tracking-widest text-[#6B7D3A] uppercase">
                Formación
              </span>
              <h2 className="text-3xl font-serif text-[#1E1E1E] leading-tight">
                Talleres de Salud Emocional y Corporal para Profesionales
              </h2>
              <p className="text-[#6B6B6B] leading-relaxed">
                Charlas y vivencias sobre la Biodanza en contextos de salud, dirigidas a profesionales
                de la salud, facilitadores y estudiantes de Biodanza, educadores, terapeutas y personas
                interesadas en una visión humana e integradora de la salud.
              </p>
              <p className="text-[#6B6B6B] leading-relaxed">
                Facilitan y exponen:{" "}
                <strong className="text-[#1E1E1E]">
                  Belu Lorusso, Alma Alvarado Rojas y Geppe Miglioranza.
                </strong>
              </p>
              <div className="flex flex-col gap-3">
                {[
                  "Herramientas vivenciales y teóricas",
                  "Autocuidado profesional desde el cuerpo",
                  "Mirada biocéntrica aplicada a la práctica",
                  "Para equipos de salud y educación",
                ].map((item) => (
                  <div
                    key={item}
                    className="bg-[#F5F1EB] rounded-2xl p-4 flex items-center gap-3"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-[#6B7D3A] flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <p className="text-[#1E1E1E] text-sm font-medium">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-xl">
              <img
                src={imgTalleres}
                alt="Talleres de Salud Emocional"
                className="w-full h-full object-cover max-h-[460px]"
              />
            </div>
          </div>
        </section>

        {/* Facilitadores */}
        <section className="bg-white px-5 py-16 md:px-10 lg:px-20">
          <div className="max-w-4xl mx-auto flex flex-col gap-10">
            <div className="text-center flex flex-col gap-4">
              <img src={imgLogo} alt="MovimienT.O logo" className="w-32 h-32 object-contain mx-auto" />
              <span className="text-xs font-medium tracking-widest text-[#6B7D3A] uppercase">Equipo</span>
              <h2 className="text-3xl font-serif text-[#1E1E1E]">Facilitan y exponen</h2>
            </div>
            <div className="flex flex-col gap-6">
              {[
                {
                  img: imgBelu,
                  initials: null,
                  name: "Belu Lorusso",
                  flags: "🇦🇷 🇪🇸",
                  bio: "Licenciada en Terapia Ocupacional y Facilitadora de Biodanza. 10 años trabajando como Terapeuta y Biodanza en Salud Mental, en tercer edad y discapacidad.",
                },
                {
                  img: imgAlma,
                  initials: null,
                  name: "Alma Alvarado Rojas",
                  flags: "🇩🇪 🇲🇽",
                  bio: "Profesora Didacta de Biodanza y Heilpraktikerin für Psychotherapie (Alemania). Más de 20 años de experiencia en salud, clínica y tercera edad.",
                },
                {
                  img: imgGeppe,
                  initials: null,
                  name: "Geppe Miglioranza",
                  flags: "🇮🇹",
                  bio: "Facilitador y Didacta de Biodanza. Biodanza Clínica. Experiencia en Parkinson, Alzheimer, adicciones y trauma por abuso.",
                },
              ].map((person) => (
                <div key={person.name} className="flex flex-col sm:flex-row items-center sm:items-start gap-5 bg-[#F5F1EB] rounded-3xl p-6 shadow-sm">
                  <div className="flex-shrink-0">
                    {person.img ? (
                      <img
                        src={person.img}
                        alt={person.name}
                        className="w-24 h-24 rounded-full object-cover object-top shadow-md border-4 border-white"
                      />
                    ) : (
                      <div className="w-24 h-24 rounded-full bg-[#6B7D3A] flex items-center justify-center shadow-md border-4 border-white">
                        <span className="text-white text-2xl font-serif font-semibold">{person.initials}</span>
                      </div>
                    )}
                  </div>
                  <div className="flex flex-col gap-1 text-center sm:text-left">
                    <p className="font-serif text-xl text-[#1E1E1E] font-semibold">
                      {person.name} <span className="text-base">{person.flags}</span>
                    </p>
                    <p className="text-[#6B6B6B] text-sm leading-relaxed">{person.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#6B7D3A] px-5 py-16 md:px-10 lg:px-20">
          <div className="max-w-2xl mx-auto flex flex-col items-center text-center gap-6">
            <h2 className="text-3xl font-serif text-white">
              ¿Te unes al MovimienT.O de la Salud Biocéntrica?
            </h2>
            <p className="text-white/80">
              Escribime para conocer los próximos talleres, clases y propuestas formativas.
            </p>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScvIDdSreH7KjOSfii_Ni7-9EiJvCLBH-08Oez4b99RInpUEg/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[#6B7D3A] hover:bg-[#F5F1EB] font-medium px-8 py-3 rounded-2xl transition-all duration-200 shadow-md flex items-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.372 0 0 5.373 0 12s5.372 12 12 12 12-5.373 12-12S18.628 0 12 0zm6.369 8.71h-2.628c-.31-1.227-.748-2.4-1.296-3.474 1.63.612 2.99 1.843 3.924 3.474zM12 2.182c.748 1.11 1.335 2.35 1.726 3.709H10.27c.392-1.359.98-2.598 1.73-3.71zm0 19.636c-.748-1.11-1.335-2.35-1.726-3.709h3.456c-.392 1.36-.98 2.6-1.73 3.71zm-2.101-5.891H7.263a9.816 9.816 0 01-.47-2.927c0-1.027.165-2.015.47-2.927H9.9a18.73 18.73 0 00-.173 2.927c0 .998.06 1.976.172 2.927zm.375 1.818h3.452c-.381 1.294-.944 2.49-1.726 3.564-.782-1.073-1.345-2.27-1.726-3.564zm3.452-9.455H9.274c.381-1.294.944-2.49 1.726-3.564.782 1.074 1.345 2.27 1.726 3.564zm1.737 1.818h2.638c.305.912.47 1.9.47 2.927 0 1.027-.165 2.015-.47 2.927H15.46a18.73 18.73 0 00.173-2.927 18.73 18.73 0 00-.172-2.927zm1.184-3.636c-.934-1.63-2.294-2.862-3.924-3.474.548 1.074.986 2.247 1.296 3.474h2.628zM7.555 5.236c-.548 1.074-.986 2.247-1.296 3.474H3.631c.934-1.63 2.294-2.862 3.924-3.474zM3.085 10.527h2.628c-.101.632-.158 1.278-.158 1.945 0 .667.057 1.313.158 1.945H3.085a9.844 9.844 0 01-.267-1.945c0-.667.09-1.313.267-1.945zm.546 5.709h2.628c.31 1.227.748 2.4 1.296 3.474-1.63-.613-2.99-1.844-3.924-3.474zm10.81 3.474c.548-1.074.986-2.247 1.296-3.474h2.628c-.934 1.63-2.294 2.861-3.924 3.474zm4.474-5.292h-2.638a18.51 18.51 0 00.158-1.945c0-.667-.057-1.313-.158-1.945h2.638c.177.632.267 1.278.267 1.945 0 .667-.09 1.313-.267 1.945z"/>
              </svg>
              Quiero inscribirme
            </a>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
