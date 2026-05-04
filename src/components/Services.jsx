import { useState } from "react";
import ServiceCard from "./ServiceCard";
import imgBiodanza from "../assets/images/biodanza.png";
import imgMasaje from "../assets/images/masajeintegral.png";
import imgAcompanamiento from "../assets/images/acompañamiento-terapeutico.png";
import imgMovimiento from "../assets/images/proyecto-movimiento.png";
import imgTalleres from "../assets/images/talleres-de-salud-emocional.png";
import imgMicelio from "../assets/images/hogar-micelio.png";

const SERVICES = [
  {
    image: imgBiodanza,
    title: "Biodanza",
    description:
      "Un sistema de integración humana que usa la danza y la música para despertar la vitalidad.",
    benefits: [
      "Mejora la autoestima y confianza",
      "Reduce el estrés y la ansiedad",
      "Profundiza la conexión con otros",
    ],
    ctaLabel: "Conocer más",
    ctaPrimary: false,
    ctaHref: "/biodanza",
    ctaInternal: true,
  },
  {
    image: imgMasaje,
    title: "Masaje Integral-Sensitivo",
    description:
      "Un masaje consciente que integra cuerpo y emoción, liberando tensiones profundas.",
    benefits: [
      "Alivia dolores musculares y tensión",
      "Estimula la circulación y el sistema nervioso",
      "Promueve relajación profunda",
    ],
    ctaLabel: "Reservar masaje",
    ctaPrimary: true,
    ctaHref:
      "https://wa.me/5491100000000?text=Hola%20Belu%2C%20quiero%20reservar%20un%20masaje",
  },
  {
    image: imgAcompanamiento,
    title: "Acompañamiento terapéutico",
    description:
      "Un proceso personalizado para transitar crisis, cambios o búsqueda de sentido con apoyo profesional.",
    benefits: [
      "Proceso personalizado y a tu ritmo",
      "Integración de herramientas corporales",
      "Apoyo en momentos de transición",
    ],
    ctaLabel: "Conocer más",
    ctaPrimary: false,
    ctaHref: "#contacto",
  },
  {
    image: imgMovimiento,
    title: "Proyecto MovimienT.O",
    description:
      "Biodanza Clínica y Danza inclusiva para potenciar el movimiento como herramienta terapéutica.",
    benefits: [
      "Abordaje clínico del movimiento",
      "Inclusión y diversidad funcional",
      "Trabajo interdisciplinario",
    ],
    ctaLabel: "Conocer más",
    ctaPrimary: false,
    ctaHref: "/movimiento",
    ctaInternal: true,
  },
  {
    image: imgTalleres,
    title: "Talleres de Salud Emocional",
    description:
      "Formación corporal y emocional para profesionales de la salud que quieren ampliar su mirada.",
    benefits: [
      "Herramientas vivenciales y teóricas",
      "Para equipos de salud y educación",
      "Autocuidado profesional",
    ],
    ctaLabel: "Conocer más",
    ctaPrimary: false,
    ctaHref: "/movimiento",
    ctaInternal: true,
  },
  {
    image: imgMicelio,
    title: "Asociación Hogar Micelio",
    description:
      "Espacio sociocultural de encuentro, creación y comunidad para el bienestar colectivo.",
    benefits: [
      "Actividades comunitarias y culturales",
      "Red de cuidado y pertenencia",
      "Arte, cuerpo y territorio",
    ],
    ctaLabel: "Conocer más",
    ctaPrimary: false,
    ctaHref: "https://hogarmicelio.com/",
    ctaInternal: false,
  },
];

const PAGE_SIZE = 3;

export default function Services() {
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(SERVICES.length / PAGE_SIZE);
  const visible = SERVICES.slice(page * PAGE_SIZE, page * PAGE_SIZE + PAGE_SIZE);

  return (
    <section id="servicios" className="section-padding bg-[#F5F1EB]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif text-[#1E1E1E] mb-3">
            Mis servicios
          </h2>
          <p className="text-[#6B6B6B] max-w-md mx-auto">
            Cada modalidad es un camino diferente hacia el mismo destino: tu bienestar.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {visible.map((s) => (
            <ServiceCard key={s.title} {...s} />
          ))}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center gap-4 mt-10">
          <button
            onClick={() => setPage((p) => p - 1)}
            disabled={page === 0}
            aria-label="Anterior"
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl border-2 border-[#6B7D3A] text-[#6B7D3A] text-sm font-medium disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#6B7D3A] hover:text-white transition-all duration-200"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Anterior
          </button>

          {/* Dots */}
          <div className="flex gap-2">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setPage(i)}
                aria-label={`Página ${i + 1}`}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-200 ${
                  i === page ? "bg-[#6B7D3A] scale-125" : "bg-[#6B7D3A]/30 hover:bg-[#6B7D3A]/60"
                }`}
              />
            ))}
          </div>

          <button
            onClick={() => setPage((p) => p + 1)}
            disabled={page === totalPages - 1}
            aria-label="Siguiente"
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl border-2 border-[#6B7D3A] text-[#6B7D3A] text-sm font-medium disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#6B7D3A] hover:text-white transition-all duration-200"
          >
            Siguiente
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
