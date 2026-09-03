import React from 'react';
import { ArrowRight, ArrowDown } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="hero-section" aria-label="Introducción a MODOLAR">
      {/* Background Logistics Photography */}
      <img
        src="/assets/hero_logistics.jpg"
        alt="Centro de distribución y operaciones logísticas modernas optimizadas por software"
        className="hero-bg-media"
        loading="eager"
        fetchPriority="high"
      />

      {/* Controlled Navy Gradient Overlay */}
      <div className="hero-overlay" aria-hidden="true" />
      
      {/* Soft gradient bottom fade into pure white */}
      <div className="hero-bottom-fade" aria-hidden="true" />

      <div className="container hero-content">
        {/* Subtle Tech Consulting Badge */}
        <div className="hero-badge">
          <span className="hero-badge-dot" />
          <span className="hero-badge-text">Consultoría Tecnológica · Operaciones</span>
        </div>

        {/* Primary H1 */}
        <h1 className="h1-hero hero-title">
          Tecnología que se adapta<br />
          a tu operación.
        </h1>

        {/* Authentic Brand Subheading */}
        <p className="hero-desc">
          Diseñamos, adaptamos e integramos soluciones tecnológicas para optimizar operaciones logísticas, productivas y comerciales. Conectamos tus sistemas alrededor de la forma en que tu empresa realmente funciona.
        </p>

        {/* Hero Actions */}
        <div className="hero-actions">
          <a href="#contacto" className="btn btn-primary-light">
            <span>Cuéntanos tu operación</span>
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
