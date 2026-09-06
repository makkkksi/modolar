import React from 'react';
import { Compass, ShieldCheck } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section className="about-section section-padding" id="sobre-modolar" aria-label="Sobre MODOLAR y modelo de colaboración">
      <div className="container">
        <div className="about-grid">
          {/* Manifiesto Institucional */}
          <div>
            <span className="eyebrow eyebrow-teal">Consultoría tecnológica independiente</span>
            <h2 className="h2-section" style={{ marginBottom: '1.5rem' }}>
              MODOLAR
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <p className="lead-text">
                MODOLAR nace de experiencia trabajando directamente con empresas donde ERP, marketplaces, sistemas internos y procesos manuales deben convivir diariamente. El objetivo es resolver problemas tecnológicos concretos sin obligar a las empresas a reemplazar herramientas que todavía funcionan.
              </p>
              <p className="body-text">
                Trabajamos desde el proceso hacia la tecnología: primero entendemos cómo funciona la operación y luego definimos qué vale la pena integrar, automatizar, adaptar o desarrollar.
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginTop: '0.75rem', color: 'var(--color-steel)', fontSize: '0.875rem' }}>
                <Compass size={18} color="var(--color-teal)" />
                <span>Consultoría tecnológica independiente con base en Santiago de Chile.</span>
              </div>
            </div>
          </div>

          {/* Sin paquetes estándar: Enfoque desde la operación */}
          <div className="about-manifesto">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.25rem' }}>
              <ShieldCheck size={22} color="var(--color-teal)" />
              <span style={{ fontSize: '0.8125rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-navy)' }}>
                Enfoque práctico
              </span>
            </div>

            <h3 className="h3-title" style={{ marginBottom: '1rem' }}>
              No partimos desde un paquete.<br />
              Partimos desde tu operación.
            </h3>

            <p className="body-text" style={{ marginBottom: '1.25rem' }}>
              Cada empresa utiliza herramientas y procesos distintos. Por eso el alcance de cada proyecto se define después de entender el problema y evaluar qué intervención realmente genera valor.
            </p>

            <div style={{ padding: '1rem 1.25rem', backgroundColor: 'var(--color-gray-surface)', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-gray-light)' }}>
              <p style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-navy)', margin: 0 }}>
                «Primero entendemos cómo funciona el proceso hoy. Después decidimos si la respuesta es adaptar una herramienta, conectar dos sistemas o construir algo específico.»
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
