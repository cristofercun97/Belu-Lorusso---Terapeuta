import { useState } from "react";

const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxFlWX67wkWtYlO4rnsLwot3NiSVAlRnA3vDkMzsgjaoNGTfFMl0v_hoXorLxThqhDJTg/exec";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "El nombre es obligatorio.";
    if (!form.email.trim()) e.email = "El correo es obligatorio.";
    if (!form.phone.trim()) e.phone = "El teléfono es obligatorio.";
    if (!form.message.trim()) e.message = "Este campo es obligatorio.";
    return e;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }

    const data = {
      nombre: form.name,
      email: form.email,
      telefono: form.phone,
      mensaje: form.message,
    };

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        body: JSON.stringify(data),
      });
      setSent(true);
      setForm({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      console.error("Error enviando formulario:", error);
      alert("Hubo un error al enviar el formulario. Inténtalo de nuevo.");
    }
  };

  const handleChange = (field) => (e) => {
    setForm((f) => ({ ...f, [field]: e.target.value }));
    setErrors((err) => ({ ...err, [field]: undefined }));
  };

  if (sent) {
    return (
      <section className="bg-[#F5F1EB] px-5 py-16 md:px-10 lg:px-20">
        <div className="max-w-xl mx-auto text-center flex flex-col gap-5 items-center">
          <div className="w-16 h-16 rounded-full bg-[#6B7D3A] flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-2xl font-serif text-[#1E1E1E]">¡Mensaje enviado!</h3>
          <p className="text-[#6B6B6B]">Tu consulta fue recibida. Belu te responderá a la brevedad.</p>
          <button
            onClick={() => { setSent(false); setForm({ name: "", email: "", phone: "", message: "" }); }}
            className="btn-outline text-sm"
          >
            Enviar otro mensaje
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-[#F5F1EB] px-5 py-16 md:px-10 lg:px-20">
      <div className="max-w-2xl mx-auto flex flex-col gap-8">
        <div className="text-center flex flex-col gap-3">
          <span className="text-xs font-medium tracking-widest text-[#6B7D3A] uppercase">Contacto</span>
          <h2 className="text-3xl md:text-4xl font-serif text-[#1E1E1E]">¿Hablamos?</h2>
          <p className="text-[#6B6B6B]">Te leo con atención y te responderé a la brevedad.</p>
        </div>

        <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
          {/* Nombre */}
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-[#1E1E1E]">
              Nombre <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="nombre"
              value={form.name}
              onChange={handleChange("name")}
              placeholder="Tu nombre"
              className={`bg-white border rounded-2xl px-4 py-3 text-sm text-[#1E1E1E] placeholder-[#aaa] outline-none focus:ring-2 focus:ring-[#6B7D3A] transition ${errors.name ? "border-red-400" : "border-[#e8e2d9]"}`}
            />
            {errors.name && <p className="text-red-500 text-xs">{errors.name}</p>}
          </div>

          {/* Email */}
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-[#1E1E1E]">
              Correo electrónico <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange("email")}
              placeholder="tu@correo.com"
              className={`bg-white border rounded-2xl px-4 py-3 text-sm text-[#1E1E1E] placeholder-[#aaa] outline-none focus:ring-2 focus:ring-[#6B7D3A] transition ${errors.email ? "border-red-400" : "border-[#e8e2d9]"}`}
            />
            {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
          </div>

          {/* Teléfono */}
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-[#1E1E1E]">
              Número de teléfono <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              name="telefono"
              value={form.phone}
              onChange={handleChange("phone")}
              placeholder="+54 9 ..."
              className={`bg-white border rounded-2xl px-4 py-3 text-sm text-[#1E1E1E] placeholder-[#aaa] outline-none focus:ring-2 focus:ring-[#6B7D3A] transition ${errors.phone ? "border-red-400" : "border-[#e8e2d9]"}`}
            />
            {errors.phone && <p className="text-red-500 text-xs">{errors.phone}</p>}
          </div>

          {/* Mensaje */}
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-[#1E1E1E]">
              Cuéntame qué te trae por aquí, tu consulta o propuesta. <span className="text-red-500">*</span>
              <span className="block font-normal text-[#6B6B6B] mt-0.5">Te leo con atención y te responderé a la brevedad.</span>
            </label>
            <textarea
              rows={4}
              name="mensaje"
              value={form.message}
              onChange={handleChange("message")}
              placeholder="Escribí tu mensaje..."
              className={`bg-white border rounded-2xl px-4 py-3 text-sm text-[#1E1E1E] placeholder-[#aaa] outline-none focus:ring-2 focus:ring-[#6B7D3A] transition resize-none ${errors.message ? "border-red-400" : "border-[#e8e2d9]"}`}
            />
            {errors.message && <p className="text-red-500 text-xs">{errors.message}</p>}
          </div>

          <button type="submit" className="btn-primary self-start px-10">
            Enviar mensaje
          </button>
        </form>
      </div>
    </section>
  );
}
