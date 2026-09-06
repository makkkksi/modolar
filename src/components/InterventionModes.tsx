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
                Extendemos ERP y herramientas existentes para resolver necesidades específicas sin reemplazar innecesariamente sistemas que ya funcionan.
              </p>
            </div>

            <div className="intervention-pills">
              <span className="tech-pill">Odoo</span>
              <span className="tech-pill">ERP internos</span>
              <span className="tech-pill">Flujos a medida</span>
              <span className="tech-pill">Reglas de negocio</span>
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
                Tus sistemas funcionan.<br />
                Pero trabajan separados.
              </h3>
              <p className="intervention-body">
                Integramos ERP, marketplaces, APIs y herramientas internas para evitar duplicaciones y permitir que la información fluya automáticamente.
              </p>
            </div>

            <div className="intervention-pills">
              <span className="tech-pill">Mercado Libre</span>
              <span className="tech-pill">Odoo</span>
              <span className="tech-pill">Marketplaces</span>
              <span className="tech-pill">APIs REST</span>
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
                Hay procesos que necesitan<br />
                una herramienta propia.
              </h3>
              <p className="intervention-body">
                Desarrollamos herramientas internas cuando un proceso específico necesita una solución que las plataformas actuales no cubren correctamente.
              </p>
            </div>

            <div className="intervention-pills">
              <span className="tech-pill">Herramientas internas</span>
              <span className="tech-pill">Paneles de catálogo</span>
              <span className="tech-pill">Gestión de pedidos</span>
              <span className="tech-pill">Sistemas auxiliares</span>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};
