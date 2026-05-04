const VALUES = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    title: "Escucha corporal",
    description: "Tu cuerpo habla. Aprendemos a escuchar sus señales para restablecer el equilibrio natural.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: "Liberación y bienestar",
    description: "Soltamos tensiones acumuladas y abrimos espacio para el bienestar físico y emocional.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: "Conexión y presencia",
    description: "Volvés al momento presente, a tu centro, a una vida más plena y consciente.",
  },
];

export default function ValueSection() {
  return (
    <section id="sobre-mi" className="section-padding bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif text-[#1E1E1E] mb-3">
            Un espacio para volver a ti
          </h2>
          <p className="text-[#6B6B6B] max-w-md mx-auto">
            Cada sesión es una invitación a reconectar con lo más auténtico de tu ser.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {VALUES.map((item) => (
            <div
              key={item.title}
              className="flex flex-col items-center text-center gap-4 p-8 rounded-2xl bg-[#F5F1EB]"
            >
              <div className="text-[#6B7D3A]">{item.icon}</div>
              <h3 className="text-xl font-serif text-[#1E1E1E]">{item.title}</h3>
              <p className="text-[#6B6B6B] text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
