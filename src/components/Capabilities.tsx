import React from 'react';

interface CapabilityItem {
  number: string;
  name: string;
  summary: string;
}

const capabilities: CapabilityItem[] = [
  { number: '01', name: 'Software a medida', summary: 'Desarrollo de herramientas concebidas exclusivamente para la lógica única de tu operación física o digital.' },
  { number: '02', name: 'Adaptación y extensión de ERP', summary: 'Personalización profunda de módulos, vistas y reglas de negocio en sistemas como Odoo o ERPs propios.' },
  { number: '03', name: 'Integraciones y APIs', summary: 'Conexión bidireccional, segura y automatizada entre plataformas comerciales, inventario y facturación.' },
  { number: '04', name: 'Automatización operacional', summary: 'Eliminación sistemática de digitaciones manuales, cruces de planillas y validaciones duplicadas.' },
  { number: '05', name: 'Consultoría tecnológica', summary: 'Diagnóstico en terreno del flujo de información, identificación de cuellos de botella y diseño de arquitectura.' },
  { number: '06', name: 'Herramientas internas', summary: 'Paneles de preparación de pedidos, validación por código de barra y monitores de despacho para bodega.' },
  { number: '07', name: 'Dashboards y control operacional', summary: 'Visibilidad de métricas operacionales reales: estado de pedidos en cola, inventario crítico y tiempos de ciclo.' },
  { number: '08', name: 'Integración con marketplaces', summary: 'Sincronización automatizada de catálogos masivos, precios, stock disponible y despachos con Mercado Libre y otros canales.' }
];

export const Capabilities: React.FC = () => {
  return (
    <section className="capabilities-section section-padding" aria-label="Capacidades técnicas de MODOLAR">
      <div className="container">
        <div style={{ maxWidth: '720px' }}>
          <span className="eyebrow">Alcance técnico</span>
          <h2 className="h2-section">Capacidades</h2>
          <p className="lead-text" style={{ marginTop: '0.75rem' }}>
            Ingeniería práctica enfocada en destrabar la operación y dotar al equipo de visibilidad y control.
          </p>
        </div>

        <div className="capabilities-grid">
          {capabilities.map((cap) => (
            <div key={cap.number} className="capability-row">
              <span className="capability-num">{cap.number}</span>
              <div>
                <h3 className="capability-name">{cap.name}</h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--color-steel)', marginTop: '0.35rem', lineHeight: 1.6 }}>
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
