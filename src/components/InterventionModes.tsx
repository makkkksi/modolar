import React from 'react';
import { Layers, Network, Wrench } from 'lucide-react';

export const InterventionModes: React.FC = () => {
  return (
    <section className="intervention-section section-padding" aria-label="Tres modos de intervención de MODOLAR">
      <div className="container">
        <div style={{ maxWidth: '780px' }}>
          <span className="eyebrow">Principio de intervención</span>
          <h2 className="h2-section" style={{ marginBottom: '1.25rem' }}>
            La solución depende del problema.
          </h2>
          <p className="lead-text">
            Cada operación posee procesos, sistemas y restricciones distintas. Por eso MODOLAR no comienza desde un producto predeterminado. Comienza entendiendo la operación.
          </p>
        </div>

        <div className="intervention-grid">
          {/* 01 - Adaptar */}
          <article className="intervention-block">
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                <span className="intervention-tag">01 — ADAPTAR</span>
                <Layers size={20} color="var(--color-navy)" />
              </div>
              <h3 className="intervention-h3">
                Tu sistema funciona.<br />
                Pero no cubre todo tu proceso.
              </h3>
              <p className="intervention-body">
                Extendemos y adaptamos ERP existentes para incorporar flujos y reglas de negocio específicas, evitando reemplazar innecesariamente herramientas que ya son familiares para tu equipo.
              </p>
            </div>

            <div className="intervention-pills">
              <span className="tech-pill">Odoo</span>
              <span className="tech-pill">ERP internos</span>
              <span className="tech-pill">Sistemas legacy</span>
              <span className="tech-pill">Flujos a medida</span>
            </div>
          </article>

          {/* 02 - Conectar */}
          <article className="intervention-block">
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                <span className="intervention-tag">02 — CONECTAR</span>
                <Network size={20} color="var(--color-navy)" />
              </div>
              <h3 className="intervention-h3">
                Tus plataformas funcionan.<br />
                Pero trabajan separadas.
              </h3>
              <p className="intervention-body">
                Integramos ERP, marketplaces, e-commerce, APIs y herramientas internas para que la información de inventario, ventas y despacho fluya de manera automática y sin inconsistencias.
              </p>
            </div>

            <div className="intervention-pills">
              <span className="tech-pill">Mercado Libre</span>
              <span className="tech-pill">Odoo</span>
              <span className="tech-pill">Marketplaces</span>
              <span className="tech-pill">APIs REST / Webhooks</span>
            </div>
          </article>

          {/* 03 - Construir */}
          <article className="intervention-block">
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                <span className="intervention-tag">03 — CONSTRUIR</span>
                <Wrench size={20} color="var(--color-navy)" />
              </div>
              <h3 className="intervention-h3">
                La herramienta que necesitas<br />
                todavía no existe.
              </h3>
              <p className="intervention-body">
                Diseñamos y desarrollamos software a medida cuando un proceso operacional crítico posee singularidades que ningún software comercial resuelve con la precisión necesaria.
              </p>
            </div>

            <div className="intervention-pills">
              <span className="tech-pill">Aplicaciones operacionales</span>
              <span className="tech-pill">Monitores de bodega</span>
              <span className="tech-pill">Herramientas internas</span>
              <span className="tech-pill">Arquitecturas seguras</span>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};
