import React from 'react';
import { Compass, ShieldCheck } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section className="about-section section-padding" id="sobre-modolar" aria-label="Sobre MODOLAR y modelo de colaboración">
      <div className="container">
        <div className="about-grid">
          {/* Manifiesto Institucional */}
          <div>
            <span className="eyebrow eyebrow-teal">Sobre nosotros</span>
            <h2 className="h2-section" style={{ marginBottom: '1.5rem' }}>
              MODOLAR
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <p className="lead-text">
                MODOLAR nace desde una idea simple: las empresas no deberían verse forzadas a modificar toda su operación para ajustarse a herramientas rígidas o empaquetadas.
              </p>
              <p className="body-text">
                Combinamos ingeniería de software, integración de sistemas y análisis operacional para construir tecnología alrededor de cómo cada empresa realmente trabaja. Nuestro foco está en la confiabilidad de los procesos diarios, el control de la información y la eliminación de fricciones que ralentizan el crecimiento.
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginTop: '0.75rem', color: 'var(--color-steel)', fontSize: '0.875rem' }}>
                <Compass size={18} color="var(--color-teal)" />
                <span>Consultoría tecnológica e ingeniería desde Santiago de Chile para operaciones en expansión.</span>
              </div>
            </div>
          </div>

          {/* Sin paquetes estándar: Enfoque consultivo a medida */}
          <div className="about-manifesto">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.25rem' }}>
              <ShieldCheck size={22} color="var(--color-teal)" />
              <span style={{ fontSize: '0.8125rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-navy)' }}>
                Modelo consultivo
              </span>
            </div>

            <h3 className="h3-title" style={{ marginBottom: '1rem' }}>
              No partimos desde un paquete.<br />
              Partimos desde tu operación.
            </h3>

            <p className="body-text" style={{ marginBottom: '1.25rem' }}>
              Cada empresa combina procesos, sistemas, personas y objetivos distintos. Por eso no ofrecemos planes prediseñados ni tarifas genéricas: definimos cada intervención después de comprender el contexto real de la operación y diagnosticar qué solución resolverá verdaderamente el cuello de botella.
            </p>

            <div style={{ padding: '1rem 1.25rem', backgroundColor: 'var(--color-gray-surface)', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-gray-light)' }}>
              <p style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-navy)', margin: 0 }}>
                «El alcance se construye con rigor alrededor del problema que buscamos resolver, asegurando que cada línea de código o integración agregue valor directo a la rentabilidad operativa.»
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
