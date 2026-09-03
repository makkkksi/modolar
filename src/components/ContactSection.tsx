import React from 'react';
import { ContactForm } from './ContactForm';
import { ShieldCheck, ArrowRight } from 'lucide-react';

export const ContactSection: React.FC = () => {
  return (
    <section className="contact-section section-padding" id="contacto" aria-label="Contacto e inicio de conversación operacional">
      <div className="container">
        <div className="contact-layout">
          {/* Left Column: Contexto consultivo */}
          <div className="contact-info">
            <span className="eyebrow eyebrow-teal">Conversación directa</span>
            <h2 className="h2-section" style={{ marginBottom: '1.5rem' }}>
              Cuéntanos cómo funciona tu operación.
            </h2>
            <p className="lead-text" style={{ marginBottom: '1.5rem' }}>
              No necesitas llegar con una solución técnica definida. Cuéntanos qué proceso quieres mejorar, qué herramientas utilizan hoy y dónde están apareciendo las principales fricciones.
            </p>
            <p className="body-text" style={{ marginBottom: '2rem' }}>
              El primer paso de nuestro trabajo es comprender la operación física y el flujo de datos. Si podemos ayudarte, te diremos exactamente cómo; si no corresponde desarrollar o intervenir, también te lo diremos con honestidad.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', borderTop: '1px solid var(--color-gray-border)', paddingTop: '1.75rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <ShieldCheck size={18} color="var(--color-navy)" />
                <span style={{ fontSize: '0.875rem', color: 'var(--color-navy)', fontWeight: 600 }}>
                  Empecemos entendiendo el problema
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <ArrowRight size={16} color="var(--color-teal)" />
                <span style={{ fontSize: '0.875rem', color: 'var(--color-steel)' }}>
                  Evaluación inicial sin compromisos comerciales predefinidos
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Formulario amplio integrado */}
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};
