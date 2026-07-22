import BrandMarquee from "./components/BrandMarquee";

const Arrow = () => <span aria-hidden="true" className="arrow">→</span>;

export default function Home() {
  return (
    <main>
      <section className="hero" id="inicio">
        <video
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/hero-razen.png"
          aria-hidden="true"
        >
          <source src="/razen-hero-ai-v1.mp4" type="video/mp4" />
        </video>

        <header className="header shell">
          <a href="#inicio" className="brand" aria-label="Razen, inicio">
            <img src="/razen-logo.svg" alt="RAZEN" />
          </a>
          <nav aria-label="Navegación principal">
            <a href="/corp">Corporate &amp; Brands</a>
            <a href="/stage">Stage</a>
            <a href="/rental">Rental</a>
            <a href="#proyectos">Proyectos</a>
            <a href="#contacto">Contacto</a>
          </nav>
        </header>

        <div className="hero-content shell">
          <h1>Technology behind<br />every performance.</h1>
          <p className="hero-copy">
            Producción técnica, touring y rental audiovisual profesional.
          </p>
        </div>
      </section>

      <section className="businesses" id="divisiones">
        <div className="businesses-intro shell">
          <p className="section-label">NUESTRAS ÁREAS</p>
          <h2>Tres negocios.<br />Un mismo estándar.</h2>
          <p>
            Soluciones especializadas para marcas, artistas y profesionales de
            la industria audiovisual.
          </p>
        </div>

        <div className="client-strip">
          <BrandMarquee />
        </div>

        <div className="business-grid">
          <a className="business-card business-corp" href="/corp" id="corp">
            <img src="/business-corp.webp" alt="Producción técnica de un evento corporativo" />
            <span className="business-shade" />
            <span className="business-top"><small>01</small><small>Producción integral</small></span>
            <span className="business-copy">
              <strong>CORPORATE &amp; BRANDS</strong>
              <small>Eventos de marca, lanzamientos y congresos.</small>
              <span>Descubrir <Arrow /></span>
            </span>
          </a>

          <a className="business-card business-stage" href="/stage" id="stage">
            <img src="/business-stage.webp" alt="Operación de audio e iluminación para escenario" />
            <span className="business-shade" />
            <span className="business-top"><small>02</small><small>Artists &amp; touring</small></span>
            <span className="business-copy">
              <strong>STAGE</strong>
              <small>Audio, iluminación y sistemas listos para girar.</small>
              <span>Descubrir <Arrow /></span>
            </span>
          </a>

          <a className="business-card business-rental" href="/rental" id="rental">
            <img src="/business-rental.webp" alt="Bodega de rental audiovisual profesional" />
            <span className="business-shade" />
            <span className="business-top"><small>03</small><small>Cross-rental B2B</small></span>
            <span className="business-copy">
              <strong>RENTAL</strong>
              <small>Equipamiento preparado para la industria.</small>
              <span>Descubrir <Arrow /></span>
            </span>
          </a>
        </div>
      </section>

      <section className="projects shell" id="proyectos">
        <div className="projects-heading">
          <p className="section-label">SELECTED WORK</p>
          <h2>La técnica detrás<br />del resultado.</h2>
        </div>
        <div className="project-grid">
          <article className="project-card project-one"><span>Corporate &amp; Brands</span><h3>Lanzamientos y congresos</h3></article>
          <article className="project-card project-two"><span>Stage</span><h3>Shows, artistas y touring</h3></article>
          <article className="project-card project-three"><span>Rental</span><h3>Equipamiento para la industria</h3></article>
        </div>
      </section>

      <footer id="contacto">
        <div className="footer-cta shell">
          <p className="section-label">HABLEMOS</p>
          <h2>¿Qué necesitas<br />hacer realidad?</h2>
          <a className="outline-button" href="mailto:contacto@razen.cl">
            contacto@razen.cl <Arrow />
          </a>
        </div>
        <div className="footer-bottom shell">
          <img src="/razen-logo.svg" alt="RAZEN" />
          <p>Santiago, Chile</p>
          <p>© {new Date().getFullYear()} Razen</p>
        </div>
      </footer>
    </main>
  );
}
