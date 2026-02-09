"use client";

import { useState, useEffect, useCallback } from "react";

/* ───────────────────────────── FAQ Item Component ───────────────────────── */
function FAQItem({ q, a, open, toggle }: { q: string; a: string; open: boolean; toggle: () => void }) {
  return (
    <div className="border border-slate-200 rounded-xl overflow-hidden">
      <button
        onClick={toggle}
        className="w-full flex items-center justify-between p-5 text-left bg-white hover:bg-mint transition-colors"
        aria-expanded={open}
      >
        <span className="font-semibold text-slate-800 pr-4">{q}</span>
        <svg
          className={`w-5 h-5 text-teal-primary shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
          fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <p className="px-5 pb-5 text-slate-600 leading-relaxed">{a}</p>
      </div>
    </div>
  );
}

/* ───────────────────────────── Service Icons (Inline SVG) ───────────────── */
function ImplanteIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12" xmlns="http://www.w3.org/2000/svg">
      <rect x="18" y="4" width="12" height="16" rx="3" stroke="currentColor" strokeWidth="2.5" />
      <path d="M20 20h8v4l-1 4h-6l-1-4v-4z" stroke="currentColor" strokeWidth="2.5" />
      <path d="M21 28h6v4h-6z" stroke="currentColor" strokeWidth="2" />
      <path d="M22 32h4v8a2 2 0 01-2 2h0a2 2 0 01-2-2v-8z" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}
function OrtoIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12" xmlns="http://www.w3.org/2000/svg">
      <rect x="6" y="18" width="36" height="12" rx="6" stroke="currentColor" strokeWidth="2.5" />
      <rect x="14" y="21" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="2" />
      <rect x="28" y="21" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="2" />
      <line x1="20" y1="24" x2="28" y2="24" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}
function BlanqueamientoIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12" xmlns="http://www.w3.org/2000/svg">
      <path d="M24 6c-6 0-10 6-10 14s4 18 6 22a4 4 0 004 0c2-4 6-14 6-22S30 6 24 6z" stroke="currentColor" strokeWidth="2.5" />
      <path d="M19 20l3 3 7-7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function GeneralIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12" xmlns="http://www.w3.org/2000/svg">
      <circle cx="24" cy="24" r="18" stroke="currentColor" strokeWidth="2.5" />
      <path d="M24 14v10l7 4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}
function EsteticaIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12" xmlns="http://www.w3.org/2000/svg">
      <path d="M24 4l4 8 8 2-6 6 2 8-8-4-8 4 2-8-6-6 8-2 4-8z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
    </svg>
  );
}
function EndodonciaIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12" xmlns="http://www.w3.org/2000/svg">
      <path d="M24 6c-6 0-10 6-10 14s4 18 6 22a4 4 0 004 0c2-4 6-14 6-22S30 6 24 6z" stroke="currentColor" strokeWidth="2.5" />
      <line x1="24" y1="14" x2="24" y2="30" stroke="currentColor" strokeWidth="2" />
      <line x1="20" y1="18" x2="24" y2="22" stroke="currentColor" strokeWidth="2" />
      <line x1="28" y1="18" x2="24" y2="22" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

const serviceIcons: Record<string, () => JSX.Element> = {
  Implantes: ImplanteIcon,
  Ortodoncia: OrtoIcon,
  Blanqueamiento: BlanqueamientoIcon,
  "Odontología General": GeneralIcon,
  "Estética Dental": EsteticaIcon,
  Endodoncia: EndodonciaIcon,
};

/* ───────────────────────────── Data ───────────────────────────────────── */
const services = [
  { name: "Implantes", desc: "Reemplazá piezas perdidas con implantes de titanio de última generación." },
  { name: "Ortodoncia", desc: "Brackets metálicos, estéticos y alineadores invisibles para todas las edades." },
  { name: "Blanqueamiento", desc: "Sonrisa más blanca en una sola sesión con tecnología LED profesional." },
  { name: "Odontología General", desc: "Controles, limpiezas y tratamientos preventivos para toda la familia." },
  { name: "Estética Dental", desc: "Carillas, diseño de sonrisa y restauraciones que se ven naturales." },
  { name: "Endodoncia", desc: "Tratamiento de conducto indoloro con instrumental rotatorio de última generación." },
];

const testimonials = [
  { name: "María G.", initial: "M", rating: 5, quote: "Excelente atención. Me hice los implantes y el resultado superó mis expectativas. Muy profesional.", treatment: "Implantes" },
  { name: "Carlos R.", initial: "C", rating: 5, quote: "Fui con mucho miedo al dentista y el Dr. Delgado me hizo sentir tranquilo. Recomendado 100%.", treatment: "Odontología General" },
  { name: "Lucía P.", initial: "L", rating: 5, quote: "Mi blanqueamiento quedó increíble. En una hora ya tenía la sonrisa que siempre quise.", treatment: "Blanqueamiento" },
  { name: "Roberto S.", initial: "R", rating: 4, quote: "Muy buena experiencia con la ortodoncia. El tratamiento fue rápido y los resultados son geniales.", treatment: "Ortodoncia" },
];

const faqs = [
  { q: "¿Cómo saco un turno?", a: "Podés sacar turno por WhatsApp al +54 9 11 5555-1234, por teléfono o completando el formulario de contacto en esta página. Respondemos en menos de 2 horas en horario laboral." },
  { q: "¿Trabajan con obras sociales?", a: "Sí, trabajamos con OSDE, Swiss Medical, Galeno, Medifé y otras. Consultanos por tu obra social específica y te indicamos la cobertura disponible." },
  { q: "¿Qué debo saber antes de mi primera visita?", a: "Traé tu DNI, carnet de obra social (si tenés) y estudios previos si los hubiera. La primera consulta incluye evaluación completa y radiografías digitales." },
  { q: "¿Atienden urgencias dentales?", a: "Sí, atendemos urgencias de lunes a viernes. Llamá al +54 9 11 5555-1234 y te daremos un turno prioritario lo antes posible." },
  { q: "¿Los tratamientos son dolorosos?", a: "Utilizamos anestesia local de última generación y técnicas mínimamente invasivas. La gran mayoría de nuestros pacientes reportan cero dolor durante los procedimientos." },
  { q: "¿Cuál es la política de cancelación?", a: "Pedimos avisar con al menos 24 horas de anticipación. Podés reprogramar sin cargo. Dos inasistencias sin aviso pueden afectar la prioridad en la agenda." },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const processSteps = [
  { num: "01", title: "Contacto", desc: "Escribinos por WhatsApp o completá el formulario. Respondemos rápido.", icon: "📞" },
  { num: "02", title: "Evaluación", desc: "Primera consulta con diagnóstico completo y radiografías digitales.", icon: "🔍" },
  { num: "03", title: "Plan de Tratamiento", desc: "Te presentamos opciones claras con costos y tiempos estimados.", icon: "📋" },
  { num: "04", title: "Tu Nueva Sonrisa", desc: "Realizamos el tratamiento con la mejor tecnología disponible.", icon: "😊" },
];

const obrasSociales = ["OSDE", "Swiss Medical", "Galeno", "Medifé", "OMINT", "Accord Salud"];

/* ───────────────────────────── Main Page ──────────────────────────────── */
export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [showMobileCta, setShowMobileCta] = useState(false);

  useEffect(() => {
    const handler = () => {
      setScrolled(window.scrollY > 50);
      setShowMobileCta(window.scrollY > 600);
    };
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const navLinks = [
    { label: "Inicio", href: "#inicio" },
    { label: "Tratamientos", href: "#tratamientos" },
    { label: "Nosotros", href: "#nosotros" },
    { label: "Testimonios", href: "#testimonios" },
    { label: "FAQ", href: "#faq" },
    { label: "Contacto", href: "#contacto" },
  ];

  const scrollTo = useCallback((href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <>
      {/* ─── 1. STICKY HEADER ──────────────────────────────────────────── */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/80 backdrop-blur-lg shadow-sm border-b border-slate-100"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
          {/* Logo */}
          <a href="#inicio" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-teal-primary flex items-center justify-center">
              <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-white" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2c-3 0-5 3-5 7s2 9 3 11a2 2 0 002 0c1-2 3-7 3-11s-2-7-5-7z" fill="currentColor" />
              </svg>
            </div>
            <div className="hidden sm:block">
              <p className="font-semibold text-slate-800 text-sm leading-tight">Dr. Martín Delgado</p>
              <p className="text-xs text-slate-500">Odontología Integral</p>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((l) => (
              <button
                key={l.href}
                onClick={() => scrollTo(l.href)}
                className="text-sm font-medium text-slate-600 hover:text-teal-primary transition-colors"
              >
                {l.label}
              </button>
            ))}
          </nav>

          {/* Desktop CTA + Phone */}
          <div className="hidden lg:flex items-center gap-4">
            <a href="tel:+5491155551234" className="text-sm text-slate-500 hover:text-teal-primary transition-colors">
              +54 9 11 5555-1234
            </a>
            <button
              onClick={() => scrollTo("#contacto")}
              className="bg-coral hover:bg-coral-dark text-white font-semibold text-sm px-5 py-2.5 rounded-full transition-colors"
            >
              Pedir Turno
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden p-2 -mr-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span className={`w-full h-0.5 bg-slate-700 transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`w-full h-0.5 bg-slate-700 transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
              <span className={`w-full h-0.5 bg-slate-700 transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </div>
          </button>
        </div>

        {/* Mobile Full-Screen Overlay */}
        {menuOpen && (
          <div className="lg:hidden fixed inset-0 top-20 bg-white z-40 flex flex-col items-center justify-center gap-8">
            {navLinks.map((l) => (
              <button
                key={l.href}
                onClick={() => scrollTo(l.href)}
                className="text-2xl font-semibold text-slate-700 hover:text-teal-primary transition-colors"
              >
                {l.label}
              </button>
            ))}
            <button
              onClick={() => scrollTo("#contacto")}
              className="mt-4 bg-coral hover:bg-coral-dark text-white font-semibold px-8 py-3 rounded-full text-lg transition-colors"
            >
              Pedir Turno
            </button>
            <a href="tel:+5491155551234" className="text-slate-500 text-lg">
              +54 9 11 5555-1234
            </a>
          </div>
        )}
      </header>

      <main>
        {/* ─── 2. HERO SECTION ───────────────────────────────────────────── */}
        <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-mint via-white to-warm pt-20">
          {/* Decorative shapes */}
          <div className="absolute top-20 right-0 w-[50%] h-full opacity-30">
            <div className="absolute top-10 right-10 w-72 h-72 rounded-full bg-teal-primary/20 blur-3xl" />
            <div className="absolute bottom-20 right-40 w-56 h-56 rounded-full bg-coral/15 blur-3xl" />
            <div className="absolute top-1/3 right-20 w-40 h-40 rounded-full border-4 border-teal-primary/20" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20 lg:py-32 relative z-10">
            <div className="lg:max-w-[60%]">
              <div className="inline-flex items-center gap-2 bg-teal-primary/10 text-teal-primary font-medium text-sm px-4 py-1.5 rounded-full mb-6">
                <span className="w-2 h-2 bg-teal-primary rounded-full animate-pulse" />
                Turnos disponibles esta semana
              </div>
              <h1 className="font-[family-name:var(--font-playfair)] text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 leading-[1.1] mb-6">
                Tu sonrisa{" "}
                <span className="text-teal-primary">merece</span>{" "}
                lo mejor
              </h1>
              <p className="text-lg sm:text-xl text-slate-600 max-w-xl mb-8 leading-relaxed">
                Odontología integral con tecnología de vanguardia y un trato humano que te hace sentir en confianza. En el corazón de Buenos Aires.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <button
                  onClick={() => scrollTo("#contacto")}
                  className="bg-coral hover:bg-coral-dark text-white font-semibold px-8 py-4 rounded-full text-lg transition-all hover:shadow-lg hover:shadow-coral/25 active:scale-[0.98]"
                >
                  Agendar Turno
                </button>
                <button
                  onClick={() => scrollTo("#tratamientos")}
                  className="border-2 border-slate-300 hover:border-teal-primary text-slate-700 hover:text-teal-primary font-semibold px-8 py-4 rounded-full text-lg transition-all"
                >
                  Ver Tratamientos
                </button>
              </div>
              {/* Trust indicators */}
              <div className="flex flex-wrap gap-6 text-sm text-slate-500">
                <span className="flex items-center gap-1.5">
                  <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  <strong className="text-slate-700">4.9</strong> en Google
                </span>
                <span className="text-slate-300">|</span>
                <span><strong className="text-slate-700">18+</strong> años de experiencia</span>
                <span className="text-slate-300">|</span>
                <span><strong className="text-slate-700">3000+</strong> pacientes atendidos</span>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 3. TRUST BAR ──────────────────────────────────────────────── */}
        <section className="bg-teal-primary text-white py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: "⭐", value: "4.9/5", label: "Rating en Google" },
              { icon: "🏥", value: "18+", label: "Años de experiencia" },
              { icon: "😊", value: "3000+", label: "Pacientes atendidos" },
              { icon: "🎓", value: "M.P. 4521", label: "Matrícula profesional" },
            ].map((item) => (
              <div key={item.label} className="text-center">
                <div className="text-3xl mb-2">{item.icon}</div>
                <div className="text-2xl sm:text-3xl font-bold">{item.value}</div>
                <div className="text-teal-100 text-sm mt-1">{item.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ─── 4. SERVICES / TREATMENTS ───────────────────────────────────── */}
        <section id="tratamientos" className="py-20 lg:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="text-teal-primary font-semibold text-sm uppercase tracking-wider mb-3">Nuestros Tratamientos</p>
              <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
                Soluciones para cada sonrisa
              </h2>
              <p className="text-slate-500 text-lg">
                Ofrecemos tratamientos integrales con la mejor tecnología y materiales de primera calidad.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((s) => {
                const Icon = serviceIcons[s.name];
                return (
                  <div
                    key={s.name}
                    className="group p-8 rounded-2xl border border-slate-100 bg-white hover:border-teal-primary/30 hover:shadow-xl hover:shadow-teal-primary/5 hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="w-16 h-16 rounded-2xl bg-mint flex items-center justify-center text-teal-primary mb-5 group-hover:bg-teal-primary group-hover:text-white transition-colors duration-300">
                      {Icon && <Icon />}
                    </div>
                    <h3 className="text-xl font-bold text-slate-800 mb-2">{s.name}</h3>
                    <p className="text-slate-500 leading-relaxed">{s.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ─── 5. ABOUT / DOCTOR PROFILE ──────────────────────────────────── */}
        <section id="nosotros" className="py-20 lg:py-28 bg-mint">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Decorative left */}
              <div className="relative">
                <div className="aspect-[4/5] rounded-3xl bg-gradient-to-br from-teal-primary/20 to-teal-primary/5 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 rounded-full bg-teal-primary/20 mx-auto mb-6 flex items-center justify-center">
                      <svg className="w-16 h-16 text-teal-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0" />
                      </svg>
                    </div>
                    <p className="text-teal-primary/60 text-sm font-medium">Foto del Dr. Delgado</p>
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-coral/20 rounded-2xl -z-10" />
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-teal-primary/10 rounded-full -z-10" />
              </div>
              {/* Bio right */}
              <div>
                <p className="text-teal-primary font-semibold text-sm uppercase tracking-wider mb-3">Sobre Nosotros</p>
                <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
                  Dr. Martín Delgado
                </h2>
                <p className="text-slate-600 text-lg leading-relaxed mb-6">
                  Con más de 18 años de experiencia, el Dr. Delgado lidera un equipo comprometido con la excelencia en odontología integral. Egresado de la UBA y con formación de posgrado en implantología y estética dental.
                </p>
                <p className="text-slate-600 leading-relaxed mb-8">
                  &quot;Creo que cada paciente merece un tratamiento personalizado, sin apuros, con explicaciones claras y resultados que superen sus expectativas. La confianza se construye en cada visita.&quot;
                </p>
                <div className="flex flex-wrap gap-3 mb-8">
                  {["M.P. 4521", "UBA", "Implantología", "Estética Dental", "18+ años"].map((badge) => (
                    <span
                      key={badge}
                      className="bg-white text-teal-primary border border-teal-primary/20 text-sm font-medium px-4 py-2 rounded-full"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
                <button
                  onClick={() => scrollTo("#contacto")}
                  className="bg-teal-primary hover:bg-teal-dark text-white font-semibold px-8 py-4 rounded-full text-lg transition-all hover:shadow-lg hover:shadow-teal-primary/25"
                >
                  Agendar primera consulta
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 6. BEFORE & AFTER GALLERY ──────────────────────────────────── */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="text-teal-primary font-semibold text-sm uppercase tracking-wider mb-3">Resultados Reales</p>
              <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
                Antes y Después
              </h2>
              <p className="text-slate-500 text-lg">
                Casos reales de pacientes que transformaron su sonrisa en nuestro consultorio.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { treatment: "Blanqueamiento Dental", desc: "Blanqueamiento LED profesional en una sesión" },
                { treatment: "Carillas de Porcelana", desc: "Diseño de sonrisa completo con carillas" },
                { treatment: "Implantes Dentales", desc: "Reemplazo de pieza con implante de titanio" },
              ].map((item) => (
                <div key={item.treatment} className="rounded-2xl overflow-hidden border border-slate-100 hover:shadow-lg transition-shadow">
                  <div className="grid grid-cols-2">
                    <div className="aspect-square bg-slate-200 flex items-center justify-center relative">
                      <span className="text-slate-400 text-sm font-medium">Antes</span>
                      <span className="absolute top-2 left-2 bg-slate-600/80 text-white text-xs px-2 py-0.5 rounded">Antes</span>
                    </div>
                    <div className="aspect-square bg-mint flex items-center justify-center relative">
                      <span className="text-teal-primary text-sm font-medium">Después</span>
                      <span className="absolute top-2 left-2 bg-teal-primary/80 text-white text-xs px-2 py-0.5 rounded">Después</span>
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-slate-800 mb-1">{item.treatment}</h3>
                    <p className="text-slate-500 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-center text-slate-400 text-sm mt-8 italic">
              * Imágenes con consentimiento del paciente. Los resultados pueden variar.
            </p>
          </div>
        </section>

        {/* ─── 7. TESTIMONIALS ────────────────────────────────────────────── */}
        <section id="testimonios" className="py-20 lg:py-28 bg-warm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="text-coral font-semibold text-sm uppercase tracking-wider mb-3">Testimonios</p>
              <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
                Lo que dicen nuestros pacientes
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {testimonials.map((t) => (
                <div key={t.name} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-1 mb-4">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <svg
                        key={i}
                        className={`w-5 h-5 ${i < t.rating ? "text-yellow-400" : "text-slate-200"}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-slate-600 leading-relaxed mb-6 italic">&quot;{t.quote}&quot;</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-teal-primary/10 flex items-center justify-center text-teal-primary font-bold text-sm">
                      {t.initial}
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800 text-sm">{t.name}</p>
                      <p className="text-slate-400 text-xs">{t.treatment}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-10">
              <a
                href="https://g.page/r/placeholder/review"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-teal-primary hover:text-teal-dark font-medium transition-colors"
              >
                Ver todas las reseñas en Google
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* ─── 8. HOW IT WORKS / PROCESS ──────────────────────────────────── */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="text-teal-primary font-semibold text-sm uppercase tracking-wider mb-3">Proceso</p>
              <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
                ¿Cómo funciona?
              </h2>
              <p className="text-slate-500 text-lg">
                En cuatro pasos simples, transformamos tu sonrisa.
              </p>
            </div>
            {/* Desktop horizontal / Mobile vertical */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
              {/* Connecting line (desktop) */}
              <div className="hidden lg:block absolute top-16 left-[12.5%] right-[12.5%] h-0.5 bg-teal-primary/20" />
              {processSteps.map((step) => (
                <div key={step.num} className="text-center relative">
                  <div className="w-16 h-16 rounded-full bg-teal-primary text-white text-2xl flex items-center justify-center mx-auto mb-5 relative z-10 shadow-lg shadow-teal-primary/20">
                    {step.icon}
                  </div>
                  <div className="text-teal-primary font-bold text-sm mb-2">{step.num}</div>
                  <h3 className="text-lg font-bold text-slate-800 mb-2">{step.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── 9. PRICING / INSURANCE ─────────────────────────────────────── */}
        <section className="py-20 lg:py-28 bg-mint">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="text-teal-primary font-semibold text-sm uppercase tracking-wider mb-3">Obras Sociales y Pagos</p>
              <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
                Facilitamos tu acceso
              </h2>
              <p className="text-slate-500 text-lg">
                Trabajamos con las principales obras sociales y ofrecemos múltiples medios de pago.
              </p>
            </div>
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Obras sociales */}
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <h3 className="text-xl font-bold text-slate-800 mb-6">Obras Sociales</h3>
                <div className="flex flex-wrap gap-3">
                  {obrasSociales.map((os) => (
                    <span key={os} className="bg-slate-50 border border-slate-200 text-slate-700 text-sm font-medium px-4 py-2 rounded-lg">
                      {os}
                    </span>
                  ))}
                </div>
                <p className="text-slate-400 text-sm mt-4">y más — consultanos por la tuya</p>
              </div>
              {/* Medios de pago */}
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <h3 className="text-xl font-bold text-slate-800 mb-6">Medios de Pago</h3>
                <ul className="space-y-3 text-slate-600">
                  {["Efectivo", "Tarjetas de crédito y débito", "Transferencia bancaria", "Mercado Pago", "Planes de financiación"].map((m) => (
                    <li key={m} className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-teal-primary shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      {m}
                    </li>
                  ))}
                </ul>
              </div>
              {/* Primera consulta */}
              <div className="bg-teal-primary rounded-2xl p-8 text-white">
                <h3 className="text-xl font-bold mb-4">Primera Consulta</h3>
                <p className="text-teal-100 mb-4">Incluye evaluación completa y radiografías digitales.</p>
                <div className="text-4xl font-bold mb-2">Consultar</div>
                <p className="text-teal-100 text-sm mb-6">El valor depende de tu obra social</p>
                <button
                  onClick={() => scrollTo("#contacto")}
                  className="w-full bg-white text-teal-primary font-semibold py-3 rounded-full hover:bg-teal-50 transition-colors"
                >
                  Consultar por tu obra social
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 10. FAQ ───────────────────────────────────────────────────── */}
        <section id="faq" className="py-20 lg:py-28 bg-white">
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
          />
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-16">
              <p className="text-teal-primary font-semibold text-sm uppercase tracking-wider mb-3">Preguntas Frecuentes</p>
              <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
                ¿Tenés dudas?
              </h2>
            </div>
            <div className="space-y-3">
              {faqs.map((f, i) => (
                <FAQItem
                  key={i}
                  q={f.q}
                  a={f.a}
                  open={openFaq === i}
                  toggle={() => setOpenFaq(openFaq === i ? null : i)}
                />
              ))}
            </div>
          </div>
        </section>

        {/* ─── 11. LOCATION / MAP ────────────────────────────────────────── */}
        <section className="py-20 lg:py-28 bg-mint">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Info */}
              <div>
                <p className="text-teal-primary font-semibold text-sm uppercase tracking-wider mb-3">Ubicación</p>
                <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl font-bold text-slate-900 mb-8">
                  Visitanos en CABA
                </h2>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-teal-primary/10 flex items-center justify-center text-teal-primary shrink-0">
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800">Dirección</p>
                      <p className="text-slate-600">Av. Corrientes 1234, Piso 3</p>
                      <p className="text-slate-600">CABA, Argentina</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-teal-primary/10 flex items-center justify-center text-teal-primary shrink-0">
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800">Horarios de Atención</p>
                      <table className="text-sm text-slate-600 mt-1">
                        <tbody>
                          <tr><td className="pr-4 py-0.5">Lunes a Viernes</td><td>9:00 — 19:00</td></tr>
                          <tr><td className="pr-4 py-0.5">Sábados</td><td>9:00 — 13:00</td></tr>
                          <tr><td className="pr-4 py-0.5 text-slate-400">Domingos</td><td className="text-slate-400">Cerrado</td></tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-teal-primary/10 flex items-center justify-center text-teal-primary shrink-0">
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800">Acceso</p>
                      <p className="text-slate-600">Subte línea B — Estación Carlos Pellegrini</p>
                      <p className="text-slate-600">Estacionamiento en el edificio</p>
                    </div>
                  </div>
                </div>
                <a
                  href="https://maps.google.com/?q=Av.+Corrientes+1234+CABA+Argentina"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-8 bg-teal-primary hover:bg-teal-dark text-white font-semibold px-6 py-3 rounded-full transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Cómo llegar
                </a>
              </div>
              {/* Map placeholder */}
              <div className="rounded-2xl overflow-hidden border border-slate-200 bg-white aspect-square lg:aspect-[4/3] flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-20 h-20 bg-teal-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-10 h-10 text-teal-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
                    </svg>
                  </div>
                  <p className="text-slate-500 font-medium mb-2">Mapa Interactivo</p>
                  <p className="text-slate-400 text-sm mb-4">Av. Corrientes 1234, Piso 3, CABA</p>
                  <a
                    href="https://maps.google.com/?q=Av.+Corrientes+1234+CABA+Argentina"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-teal-primary hover:text-teal-dark font-medium text-sm transition-colors"
                  >
                    Abrir en Google Maps →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 12. EMERGENCY CONTACT ──────────────────────────────────────── */}
        <section className="bg-slate-dark text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-coral/20 flex items-center justify-center animate-pulse">
                  <svg className="w-7 h-7 text-coral" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xl font-bold">Urgencias Dentales</p>
                  <p className="text-slate-400">Lunes a Viernes — Atención prioritaria</p>
                </div>
              </div>
              <a
                href="tel:+5491155551234"
                className="bg-coral hover:bg-coral-dark text-white font-bold text-lg px-8 py-4 rounded-full transition-colors"
              >
                Llamar: +54 9 11 5555-1234
              </a>
            </div>
          </div>
        </section>

        {/* ─── 13. FINAL CTA + CONTACT FORM ───────────────────────────────── */}
        <section id="contacto" className="py-20 lg:py-28 bg-gradient-to-br from-teal-primary to-teal-dark text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
              {/* Left: CTA text */}
              <div className="flex flex-col justify-center">
                <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                  Empezá a transformar tu sonrisa hoy
                </h2>
                <p className="text-teal-100 text-lg leading-relaxed mb-8">
                  Completá el formulario o escribinos directamente. Respondemos en menos de 2 horas durante el horario laboral.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://wa.me/5491155551234?text=Hola%2C%20quiero%20consultar%20por%20un%20turno"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20BD5A] text-white font-semibold px-6 py-4 rounded-full transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.75.75 0 00.917.918l4.458-1.495A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.32 0-4.47-.746-6.215-2.013l-.354-.27-3.107 1.042 1.042-3.107-.27-.354A9.935 9.935 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
                    </svg>
                    WhatsApp
                  </a>
                  <a
                    href="tel:+5491155551234"
                    className="inline-flex items-center justify-center gap-2 bg-white/20 hover:bg-white/30 text-white font-semibold px-6 py-4 rounded-full transition-colors backdrop-blur-sm"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Llamar ahora
                  </a>
                </div>
              </div>
              {/* Right: Contact form */}
              <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-2xl">
                <h3 className="text-xl font-bold text-slate-800 mb-6">Solicitá tu turno</h3>
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Nombre completo</label>
                    <input
                      type="text"
                      placeholder="Juan Pérez"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-teal-primary focus:ring-2 focus:ring-teal-primary/20 outline-none transition-all text-slate-800"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Teléfono / WhatsApp</label>
                    <input
                      type="tel"
                      placeholder="+54 9 11 ..."
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-teal-primary focus:ring-2 focus:ring-teal-primary/20 outline-none transition-all text-slate-800"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                    <input
                      type="email"
                      placeholder="juan@email.com"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-teal-primary focus:ring-2 focus:ring-teal-primary/20 outline-none transition-all text-slate-800"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Tratamiento de interés</label>
                    <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-teal-primary focus:ring-2 focus:ring-teal-primary/20 outline-none transition-all text-slate-800 bg-white">
                      <option value="">Seleccionar...</option>
                      {services.map((s) => (
                        <option key={s.name} value={s.name}>{s.name}</option>
                      ))}
                      <option value="otro">Otro / No sé</option>
                    </select>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-coral hover:bg-coral-dark text-white font-bold py-4 rounded-xl text-lg transition-colors mt-2"
                  >
                    Solicitar Turno
                  </button>
                  <p className="text-xs text-slate-400 text-center">
                    Respondemos en menos de 2 horas en horario laboral.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ─── 14. FOOTER ───────────────────────────────────────────────────── */}
      <footer className="bg-slate-dark text-slate-300 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
            {/* About */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-teal-primary flex items-center justify-center">
                  <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-white" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2c-3 0-5 3-5 7s2 9 3 11a2 2 0 002 0c1-2 3-7 3-11s-2-7-5-7z" fill="currentColor" />
                  </svg>
                </div>
                <span className="font-bold text-white">Dr. Delgado</span>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed">
                Odontología Integral Delgado. Más de 18 años cuidando sonrisas en el corazón de Buenos Aires.
              </p>
              <p className="text-sm text-slate-500 mt-3">M.P. 4521 — U.B.A.</p>
            </div>
            {/* Quick Links */}
            <div>
              <h4 className="font-bold text-white mb-4">Enlaces</h4>
              <ul className="space-y-2 text-sm">
                {navLinks.map((l) => (
                  <li key={l.href}>
                    <button onClick={() => scrollTo(l.href)} className="text-slate-400 hover:text-teal-light transition-colors">
                      {l.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            {/* Contact */}
            <div>
              <h4 className="font-bold text-white mb-4">Contacto</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 mt-0.5 text-teal-light shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-slate-400">Av. Corrientes 1234, Piso 3, CABA</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-teal-light shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <a href="tel:+5491155551234" className="text-slate-400 hover:text-teal-light transition-colors">
                    +54 9 11 5555-1234
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-teal-light shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a href="mailto:contacto@drdelgado.com.ar" className="text-slate-400 hover:text-teal-light transition-colors">
                    contacto@drdelgado.com.ar
                  </a>
                </li>
              </ul>
            </div>
            {/* Social */}
            <div>
              <h4 className="font-bold text-white mb-4">Seguinos</h4>
              <div className="flex gap-3">
                {[
                  { label: "Instagram", icon: <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /> },
                  { label: "Facebook", icon: <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /> },
                ].map((s) => (
                  <a
                    key={s.label}
                    href="#"
                    aria-label={s.label}
                    className="w-10 h-10 rounded-lg bg-slate-mid flex items-center justify-center text-slate-400 hover:bg-teal-primary hover:text-white transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">{s.icon}</svg>
                  </a>
                ))}
              </div>
              <div className="mt-6">
                <a href="#" className="text-sm text-slate-500 hover:text-slate-300 transition-colors">
                  Política de privacidad
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-700/50 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-500">
            <p>&copy; {new Date().getFullYear()} Odontología Integral Delgado. Todos los derechos reservados.</p>
            <p>
              Diseñado y desarrollado por{" "}
              <a href="#" className="text-teal-light hover:text-white transition-colors">
                Tu Agencia
              </a>
            </p>
          </div>
        </div>
      </footer>

      {/* ─── 15. FLOATING ELEMENTS ─────────────────────────────────────────── */}
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/5491155551234?text=Hola%2C%20quiero%20consultar%20por%20un%20turno"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] hover:bg-[#20BD5A] rounded-full flex items-center justify-center shadow-lg shadow-[#25D366]/30 hover:scale-110 transition-all"
        aria-label="Chat por WhatsApp"
      >
        <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.75.75 0 00.917.918l4.458-1.495A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.32 0-4.47-.746-6.215-2.013l-.354-.27-3.107 1.042 1.042-3.107-.27-.354A9.935 9.935 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
        </svg>
      </a>

      {/* Sticky Mobile CTA Bar */}
      <div
        className={`fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-white border-t border-slate-200 shadow-[0_-4px_20px_rgba(0,0,0,0.1)] transition-transform duration-300 ${
          showMobileCta ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="flex items-center gap-3 p-3 max-w-lg mx-auto">
          <a
            href="tel:+5491155551234"
            className="flex-1 flex items-center justify-center gap-2 bg-teal-primary text-white font-semibold py-3 rounded-xl text-sm"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Llamar
          </a>
          <button
            onClick={() => scrollTo("#contacto")}
            className="flex-1 flex items-center justify-center gap-2 bg-coral text-white font-semibold py-3 rounded-xl text-sm"
          >
            Pedir Turno
          </button>
        </div>
      </div>
    </>
  );
}
