import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import imgMandala from "../assets/images/mandala .png";

const NAV_LINKS = [
  { label: "Inicio", href: "#hero" },
  { label: "Servicios", href: "#servicios" },
  { label: "Sobre mí", href: "#sobre-mi" },
  { label: "Contacto", href: "#contacto" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";
  const getHref = (hash) => isHome ? hash : `/${hash}`;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Prevent body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-[#F5F1EB]/90 backdrop-blur-md shadow-md" : "bg-transparent"
        }`}
      >
        <div className="flex items-center justify-between px-5 py-3 md:px-10 lg:px-20">
          {/* Logo */}
          <a href={getHref("#hero")} className="flex items-center gap-0 text-xl font-serif font-semibold text-[#1E1E1E] tracking-wide">
            <img src={imgMandala} alt="Mandala" className="w-[65px] h-[65px] object-contain -mr-2 translate-y-[5px]" />
            Belu Lorusso
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={getHref(link.href)}
                className="text-sm text-[#6B6B6B] hover:text-[#6B7D3A] transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-4">
            <a
              href="https://wa.me/34633070753?text=Hola%20Belu%2C%20quiero%20reservar%20una%20sesi%C3%B3n"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex btn-primary text-sm"
            >
              Reservar sesión
            </a>

            {/* Hamburger button */}
            <button
              className="md:hidden relative z-[60] flex flex-col justify-center items-center w-10 h-10 rounded-xl bg-[#6B7D3A] shadow"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={menuOpen}
            >
              <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[3px]" : "-translate-y-1"}`} />
              <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[3px]" : "translate-y-1"}`} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-[55] md:hidden transition-all duration-300 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-[#1E1E1E]/40 backdrop-blur-sm" onClick={() => setMenuOpen(false)} />

        {/* Drawer */}
        <div
          className={`absolute top-0 right-0 h-full w-72 bg-[#F5F1EB] shadow-2xl flex flex-col transition-transform duration-300 ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Drawer header */}
          <div className="flex items-center justify-between px-6 pt-6 pb-4 border-b border-[#e8e2d9]">
            <a href={getHref("#hero")} onClick={() => setMenuOpen(false)} className="flex items-center gap-0 font-serif font-semibold text-[#1E1E1E]">
              <img src={imgMandala} alt="Mandala" className="w-10 h-10 object-contain -mr-1" />
              Belu Lorusso
            </a>
            <button
              onClick={() => setMenuOpen(false)}
              className="w-8 h-8 flex items-center justify-center rounded-full bg-[#e8e2d9] text-[#1E1E1E] hover:bg-[#6B7D3A] hover:text-white transition-colors"
              aria-label="Cerrar menú"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Nav links */}
          <nav className="flex flex-col px-6 pt-6 gap-1 flex-1">
            {NAV_LINKS.map((link, i) => (
              <a
                key={link.href}
                href={getHref(link.href)}
                onClick={() => setMenuOpen(false)}
                className="flex items-center gap-3 text-base font-medium text-[#1E1E1E] hover:text-[#6B7D3A] py-3 border-b border-[#e8e2d9] transition-colors"
                style={{ transitionDelay: menuOpen ? `${i * 40}ms` : "0ms" }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#6B7D3A] flex-shrink-0" />
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="px-6 pb-8 pt-4 flex flex-col gap-3">
            <a
              href="https://wa.me/34633070753?text=Hola%20Belu%2C%20quiero%20reservar%20una%20sesi%C3%B3n"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-center text-sm flex items-center justify-center gap-2"
              onClick={() => setMenuOpen(false)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Reservar sesión
            </a>
            <p className="text-xs text-center text-[#6B6B6B]">lorussobelen@gmail.com</p>
          </div>
        </div>
      </div>
    </>
  );
}
