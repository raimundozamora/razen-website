const divisions = [
  {
    id: "01",
    name: "RAZEN CORP",
    copy: "Producción técnica para eventos",
    href: "#corp",
  },
  {
    id: "02",
    name: "RAZEN STAGE",
    copy: "Audio, iluminación y touring",
    href: "#stage",
  },
  {
    id: "03",
    name: "RAZEN RENTAL",
    copy: "Rental B2B de equipamiento",
    href: "#rental",
  },
];

const Arrow = () => <span aria-hidden="true" className="arrow">→</span>;

export default function Home() {
  return (
    <main>
      <section className="hero" id="inicio">
        <div className="hero-image" aria-hidden="true" />
        <header className="header shell">
          <a href="#inicio" className="brand" aria-label="Razen, inicio">
            <img src="/razen-logo.svg" alt="RAZEN" />
          </a>
          <nav aria-label="Navegación principal">
            <a href="#corp">Corp</a>
            <a href="#stage">Stage</a>
            <a href="#rental">Rental</a>
            <a href="#proyectos">Proyectos</a>
            <a href="#contacto">Contacto</a>
          </nav>
        </header>

        <div className="hero-content shell">
          <p className="eyebrow">Audiovisual technology · Chile</p>
          <h1>Technology behind<br />every performance.</h1>
          <p className="hero-copy">
            Producción técnica, touring y rental audiovisual profesional.
          </p>
          <a className="outline-button" href="#divisiones">
            Explorar Razen <Arrow />
          </a>
        </div>

        <div className="division-rail shell" id="divisiones">
          {divisions.map((division) => (
            <a className="division-card" href={division.href} key={division.id}>
              <span className="division-index">{division.id}</span>
              <span>
                <strong>{division.name}</strong>
                <small>{division.copy}</small>
              </span>
              <Arrow />
            </a>
          ))}
        </div>
      </section>

      <section className="intro shell">
        <p className="section-label">RAZEN</p>
        <div>
          <h2>Equipamiento, conocimiento y precisión técnica.</h2>
          <p>
            Somos una compañía de tecnología audiovisual. Entregamos soluciones
            especializadas para marcas, artistas y empresas de producción, con
            equipos preparados para responder donde cada detalle importa.
          </p>
        </div>
      </section>

      <section className="service service-corp" id="corp">
        <div className="service-image" aria-hidden="true" />
        <div className="service-content">
          <span className="number">01</span>
          <p className="section-label">RAZEN CORP</p>
          <h2>Precisión técnica para eventos que representan grandes marcas.</h2>
          <p>
            Diseñamos, implementamos y operamos la producción técnica completa
            para lanzamientos, congresos y eventos corporativos.
          </p>
          <ul>
            <li>Visita técnica y levantamiento</li>
            <li>Diseño, renders y planificación</li>
            <li>Audio, iluminación, video y pantallas LED</li>
            <li>Montaje, operación y desmontaje</li>
          </ul>
          <a href="#contacto">Conversemos sobre tu evento <Arrow /></a>
        </div>
      </section>

      <section className="service service-stage" id="stage">
        <div className="service-content">
          <span className="number">02</span>
          <p className="section-label">RAZEN STAGE</p>
          <h2>Built to perform.<br />Ready to tour.</h2>
          <p>
            Audio, iluminación y sistemas técnicos preparados para artistas,
            bandas, conciertos y giras dentro y fuera de Chile.
          </p>
          <ul>
            <li>Consolas, monitoreo e inalámbricos</li>
            <li>Iluminación, control y programación</li>
            <li>Racks, cases y sistemas personalizados</li>
            <li>Touring, videoclips y live sessions</li>
          </ul>
          <a href="#contacto">Prepara tu próximo show <Arrow /></a>
        </div>
        <div className="service-image" aria-hidden="true" />
      </section>

      <section className="service service-rental" id="rental">
        <div className="service-image" aria-hidden="true" />
        <div className="service-content">
          <span className="number">03</span>
          <p className="section-label">RAZEN RENTAL</p>
          <h2>Un partner de rental. Nunca un competidor.</h2>
          <p>
            Cross-rental B2B para productoras y profesionales audiovisuales.
            Equipos revisados, preparados y listos para integrarse a tu producción.
          </p>
          <ul>
            <li>Audio e iluminación profesional</li>
            <li>Video, LED y procesamiento</li>
            <li>Intercom, señal y distribución</li>
            <li>Preparación, despacho y soporte técnico</li>
          </ul>
          <a href="#contacto">Solicitar equipamiento <Arrow /></a>
        </div>
      </section>

      <section className="projects shell" id="proyectos">
        <div className="projects-heading">
          <p className="section-label">SELECTED WORK</p>
          <h2>La técnica detrás<br />del resultado.</h2>
        </div>
        <div className="project-grid">
          <article className="project-card project-one"><span>Corporate</span><h3>Lanzamientos y congresos</h3></article>
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
