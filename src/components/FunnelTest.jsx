import { useState, useEffect } from "react";

// ─── Data ────────────────────────────────────────────────────────────────────

const QUESTIONS = [
  {
    id: 1,
    question: "¿Qué describe mejor cómo te sentís últimamente?",
    options: [
      { label: "Agotada/o y sin energía", value: "agotamiento" },
      { label: "Tensa/o y con mucha tensión corporal", value: "tension" },
      { label: "Desconectada/o de mí misma/o", value: "desconexion" },
      { label: "Ansiosa/o y con la mente acelerada", value: "ansiedad" },
    ],
  },
  {
    id: 2,
    question: "¿Qué área de tu vida querés transformar primero?",
    options: [
      { label: "Mi cuerpo y cómo lo habito", value: "cuerpo" },
      { label: "Mis emociones y estado de ánimo", value: "emociones" },
      { label: "Mi vitalidad y energía diaria", value: "vitalidad" },
      { label: "Mis vínculos y conexión con otros", value: "vinculos" },
    ],
  },
  {
    id: 3,
    question: "¿Cuándo fue la última vez que te diste un espacio solo para vos?",
    options: [
      { label: "Hace mucho tiempo", value: "mucho" },
      { label: "El mes pasado", value: "mes" },
      { label: "Esta semana", value: "semana" },
      { label: "Nunca lo prioricé", value: "nunca" },
    ],
  },
];

// ─── Result logic ─────────────────────────────────────────────────────────────

