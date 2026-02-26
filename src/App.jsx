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
          <p className="hero-eyebrow">Pintado y enderezado</p>
          <h1 className="hero-title">
            Restauración que <em>se nota</em>
          </h1>
          <p className="hero-desc">
            Trabajo serio en autos chocados. Desde el enderezado hasta el pintado final,
            con acabados que devuelven el aspecto original a tu vehículo.
          </p>
        </div>
      </header>

      <section className="section section-process">
        <div className="container">
          <span className="section-eyebrow">Proceso completo</span>
          <h2 className="section-title">De daño a obra terminada</h2>
          <p className="section-desc">
            Seguimiento paso a paso de una restauración: desde la llegada del vehículo
            hasta la entrega con pintura en rojo y detalles listos.
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
          <span className="section-eyebrow">Otro resultado</span>
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
          <h2 className="section-title">Qué hacemos</h2>
          <div className="services-grid">
            <article className="service-card">
              <div className="service-icon">◆</div>
              <h3>Enderezado</h3>
              <p>Recuperamos la estructura y las líneas del vehículo para que quede como antes del golpe.</p>
            </article>
            <article className="service-card">
              <div className="service-icon">◆</div>
              <h3>Pintado</h3>
              <p>Pintura de calidad, con color parejo y acabado profesional que cuida el valor de tu auto.</p>
            </article>
            <article className="service-card">
              <div className="service-icon">◆</div>
              <h3>Detalle final</h3>
              <p>Pulido y revisión para que el resultado se vea impecable al entregar.</p>
            </article>
          </div>
        </div>
      </section>

      <footer className="contact">
        <div className="container">
          <span className="section-eyebrow">Contacto</span>
          <h2 className="contact-title">¿Tu auto necesita un arreglo?</h2>
          <p className="contact-desc">
            Escribe o llama para cotizar. Aquí puedes dejar tu número, correo y redes para que te contacten.
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
