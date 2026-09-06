import React from 'react';

interface CapabilityItem {
  number: string;
  name: string;
  summary: string;
}

const capabilities: CapabilityItem[] = [
  {
    number: '01',
    name: 'Integraciones y APIs',
    summary: 'Conectamos sistemas existentes para evitar duplicación y movimiento manual de información: ERP ↔ marketplaces, Odoo ↔ sistemas internos, Mercado Libre ↔ catálogo, e-commerce y bases de datos.'
  },
  {
    number: '02',
    name: 'Automatización de procesos',
    summary: 'Reducimos tareas repetitivas y procesos manuales: digitación duplicada, consolidación de datos, actualización de estados de pedidos, generación de documentos y sincronizaciones automáticas.'
  },
  {
    number: '03',
    name: 'Adaptación de ERP',
    summary: 'Extendemos herramientas existentes cuando el ERP resuelve gran parte de la operación pero necesita adaptarse a flujos y reglas específicas de tu negocio (Odoo, ERP internos y sistemas actuales).'
  },
  {
    number: '04',
    name: 'Software interno a medida',
    summary: 'Desarrollamos herramientas pequeñas y medianas orientadas a procesos concretos: paneles internos, administración de compatibilidades, gestión de catálogo, dashboards operacionales y sistemas auxiliares.'
  },
  {
    number: '05',
    name: 'Consultoría tecnológica',
    summary: 'Analizamos procesos y ayudamos a decidir qué conviene mantener, integrar, automatizar, adaptar o construir. Primero entendemos el problema. Después elegimos la tecnología.'
  }
];

export const Capabilities: React.FC = () => {
  return (
    <section className="capabilities-section section-padding" aria-label="Capacidades de MODOLAR">
      <div className="container">
        <div style={{ maxWidth: '720px' }}>
          <span className="eyebrow">Alcance de servicios</span>
          <h2 className="h2-section">Capacidades</h2>
          <p className="lead-text" style={{ marginTop: '0.75rem' }}>
            Cinco áreas de intervención técnica para resolver fricciones operativas concretas sin sobrediseñar soluciones.
          </p>
        </div>

        <div className="capabilities-grid">
          {capabilities.map((cap) => (
            <div key={cap.number} className="capability-row">
              <span className="capability-num">{cap.number}</span>
              <div>
                <h3 className="capability-name">{cap.name}</h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--color-steel)', marginTop: '0.35rem', lineHeight: 1.65 }}>
                  {cap.summary}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