function getRecommendation(answers) {
  if (answers.includes("tension") || answers.includes("cuerpo")) {
    return {
      title: "Masaje Integral-Sensitivo",
      description:
        "Tu cuerpo necesita soltar. Un masaje consciente puede liberar tensiones profundas y devolverte la liviandad que extrañás.",
      cta: "Reservar mi masaje",
      href: "https://wa.me/34633070753?text=Hola%20Belu%2C%20quiero%20reservar%20un%20masaje",
    };
  }
  if (answers.includes("vinculos") || answers.includes("vitalidad")) {
    return {
      title: "Biodanza",
      description:
        "El movimiento y la música son el camino para reconectar con tu vitalidad y con los demás. La Biodanza es para vos.",
      cta: "Conocer Biodanza",
      href: "https://wa.me/34633070753?text=Hola%20Belu%2C%20quiero%20saber%20m%C3%A1s%20sobre%20Biodanza",
    };
  }
  return {
    title: "Acompañamiento terapéutico",
    description:
      "Un espacio personalizado para transitar lo que estás viviendo, integrar emociones y encontrar claridad.",
    cta: "Comenzar mi proceso",
    href: "https://wa.me/34633070753?text=Hola%20Belu%2C%20quiero%20consultar%20sobre%20acompa%C3%B1amiento",
  };
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

const TOTAL_STEPS = QUESTIONS.length + 3; // questions + result + form + final

function ProgressBar({ step }) {
  const pct = Math.round((step / TOTAL_STEPS) * 100);
  return (
    <div className="w-full h-1.5 bg-[#e8e2d9] rounded-full overflow-hidden">
      <div
        className="h-full bg-[#6B7D3A] rounded-full transition-all duration-500"
        style={{ width: `${pct}%` }}
        role="progressbar"
        aria-valuenow={pct}
        aria-valuemin={0}
        aria-valuemax={100}
      />
    </div>
  );
}

function FadeWrapper({ children, id }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = requestAnimationFrame(() => setVisible(true));
    return () => cancelAnimationFrame(t);
  }, []);

  return (
    <div
      key={id}
      className={`transition-all duration-400 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
      style={{ transitionDuration: "350ms" }}
    >
      {children}
    </div>
  );
}

// ─── Screens ─────────────────────────────────────────────────────────────────

function StartScreen({ onStart }) {
  return (
    <FadeWrapper id="start">
      <div className="flex flex-col items-center text-center gap-6 py-8">
        <div className="w-16 h-16 rounded-full bg-[#6B7D3A]/10 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-[#6B7D3A]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
          </svg>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-serif text-[#1E1E1E]">
            Descubrí qué necesita tu cuerpo
          </h2>
          <p className="text-[#6B6B6B] text-sm max-w-xs mx-auto leading-relaxed">
            3 preguntas · 2 minutos · Una recomendación personalizada para vos
          </p>
        </div>
        <button
          onClick={onStart}
          className="btn-primary px-10 py-3 text-base w-full sm:w-auto"
        >
          Empezar test
        </button>
      </div>
    </FadeWrapper>
  );
}

function QuestionScreen({ question, questionIndex, onAnswer, selectedValue }) {
  return (
    <FadeWrapper id={`q-${question.id}`}>
      <div className="flex flex-col gap-6">
        <p className="text-xs text-[#6B6B6B] font-medium tracking-widest uppercase">
          Pregunta {questionIndex + 1} de {QUESTIONS.length}
        </p>
        <h2 className="text-xl md:text-2xl font-serif text-[#1E1E1E] leading-snug">
          {question.question}
        </h2>
        <div className="flex flex-col gap-3">
          {question.options.map((opt) => {
            const isSelected = selectedValue === opt.value;
            return (
              <button
                key={opt.value}
                onClick={() => onAnswer(opt.value)}
                className={`text-left px-5 py-4 rounded-xl border-2 transition-all duration-200 text-sm font-medium
                  ${
                    isSelected
                      ? "border-[#6B7D3A] bg-[#6B7D3A]/10 text-[#4E5B2A]"
                      : "border-[#e8e2d9] bg-white text-[#1E1E1E] hover:border-[#6B7D3A]/50 hover:bg-[#6B7D3A]/5"
                  }`}
              >
                {opt.label}
              </button>
            );
          })}
        </div>
      </div>
    </FadeWrapper>
  );
}

function ResultPreviewScreen({ onNext }) {
  return (
    <FadeWrapper id="result-preview">
      <div className="flex flex-col items-center text-center gap-6 py-4">
        <div className="w-16 h-16 rounded-full bg-[#6B7D3A]/10 flex items-center justify-center animate-pulse">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-[#6B7D3A]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-serif text-[#1E1E1E]">
            ¡Tus respuestas están listas!
          </h2>
          <p className="text-[#6B6B6B] text-sm max-w-xs mx-auto leading-relaxed">
            Dejanos tus datos para enviarte la recomendación personalizada.
          </p>
        </div>
        <button onClick={onNext} className="btn-primary px-10 w-full sm:w-auto">
          Ver mi recomendación
        </button>
      </div>
    </FadeWrapper>
  );
}

function ContactForm({ formData, onChange, onSubmit }) {
  const isValid = formData.name.trim() && formData.email.trim();

  return (
    <FadeWrapper id="contact-form">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-1">
          <h2 className="text-2xl font-serif text-[#1E1E1E]">Un último paso</h2>
          <p className="text-[#6B6B6B] text-sm">
            Completá tus datos para recibir tu recomendación personalizada.
          </p>
        </div>

        <form onSubmit={onSubmit} className="flex flex-col gap-4" noValidate>
          <div className="flex flex-col gap-1">
            <label htmlFor="funnel-name" className="text-sm font-medium text-[#1E1E1E]">
              Nombre <span className="text-[#6B7D3A]">*</span>
            </label>
            <input
              id="funnel-name"
              type="text"
              required
              placeholder="Tu nombre"
              value={formData.name}
              onChange={(e) => onChange("name", e.target.value)}
              className="border border-[#e8e2d9] rounded-xl px-4 py-3 text-sm text-[#1E1E1E] placeholder-[#6B6B6B]/60 focus:outline-none focus:border-[#6B7D3A] bg-white transition-colors"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="funnel-email" className="text-sm font-medium text-[#1E1E1E]">
              Email <span className="text-[#6B7D3A]">*</span>
            </label>
            <input
              id="funnel-email"
              type="email"
              required
              placeholder="tu@email.com"
              value={formData.email}
              onChange={(e) => onChange("email", e.target.value)}
              className="border border-[#e8e2d9] rounded-xl px-4 py-3 text-sm text-[#1E1E1E] placeholder-[#6B6B6B]/60 focus:outline-none focus:border-[#6B7D3A] bg-white transition-colors"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="funnel-phone" className="text-sm font-medium text-[#1E1E1E]">
              Teléfono{" "}
              <span className="text-[#6B6B6B] text-xs font-normal">(opcional)</span>
            </label>
            <input
              id="funnel-phone"
              type="tel"
              placeholder="+54 9 11 0000-0000"
              value={formData.phone}
              onChange={(e) => onChange("phone", e.target.value)}
              className="border border-[#e8e2d9] rounded-xl px-4 py-3 text-sm text-[#1E1E1E] placeholder-[#6B6B6B]/60 focus:outline-none focus:border-[#6B7D3A] bg-white transition-colors"
            />
          </div>

          <button
            type="submit"
            disabled={!isValid}
            className={`mt-2 btn-primary w-full py-3 text-base disabled:opacity-40 disabled:cursor-not-allowed`}
          >
            Ver mi recomendación
          </button>
        </form>
      </div>
    </FadeWrapper>
  );
}

function FinalScreen({ recommendation, name }) {
  return (
    <FadeWrapper id="final">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-1">
          <p className="text-sm text-[#6B7D3A] font-medium">
            Hola{name ? `, ${name.split(" ")[0]}` : ""}! Tu recomendación es:
          </p>
          <h2 className="text-2xl md:text-3xl font-serif text-[#1E1E1E]">
            {recommendation.title}
          </h2>
        </div>

        <p className="text-[#6B6B6B] leading-relaxed">{recommendation.description}</p>

        <div className="bg-[#6B7D3A]/8 border border-[#6B7D3A]/20 rounded-2xl p-5 flex flex-col gap-3">
          <p className="text-sm text-[#4E5B2A] font-medium">
            ¿Lista/o para empezar?
          </p>
          <p className="text-sm text-[#6B6B6B]">
            Podés reservar una sesión inicial sin compromiso. Belu te va a guiar en cada paso.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <a
            href={recommendation.href}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-center py-3 text-base flex items-center justify-center gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            {recommendation.cta}
          </a>
          <a
            href="#servicios"
            className="btn-outline text-center py-3 text-sm"
          >
            Ver todos los servicios
          </a>
        </div>
      </div>
    </FadeWrapper>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

const STEP = {
  START: "start",
  QUESTION: "question",
  RESULT_PREVIEW: "result_preview",
  FORM: "form",
  FINAL: "final",
};

export default function FunnelTest() {
  const [screen, setScreen] = useState(STEP.START);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [data, setData] = useState({ answers: [], name: "", email: "", phone: "" });
  const [pendingValue, setPendingValue] = useState(null);

  // Current step number for progress bar
  const currentStep = (() => {
    if (screen === STEP.START) return 0;
    if (screen === STEP.QUESTION) return questionIndex + 1;
    if (screen === STEP.RESULT_PREVIEW) return QUESTIONS.length + 1;
    if (screen === STEP.FORM) return QUESTIONS.length + 2;
    return TOTAL_STEPS;
  })();

  // Auto-advance after option selected
  const handleAnswer = (value) => {
    setPendingValue(value);
    const newAnswers = [...data.answers];
    newAnswers[questionIndex] = value;
    setData((prev) => ({ ...prev, answers: newAnswers }));

    setTimeout(() => {
      setPendingValue(null);
      if (questionIndex < QUESTIONS.length - 1) {
        setQuestionIndex((i) => i + 1);
      } else {
        setScreen(STEP.RESULT_PREVIEW);
      }
    }, 420);
  };

  const handleFormChange = (field, value) => {
    setData((prev) => ({ ...prev, [field]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Here you'd send `data` to your backend/CRM
    setScreen(STEP.FINAL);
  };

  return (
    <section className="section-padding bg-[#F5F1EB]">
      <div className="max-w-lg mx-auto">
        {/* Header label */}
        <div className="text-center mb-8">
          <span className="text-xs font-medium tracking-widest text-[#6B7D3A] uppercase">
            Test diagnóstico
          </span>
          <h2 className="text-3xl md:text-4xl font-serif text-[#1E1E1E] mt-1">
            ¿Qué necesita tu cuerpo hoy?
          </h2>
        </div>

        {/* Card */}
        <div className="bg-white rounded-2xl shadow-md overflow-hidden">
          {/* Progress bar */}
          {screen !== STEP.START && (
            <div className="px-6 pt-5">
              <ProgressBar step={currentStep} />
            </div>
          )}

          <div className="p-6 md:p-8">
            {screen === STEP.START && (
              <StartScreen onStart={() => setScreen(STEP.QUESTION)} />
            )}

            {screen === STEP.QUESTION && (
              <QuestionScreen
                question={QUESTIONS[questionIndex]}
                questionIndex={questionIndex}
                onAnswer={handleAnswer}
                selectedValue={pendingValue ?? data.answers[questionIndex]}
              />
            )}

            {screen === STEP.RESULT_PREVIEW && (
              <ResultPreviewScreen onNext={() => setScreen(STEP.FORM)} />
            )}

            {screen === STEP.FORM && (
              <ContactForm
                formData={data}
                onChange={handleFormChange}
                onSubmit={handleFormSubmit}
              />
            )}

            {screen === STEP.FINAL && (
              <FinalScreen
                recommendation={getRecommendation(data.answers)}
                name={data.name}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
