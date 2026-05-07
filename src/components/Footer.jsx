import { useState } from "react";

const NAV_LINKS = [
  { label: "Inicio", href: "#hero" },
  { label: "Servicios", href: "#servicios" },
  { label: "Sobre mí", href: "#sobre-mi" },
  { label: "Contacto", href: "#contacto" },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSent(true);
      setEmail("");
    }
  };

  return (
    <footer className="bg-[#1E1E1E] text-white px-5 pt-12 pb-8 md:px-10 lg:px-20">
      <div className="max-w-5xl mx-auto">

        {/* Brand centrado en mobile */}
        <div className="flex flex-col items-center text-center mb-10 md:hidden">
          <h3 className="text-2xl font-serif mb-2">Belu Lorusso</h3>
          <p className="text-sm text-white/60 leading-relaxed max-w-xs">
            Terapia corporal, Biodanza y Masaje consciente. Un espacio para volver a ti.
          </p>
          {/* Social icons mobile */}
          <div className="flex items-center gap-4 mt-4">
            <a href="https://wa.me/34633070753" target="_blank" rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#6B7D3A] transition-colors" aria-label="WhatsApp">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </a>
            <a href="https://instagram.com/belu.movimient.o" target="_blank" rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#6B7D3A] transition-colors" aria-label="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </a>
            <a href="mailto:lorussobelen@gmail.com"
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#6B7D3A] transition-colors" aria-label="Email">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Grid desktop / acordeón-style mobile */}
        <div className="grid grid-cols-2 gap-8 md:hidden mb-8">
          {/* Nav mobile */}
          <div className="flex flex-col gap-2">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-1">Navegación</h4>
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href} className="text-sm text-white/70 hover:text-white transition-colors py-0.5">
                {link.label}
              </a>
            ))}
          </div>

          {/* Newsletter mobile */}
          <div className="flex flex-col gap-2">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-1">Newsletter</h4>
            <p className="text-xs text-white/60 leading-relaxed">Recibí novedades sobre bienestar.</p>
            {sent ? (
              <p className="text-xs text-[#6B7D3A] font-medium mt-1">¡Gracias por suscribirte!</p>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col gap-2 mt-1">
                <input
                  type="email"
                  required
                  placeholder="tu@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-white/10 border border-white/20 rounded-xl px-3 py-2 text-xs text-white placeholder-white/40 focus:outline-none focus:border-[#6B7D3A] transition-colors"
                />
                <button type="submit" className="btn-primary text-xs py-2">
                  Suscribirme
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Desktop grid (oculto en mobile) */}
        <div className="hidden md:grid md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="flex flex-col gap-3">
            <h3 className="text-xl font-serif">Belu Lorusso</h3>
            <p className="text-sm text-white/60 leading-relaxed">
              Terapia corporal, Biodanza y Masaje consciente. Un espacio para volver a ti.
            </p>
          </div>

          {/* Nav */}
          <div className="flex flex-col gap-3">
            <h4 className="text-sm font-semibold uppercase tracking-widest text-white/40">Navegación</h4>
            <nav className="flex flex-col gap-2">
              {NAV_LINKS.map((link) => (
                <a key={link.href} href={link.href} className="text-sm text-white/70 hover:text-white transition-colors">
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-3">
            <h4 className="text-sm font-semibold uppercase tracking-widest text-white/40">Contacto</h4>
            <a href="https://wa.me/34633070753" target="_blank" rel="noopener noreferrer" className="text-sm text-white/70 hover:text-white transition-colors">WhatsApp</a>
            <a href="mailto:lorussobelen@gmail.com" className="text-sm text-white/70 hover:text-white transition-colors">lorussobelen@gmail.com</a>
            <a href="https://instagram.com/belu.movimient.o" target="_blank" rel="noopener noreferrer" className="text-sm text-white/70 hover:text-white transition-colors">@belu.movimient.o</a>
          </div>

          {/* Newsletter */}
          <div className="flex flex-col gap-3">
            <h4 className="text-sm font-semibold uppercase tracking-widest text-white/40">Newsletter</h4>
            <p className="text-sm text-white/60">Recibí novedades y reflexiones sobre bienestar.</p>
            {sent ? (
              <p className="text-sm text-[#6B7D3A]">¡Gracias por suscribirte!</p>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col gap-2">
                <input
                  type="email"
                  required
                  placeholder="tu@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-white/10 border border-white/20 rounded-xl px-4 py-2 text-sm text-white placeholder-white/40 focus:outline-none focus:border-[#6B7D3A] transition-colors"
                />
                <button type="submit" className="btn-primary text-sm py-2">Suscribirme</button>
              </form>
            )}
          </div>
        </div>

      </div>

      <div className="max-w-5xl mx-auto mt-10 pt-6 border-t border-white/10 text-center">
        <p className="text-xs text-white/30">
          © {new Date().getFullYear()} Belu Lorusso. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
