import React from 'react';
import { ArrowRight, ArrowDown } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="hero-section" aria-label="Introducción a MODOLAR">
      {/* Human-scale Operational Logistics Photography */}
      <img
        src="/assets/hero_operation_human.jpg"
        alt="Operador en centro de distribución y almacenamiento utilizando scanner de inventario en terreno"
        className="hero-bg-media"
        loading="eager"
        fetchPriority="high"
      />

      {/* Controlled Navy Gradient Overlay */}
      <div className="hero-overlay" aria-hidden="true" />
      
      {/* Soft gradient bottom fade into pure white */}
      <div className="hero-bottom-fade" aria-hidden="true" />

      <div className="container hero-content">
        {/* Sobrio Tech Consulting Label */}
        <div className="hero-badge">
          <span className="hero-badge-dot" />
          <span className="hero-badge-text">INTEGRACIONES · AUTOMATIZACIÓN · SOFTWARE INTERNO</span>
        </div>

        {/* Primary H1 */}
        <h1 className="h1-hero hero-title">
          Tecnología que se adapta<br />
          a tu operación.
        </h1>

        {/* V2 Strategic Subheading */}
        <p className="hero-desc">
          Integramos sistemas, automatizamos procesos y desarrollamos herramientas internas para empresas que necesitan hacer más con la tecnología que ya utilizan.
        </p>

        {/* Discreta línea de alcance técnico */}
        <div className="hero-ecosystem-tags" aria-label="Alcance tecnológico principal">
          <span>ERP</span>
          <span className="hero-tag-separator">·</span>
          <span>Marketplaces</span>
          <span className="hero-tag-separator">·</span>
          <span>APIs</span>
          <span className="hero-tag-separator">·</span>
          <span>Software interno</span>
        </div>

        {/* Hero Actions */}
        <div className="hero-actions">
          <a href="#contacto" className="btn btn-primary-light">
            <span>Cuéntanos sobre tu proceso</span>
            <ArrowRight size={16} />
          </a>
          <a href="#metodologia" className="btn btn-secondary-light">
            <span>Cómo trabajamos</span>
            <ArrowDown size={15} />
          </a>
        </div>
      </div>
    </section>
  );
};
