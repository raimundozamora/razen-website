import DivisionPage from "../components/DivisionPage";

export default function RentalPage() {
  return <DivisionPage
    number="03"
    name="RAZEN RENTAL"
    eyebrow="Cross-rental B2B"
    headline="Un partner de rental. Nunca un competidor."
    intro="Equipamiento audiovisual profesional para productoras, proveedores y técnicos. Nosotros revisamos, preparamos y despachamos; tu equipo se encarga del montaje y la operación."
    image="/business-rental.webp"
    services={["Audio e iluminación profesional", "Video, LED y procesamiento", "Intercom, señal y distribución", "Preparación, despacho y soporte"]}
    process={[
      { number:"01", title:"Solicitar", copy:"Revisamos tu listado y confirmamos disponibilidad y compatibilidad técnica." },
      { number:"02", title:"Preparar", copy:"Chequeamos, configuramos y embalamos cada equipo antes del despacho." },
      { number:"03", title:"Despachar", copy:"Entregamos el pedido identificado y listo para integrarse a tu producción." },
      { number:"04", title:"Recibir", copy:"Controlamos el retorno y dejamos el equipamiento preparado nuevamente." },
    ]}
    cta="Cuéntanos qué equipamiento necesita tu producción."
  />;
}
