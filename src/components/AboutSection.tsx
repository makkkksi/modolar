import React from 'react';
import { ShieldCheck, UserCheck } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section className="about-section section-padding" id="sobre-modolar" aria-label="Sobre MODOLAR y modelo de colaboración">
      <div className="container">
        <div className="about-grid">
          {/* Manifiesto Institucional */}
          <div>
            <span className="eyebrow eyebrow-teal">ESTUDIO TECNOLÓGICO INDEPENDIENTE</span>
            <h2 className="h2-section" style={{ marginBottom: '1.5rem' }}>
              MODOLAR
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.15rem' }}>
              <p className="lead-text">
                MODOLAR es un estudio tecnológico independiente con base en Santiago de Chile, enfocado en resolver problemas concretos de integración, automatización y software operacional.
              </p>
              <p className="body-text">
                La iniciativa nace de experiencia trabajando directamente con empresas donde ERP, marketplaces, sistemas internos y procesos manuales deben convivir diariamente.
              </p>
              <p className="body-text">
                El enfoque parte desde el proceso: primero se entiende cómo funciona la operación y después se define qué vale la pena integrar, automatizar, adaptar o desarrollar.
              </p>

              {/* Bloque Fundador sobrio y transparente */}
              <div className="about-founder-card">
                <div className="about-founder-title">
                  <UserCheck size={16} color="var(--color-teal)" />
                  <span>Quién está detrás de MODOLAR</span>
                </div>
                <p className="about-founder-text">
                  MODOLAR es liderado actualmente por su fundador, estudiante de Ingeniería Informática y Telecomunicaciones, con experiencia práctica desarrollando e implementando soluciones para operaciones reales.
                </p>
                <p className="about-founder-subtext">
                  Según el alcance de cada proyecto, MODOLAR puede incorporar colaboradores técnicos especializados.
                </p>
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
              Cada empresa utiliza herramientas y procesos distintos. Por eso el alcance de cada proyecto se define después de entender el problema y determinar qué intervención realmente tiene sentido.
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
