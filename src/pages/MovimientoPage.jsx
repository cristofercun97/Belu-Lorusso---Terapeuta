import { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import imgMovimiento from "../assets/images/proyecto-movimiento.png";
import imgTalleres from "../assets/images/talleres-de-salud-emocional.png";
import imgBelu from "../assets/images/belulorusso.png";
import imgLogo from "../assets/images/4.png";

function CTAForm() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "El nombre es obligatorio.";
    if (!form.email.trim()) e.email = "El correo es obligatorio.";
    if (!form.message.trim()) e.message = "Este campo es obligatorio.";
    return e;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    const text = encodeURIComponent(
      `Hola Belu! Me interesa unirme a MovimienT.O.\n\n*Nombre:* ${form.name}\n*Email:* ${form.email}${form.phone ? `\n*Teléfono:* ${form.phone}` : ""}\n\n*Mensaje:*\n${form.message}`
    );
    window.open(`https://wa.me/34633070753?text=${text}`, "_blank");
    setSent(true);
  };

  const handleChange = (field) => (e) => {
    setForm((f) => ({ ...f, [field]: e.target.value }));
    setErrors((err) => ({ ...err, [field]: undefined }));
  };

  if (sent) {
    return (
      <section className="bg-[#6B7D3A] px-5 py-16 md:px-10 lg:px-20">
        <div className="max-w-xl mx-auto text-center flex flex-col gap-5 items-center">
          <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-[#6B7D3A]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-2xl font-serif text-white">¡Mensaje enviado!</h3>
          <p className="text-white/80">Tu consulta fue enviada por WhatsApp. Belu te responderá a la brevedad.</p>
          <button
            onClick={() => { setSent(false); setForm({ name: "", email: "", phone: "", message: "" }); }}
            className="bg-white text-[#6B7D3A] font-medium px-6 py-2 rounded-2xl text-sm hover:bg-[#F5F1EB] transition"
          >
            Enviar otro mensaje
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-[#6B7D3A] px-5 py-16 md:px-10 lg:px-20">
      <div className="max-w-2xl mx-auto flex flex-col gap-8">
        <div className="text-center flex flex-col gap-3">
          <h2 className="text-3xl font-serif text-white">¿Te unes al MovimienT.O?</h2>
          <p className="text-white/80">Escribime para conocer los próximos talleres, clases y propuestas formativas.</p>
        </div>
        <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-white">Nombre <span className="text-white/60">*</span></label>
              <input
                type="text"
                value={form.name}
                onChange={handleChange("name")}
                placeholder="Tu nombre"
                className={`bg-white/10 border rounded-2xl px-4 py-3 text-sm text-white placeholder-white/50 outline-none focus:ring-2 focus:ring-white/50 transition ${errors.name ? "border-red-300" : "border-white/20"}`}
              />
              {errors.name && <p className="text-red-300 text-xs">{errors.name}</p>}
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-white">Email <span className="text-white/60">*</span></label>
              <input
                type="email"
                value={form.email}
                onChange={handleChange("email")}
                placeholder="tu@email.com"
                className={`bg-white/10 border rounded-2xl px-4 py-3 text-sm text-white placeholder-white/50 outline-none focus:ring-2 focus:ring-white/50 transition ${errors.email ? "border-red-300" : "border-white/20"}`}
              />
              {errors.email && <p className="text-red-300 text-xs">{errors.email}</p>}
            </div>
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-white">Teléfono <span className="text-white/40">(opcional)</span></label>
            <input
              type="tel"
              value={form.phone}
              onChange={handleChange("phone")}
              placeholder="+34 600 000 000"
              className="bg-white/10 border border-white/20 rounded-2xl px-4 py-3 text-sm text-white placeholder-white/50 outline-none focus:ring-2 focus:ring-white/50 transition"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-white">¿Qué te interesa? <span className="text-white/60">*</span></label>
            <textarea
              rows={4}
              value={form.message}
              onChange={handleChange("message")}
              placeholder="Contame qué te lleva a querer unirte al MovimienT.O..."
              className={`bg-white/10 border rounded-2xl px-4 py-3 text-sm text-white placeholder-white/50 outline-none focus:ring-2 focus:ring-white/50 transition resize-none ${errors.message ? "border-red-300" : "border-white/20"}`}
            />
            {errors.message && <p className="text-red-300 text-xs">{errors.message}</p>}
          </div>
          <button
            type="submit"
            className="bg-white text-[#6B7D3A] hover:bg-[#F5F1EB] font-medium px-8 py-3 rounded-2xl transition-all duration-200 shadow-md self-center"
          >
            Quiero inscribirme
          </button>
        </form>
      </div>
    </section>
  );
}

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
                href="https://wa.me/34633070753?text=Hola%20Belu%2C%20quiero%20saber%20m%C3%A1s%20sobre%20MovimienT.O"
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
                Soy yo quien lleva estas propuestas: desde mi formación como Terapeuta Ocupacional y Facilitadora de Biodanza, diseño cada taller con intención, cuerpo y corazón.
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
              <span className="text-xs font-medium tracking-widest text-[#6B7D3A] uppercase">Quién soy</span>
              <h2 className="text-3xl font-serif text-[#1E1E1E]">La persona detrás del proyecto</h2>
            </div>
            <div className="flex justify-center">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 bg-[#F5F1EB] rounded-3xl p-8 shadow-sm max-w-2xl w-full">
                <div className="flex-shrink-0">
                  <img
                    src={imgBelu}
                    alt="Belu Lorusso"
                    className="w-28 h-28 rounded-full object-cover object-top shadow-md border-4 border-white"
                  />
                </div>
                <div className="flex flex-col gap-2 text-center sm:text-left">
                  <p className="font-serif text-xl text-[#1E1E1E] font-semibold">
                    Belu Lorusso <span className="text-base">🇦🇷 🇪🇸</span>
                  </p>
                  <p className="text-[#6B6B6B] text-sm leading-relaxed">
                    Licenciada en Terapia Ocupacional y Facilitadora de Biodanza. 10 años trabajando como Terapeuta y Biodanza en Salud Mental, en tercer edad y discapacidad.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Formulario de inscripción */}
        <CTAForm />

      </main>
      <Footer />
    </div>
  );
}
