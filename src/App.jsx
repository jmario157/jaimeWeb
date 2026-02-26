import './App.css'

const CAR1_STEPS = [
  { img: 'img1.jpeg', label: 'Estado inicial' },
  { img: 'img2.jpeg', label: 'Evaluación' },
  { img: 'img3.jpeg', label: 'Trabajo de enderezado' },
  { img: 'img4.jpeg', label: 'Preparación' },
  { img: 'img7.jpeg', label: 'Pintura' },
  { img: 'img8.jpeg', label: 'Detalles' },
  { img: 'img9.jpeg', label: 'Resultado final' },
]

const CAR2_STEPS = [
  { img: 'img5.jpeg', label: 'Antes' },
  { img: 'img6.jpeg', label: 'Después' },
]

export default function App() {
  return (
    <div className="landing">
      <header className="hero">
        <div className="hero-bg" aria-hidden="true" />
        <div className="hero-content">
          <p className="hero-eyebrow">Taller de carrocería</p>
          <h1 className="hero-title">
            Enderezado y pintura <span className="hero-title-accent">automotriz</span>
          </h1>
          <p className="hero-desc">
            Reparamos autos chocados: enderezado de chasis y carrocería, preparación,
            pintado y barniz. Trabajo de taller con acabado profesional.
          </p>
        </div>
      </header>

      <section className="section section-process">
        <div className="container">
          <span className="section-eyebrow">En el taller</span>
          <h2 className="section-title">Proceso de trabajo</h2>
          <p className="section-desc">
            Así trabajamos una unidad: desde que entra el carro chocado hasta la entrega
            con pintura y barniz listos.
          </p>
          <div className="process-track">
            {CAR1_STEPS.map((step, i) => (
              <div key={step.img} className="process-step">
                <div className="process-step-img-wrap">
                  <img
                    src={`/img/${step.img}`}
                    alt={`Paso ${i + 1}: ${step.label}`}
                    className="process-step-img"
                    loading={i < 4 ? 'eager' : 'lazy'}
                  />
                  <span className="process-step-num">{String(i + 1).padStart(2, '0')}</span>
                  <span className="process-step-label">{step.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-before-after">
        <div className="container">
          <span className="section-eyebrow">Resultados</span>
          <h2 className="section-title">Antes y después</h2>
          <div className="before-after-grid">
            {CAR2_STEPS.map((step) => (
              <div key={step.img} className="before-after-card">
                <div className="before-after-img-wrap">
                  <img
                    src={`/img/${step.img}`}
                    alt={step.label}
                    className="before-after-img"
                    loading="lazy"
                  />
                </div>
                <span className="before-after-label">{step.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-services">
        <div className="container">
          <span className="section-eyebrow">Servicios</span>
          <h2 className="section-title">Qué hacemos en el taller</h2>
          <div className="services-grid">
            <article className="service-card">
              <span className="service-num">01</span>
              <h3>Enderezado de carrocería</h3>
              <p>Recuperamos chasis y líneas del vehículo. Enderezado y soldadura para dejar la estructura como antes del golpe.</p>
            </article>
            <article className="service-card">
              <span className="service-num">02</span>
              <h3>Pintura automotriz</h3>
              <p>Preparación, pintado y barniz. Color parejo y acabado de taller que mantiene el valor de tu auto.</p>
            </article>
            <article className="service-card">
              <span className="service-num">03</span>
              <h3>Pulido y entrega</h3>
              <p>Pulido final y revisión para que el carro salga impecable y listo para entregar.</p>
            </article>
          </div>
        </div>
      </section>

      <footer className="contact">
        <div className="container">
          <span className="section-eyebrow">Contacto</span>
          <h2 className="contact-title">Cotiza tu reparación</h2>
          <p className="contact-desc">
            Escribe o llama para cotizar enderezado y pintura. Deja aquí tu número, correo o redes.
          </p>
          <div className="contact-methods">
            <a href="tel:+521234567890" className="contact-link">📞 +52 1 234 567 8900</a>
            <a href="mailto:contacto@ejemplo.com" className="contact-link">✉️ contacto@ejemplo.com</a>
            <a href="#" className="contact-link" rel="noopener noreferrer" target="_blank">Instagram</a>
            <a href="#" className="contact-link" rel="noopener noreferrer" target="_blank">Facebook</a>
          </div>
          <p className="contact-note">Sustituye estos datos por el número, correo y redes de tu amigo.</p>
        </div>
      </footer>
    </div>
  )
}
