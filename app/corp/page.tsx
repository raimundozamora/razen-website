import DivisionPage from "../components/DivisionPage";

export default function CorpPage() {
  return <DivisionPage
    number="01"
    name="RAZEN CORP"
    eyebrow="Technical production"
    headline="Precisión técnica para eventos que representan grandes marcas."
    intro="Planificamos y ejecutamos la producción técnica completa de lanzamientos, congresos y encuentros corporativos. Un solo equipo coordina cada etapa, desde el levantamiento inicial hasta el desmontaje."
    image="/business-corp.webp"
    services={["Visita técnica y levantamiento", "Diseño, renders y planificación", "Audio, iluminación, video y LED", "Montaje, operación y desmontaje"]}
    process={[
      { number:"01", title:"Entender", copy:"Levantamos el espacio, los objetivos y las necesidades técnicas del evento." },
      { number:"02", title:"Diseñar", copy:"Traducimos la idea en planos, renders, equipos y una planificación precisa." },
      { number:"03", title:"Producir", copy:"Montamos y operamos cada sistema con un equipo técnico especializado." },
      { number:"04", title:"Entregar", copy:"Coordinamos desmontaje y cierre con el mismo estándar de principio a fin." },
    ]}
    cta="Hagamos que tu próximo evento funcione impecablemente."
  />;
}
