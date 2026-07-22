type DivisionPageProps = {
  number: string;
  name: string;
  eyebrow: string;
  headline: string;
  intro: string;
  image: string;
  services: string[];
  process: { number: string; title: string; copy: string }[];
  cta: string;
};

const Arrow = () => <span aria-hidden="true" className="arrow">→</span>;

export default function DivisionPage(props: DivisionPageProps) {
  return (
    <main className="division-page">
      <section className="division-hero">
        <img src={props.image} alt="" aria-hidden="true" />
        <span className="division-hero-shade" />
        <header className="header shell">
          <a href="/" className="brand" aria-label="Razen, inicio">
            <img src="/razen-logo.svg" alt="RAZEN" />
          </a>
          <nav aria-label="Navegación principal">
            <a href="/corp">Corporate &amp; Brands</a>
            <a href="/stage">Stage</a>
            <a href="/rental">Rental</a>
            <a href="/#proyectos">Proyectos</a>
            <a href="#contacto">Contacto</a>
          </nav>
        </header>
        <div className="division-hero-copy shell">
          <span>{props.number} / {props.eyebrow}</span>
          <h1>{props.name}</h1>
          <p>{props.headline}</p>
        </div>
      </section>

      <section className="division-intro shell">
        <p className="section-label">QUÉ HACEMOS</p>
        <div>
          <h2>{props.headline}</h2>
          <p>{props.intro}</p>
        </div>
      </section>

      <section className="division-services shell">
        <p className="section-label">CAPACIDADES</p>
        <div className="division-service-list">
          {props.services.map((service, index) => (
            <div key={service}><span>0{index + 1}</span><h3>{service}</h3></div>
          ))}
        </div>
      </section>

      <section className="division-process">
        <div className="shell">
          <p className="section-label">NUESTRO PROCESO</p>
          <div className="process-grid">
            {props.process.map((step) => (
              <article key={step.number}>
                <span>{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <footer id="contacto">
        <div className="footer-cta shell">
          <p className="section-label">HABLEMOS</p>
          <h2>{props.cta}</h2>
          <a className="outline-button" href="mailto:contacto@razen.cl">
            contacto@razen.cl <Arrow />
          </a>
        </div>
        <div className="footer-bottom shell">
          <img src="/razen-logo.svg" alt="RAZEN" />
          <p>Santiago, Chile</p>
          <a href="/">Volver al inicio</a>
        </div>
      </footer>
    </main>
  );
}
