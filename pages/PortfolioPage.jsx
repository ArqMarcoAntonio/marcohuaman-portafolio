import React from "react";

export default function PortfolioPage() {
  return (
    <div className="container mx-auto p-4">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold">PORTAFOLIO PROFESIONAL</h1>
        <p className="text-lg mt-2">Marco Huamán</p>
        <p>Arquitecto | Consultor en Contratos de Ejecución de Obras Públicas | Adjudicador – JPRD</p>
      </header>

      <section className="perfil-profesional mb-8">
        <h2 className="text-2xl font-semibold mb-4">PERFIL PROFESIONAL</h2>
        <p>Arquitecto con 23 años de experiencia en el sector construcción, especializado en la gestión y administración de contratos de obras públicas, en proyectos de infraestructura vial, edificaciones complejas y urbanismo. He liderado proyectos emblemáticos a nivel nacional como Administrador de Contrato, Jefe de Oficina Técnica y Especialista en Costos y Valorizaciones, trabajando con constructoras y consultoras de primer nivel.</p>
        <p>Complemento mi experiencia técnica con formación en derecho de la construcción y resolución de controversias, lo que me permite brindar servicios de consultoría contractual, así como actuar como Adjudicador inscrito en la nómina oficial del Colegio de Ingenieros del Perú, participando en Juntas de Resolución de Disputas (JRD).</p>
        <p>Además, como arquitecto, he diseñado proyectos residenciales, parques recreacionales y hoteles, y mi trabajo en edificaciones públicas me ha permitido profundizar en nuevas técnicas constructivas y materiales innovadores que enriquecen mi enfoque proyectual.</p>
      </section>

      <section className="experiencia-adjudicador mb-8">
        <h2 className="text-2xl font-semibold mb-4">EXPERIENCIA COMO ADJUDICADOR – JPRD</h2>
        <ul className="list-disc pl-5">
          <li>Vía Costa Verde – Tramo Callao</li>
          <li>Contrato N.º 087-2024-MTC/21 – Departamento de San Martín (Contrato de ejecución de obra anulado antes del inicio del servicio)</li>
        </ul>
      </section>

      <section className="proyectos-administrador mb-8">
        <h2 className="text-2xl font-semibold mb-4">PROYECTOS DESTACADOS COMO ADMINISTRADOR DE CONTRATOS</h2>
        <ul className="list-disc pl-5">
          <li>Recuperación del Camino Vecinal MO-590: Samegua – Emp. MO-602 (Moquegua)</li>
          <li>Vía Expresa Cusco: Ovalo Libertadores – Nodo Versalles</li>
          <li>Hospitales nivel II.1 (2024–2025)</li>
          <li>Remodelación y Ampliación de la Villa Deportiva Nacional (VIDENA), Juegos Panamericanos Lima 2019</li>
          <li>Mejoramiento de la Carretera Moquegua–Omate–Arequipa</li>
          <li>Rehabilitación y Mejoramiento de la Carretera Quinua–San Francisco (Tramo II)</li>
          <li>Servicio de Descolmatación del Cauce del Río Piura</li>
        </ul>
      </section>

      <section className="proyectos-oficina-tecnica mb-8">
        <h2 className="text-2xl font-semibold mb-4">EXPERIENCIA COMO JEFE DE OFICINA TÉCNICA</h2>
        <ul className="list-disc pl-5">
          <li>Rehabilitación y Mejoramiento de la Carretera Quinua–San Francisco (Tramo I)</li>
          <li>Intercambio Vial de la Panamericana Norte – Av. Tomas Valle – Av. Angélica Gamarra</li>
          <li>Rehabilitación de la Carretera Aguaytía – San Alejandro</li>
          <li>Rehabilitación de la Carretera Cusco – Combapata</li>
          <li>Rehabilitación de la Carretera La Merced – Shankivironi</li>
        </ul>
      </section>

      <section className="proyectos-consultoria mb-8">
        <h2 className="text-2xl font-semibold mb-4">EXPERIENCIA EN CONSULTORÍA DE OBRAS</h2>
        <ul className="list-disc pl-5">
          <li>Supervisión de obras de infraestructura vial en metrados, costos, valorizaciones e informes.</li>
        </ul>
      </section>

      <section className="proyectos-arquitectura mb-8">
        <h2 className="text-2xl font-semibold mb-4">EXPERIENCIA EN DISEÑO ARQUITECTÓNICO</h2>
        <ul className="list-disc pl-5">
          <li>Diseño y ejecución de viviendas particulares</li>
          <li>Diseño de hoteles</li>
          <li>Diseño y ejecución de parques recreacionales (18,000 m² ejecutados en Moquegua, entre otros)</li>
        </ul>
      </section>

      <section className="servicios mb-8">
        <h2 className="text-2xl font-semibold mb-4">SERVICIOS</h2>
        <ul className="list-disc pl-5">
          <li>Consultoría en contratos de ejecución de obras públicas</li>
          <li>Adjudicador inscrito en el CARD CIP (JPRD)</li>
          <li>Diseño arquitectónico de viviendas, parques recreacionales, hoteles, entre otros</li>
          <li>Elaboración de expedientes técnicos de obras de arquitectura e ingeniería</li>
        </ul>
      </section>

      <footer className="text-center mt-8">
        <p>Contacto: marcoantonio35800@hotmail.com | +51 998 607 773</p>
      </footer>
    </div>
  );
}
