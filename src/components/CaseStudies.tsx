import React from 'react';
import { ExternalLink, ShoppingBag, Wrench } from 'lucide-react';

export const CaseStudies: React.FC = () => {
  return (
    <section className="cases-section section-padding" id="casos" aria-label="Casos de experiencia real">
      <div className="container">
        <div style={{ maxWidth: '720px' }}>
          <span className="eyebrow eyebrow-teal">Operaciones conocidas</span>
          <h2 className="h2-section">
            Experiencia aplicada a operaciones reales.
          </h2>
          <p className="lead-text" style={{ marginTop: '0.75rem' }}>
            Trabajamos con empresas que gestionan inventario físico, pedidos constantes y sincronización de información entre canales digitales y bodegas.
          </p>
        </div>

        <div className="cases-grid">
          {/* Tienda Bomberos */}
          <article className="case-card">
            <div>
              <div className="case-domain">
                <ShoppingBag size={15} />
                <span>tiendabomberos.cl</span>
              </div>
              <h3 className="case-title">Tienda Bomberos</h3>
              <p className="case-desc">
                Desarrollo y comercialización de vestuario técnico, uniformes institucionales y equipamiento para compañías de bomberos y brigadas industriales en todo Chile. Operación basada en la integración de e-commerce, catálogo especializado y gestión sobre la plataforma Odoo.
              </p>
            </div>

            <div className="case-footer">
              <span style={{ fontSize: '0.8125rem', color: 'var(--color-steel)', fontWeight: 600 }}>
                E-commerce · Catálogo técnico · Odoo
              </span>
              <a
                href="https://tiendabomberos.cl"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary-dark"
                style={{ padding: '0.4rem 0.85rem', fontSize: '0.8125rem' }}
                aria-label="Visitar sitio de Tienda Bomberos (abre en nueva pestaña)"
              >
                <span>Visitar sitio</span>
                <ExternalLink size={13} />
              </a>
            </div>
          </article>

          {/* Top Repuestos */}
          <article className="case-card">
            <div>
              <div className="case-domain">
                <Wrench size={15} />
                <span>top-repuestos.cl</span>
              </div>
              <h3 className="case-title">Top Repuestos</h3>
              <p className="case-desc">
                Distribución y comercialización de repuestos automotrices multimarca, con gestión de catálogo de alta densidad de partes, sincronización con tiendas oficiales en Mercado Libre y control de stock para despacho inmediato.
              </p>
            </div>

            <div className="case-footer">
              <span style={{ fontSize: '0.8125rem', color: 'var(--color-steel)', fontWeight: 600 }}>
                Distribución · Catálogo masivo · Mercado Libre
              </span>
              <a
                href="https://www.top-repuestos.cl"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary-dark"
                style={{ padding: '0.4rem 0.85rem', fontSize: '0.8125rem' }}
                aria-label="Visitar sitio de Top Repuestos (abre en nueva pestaña)"
              >
                <span>Visitar sitio</span>
                <ExternalLink size={13} />
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};
