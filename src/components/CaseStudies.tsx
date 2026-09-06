import React from 'react';
import { ExternalLink, ShoppingBag, Wrench } from 'lucide-react';

export const CaseStudies: React.FC = () => {
  return (
    <section className="cases-section section-padding" id="proyectos" aria-label="Proyectos de experiencia real">
      {/* Anchor alias for backwards-compatibility */}
      <span id="casos" style={{ display: 'none' }} aria-hidden="true" />
      <div className="container">
        <div style={{ maxWidth: '720px' }}>
          <h2 className="h2-section">
            Experiencia en operaciones reales.
          </h2>
          <p className="lead-text" style={{ marginTop: '0.75rem' }}>
            Desarrollo e integraciones aplicadas directamente en empresas que gestionan inventario físico, catálogos extensos y plataformas en producción.
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

              <div className="case-breakdown">
                <div className="case-step">
                  <span className="case-step-label">Contexto</span>
                  <p className="case-step-text">
                    Comercialización y distribución de vestuario técnico, uniformes institucionales y equipamiento especializado, con operación comercial apoyada en plataforma Odoo.
                  </p>
                </div>

                <div className="case-step">
                  <span className="case-step-label">Intervención</span>
                  <p className="case-step-text">
                    Adaptación de flujos de trabajo sobre Odoo e integración con la plataforma e-commerce para ordenar la gestión de pedidos, catálogo técnico y control de inventario.
                  </p>
                </div>

                <div className="case-step">
                  <span className="case-step-label">Sistemas involucrados</span>
                  <div className="case-tech-tags">
                    <span className="tech-pill">Odoo ERP</span>
                    <span className="tech-pill">E-commerce</span>
                    <span className="tech-pill">Catálogo técnico</span>
                  </div>
                </div>
              </div>
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

              <div className="case-breakdown">
                <div className="case-step">
                  <span className="case-step-label">Contexto</span>
                  <p className="case-step-text">
                    Distribución de repuestos automotrices con alta densidad de códigos en catálogo y venta activa a través de tiendas oficiales en Mercado Libre.
                  </p>
                </div>

                <div className="case-step">
                  <span className="case-step-label">Intervención</span>
                  <p className="case-step-text">
                    Desarrollo de herramientas internas para agilizar la gestión de catálogo, administración de información técnica y procesos específicos alrededor de Mercado Libre.
                  </p>
                </div>

                <div className="case-step">
                  <span className="case-step-label">Sistemas involucrados</span>
                  <div className="case-tech-tags">
                    <span className="tech-pill">Mercado Libre</span>
                    <span className="tech-pill">APIs REST</span>
                    <span className="tech-pill">Sistema interno</span>
                  </div>
                </div>
              </div>
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
