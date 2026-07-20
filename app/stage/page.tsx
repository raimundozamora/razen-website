import DivisionPage from "../components/DivisionPage";

export default function StagePage() {
  return <DivisionPage
    number="02"
    name="RAZEN STAGE"
    eyebrow="Artists & touring"
    headline="Built to perform. Ready to tour."
    intro="Preparamos sistemas de audio e iluminación para bandas y artistas que necesitan consistencia dentro y fuera de Chile. Soluciones pensadas para viajar, instalarse rápido y responder show tras show."
    image="/business-stage.webp"
    services={["Consolas, monitoreo e inalámbricos", "Iluminación, control y programación", "Racks, cases y sistemas personalizados", "Touring, videoclips y live sessions"]}
    process={[
      { number:"01", title:"Diseñar", copy:"Definimos el sistema desde el rider, la puesta en escena y la realidad de la gira." },
      { number:"02", title:"Preparar", copy:"Armamos, configuramos y probamos cada rack, consola, case y luminaria." },
      { number:"03", title:"Ensayar", copy:"Validamos flujos y programación para que el sistema llegue listo al escenario." },
      { number:"04", title:"Girar", copy:"Entregamos una solución robusta para operar dentro y fuera del país." },
    ]}
    cta="Preparemos un sistema a la altura de tu próximo show."
  />;
}
