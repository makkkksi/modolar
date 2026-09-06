import React, { useState } from 'react';
import { Mail, Copy, Check, ArrowRight, Clock, MapPin, Sparkles } from 'lucide-react';

export const ContactDirect: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const email = 'maximiliano.santibanezh@gmail.com';

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch {
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }
  };

  return (
    <div className="form-wrapper" aria-label="Información de contacto directo">
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.25rem' }}>
        <Mail size={22} color="var(--color-teal)" />
        <span style={{ fontSize: '0.8125rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-navy)' }}>
          Contacto directo
        </span>
      </div>

      <h3 style={{ fontSize: '1.45rem', fontWeight: 700, color: 'var(--color-navy)', marginBottom: '0.75rem', lineHeight: 1.3 }}>
        Conversemos directamente sobre tu operación.
      </h3>

      <p style={{ fontSize: '0.9375rem', color: 'var(--color-steel)', lineHeight: 1.6, marginBottom: '1.75rem' }}>
        Para una comunicación técnica ágil y sin intermediarios, escríbenos directamente. Revisamos cada consulta de forma personalizada.
      </p>

      {/* Email Address Highlight Box with Copy Button */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '1rem 1.25rem',
          backgroundColor: 'var(--color-gray-surface)',
          border: '1px solid var(--color-gray-border)',
          borderRadius: 'var(--radius-md)',
          marginBottom: '1.5rem',
          flexWrap: 'wrap',
          gap: '0.75rem'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', minWidth: '220px', wordBreak: 'break-all' }}>
          <Mail size={18} color="var(--color-navy)" />
          <span style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--color-navy)' }}>
            {email}
          </span>
        </div>

        <button
          type="button"
          onClick={handleCopy}
          className="btn btn-secondary-dark"
          style={{ padding: '0.45rem 0.85rem', fontSize: '0.8125rem', cursor: 'pointer' }}
          aria-label="Copiar correo electrónico al portapapeles"
        >
          {copied ? (
            <>
              <Check size={14} color="var(--color-teal)" />
              <span style={{ color: 'var(--color-teal)', fontWeight: 600 }}>Copiado</span>
            </>
          ) : (
            <>
              <Copy size={14} />
              <span>Copiar correo</span>
            </>
          )}
        </button>
      </div>

      {/* Primary Action Button */}
      <a
        href={`mailto:${email}?subject=Consulta%20operacional%20-%20MODOLAR`}
        className="btn btn-primary-navy"
        style={{ width: '100%', justifyContent: 'center', padding: '0.9rem 1.5rem', fontSize: '0.9375rem', marginBottom: '2rem' }}
      >
        <span>Escribir por correo electrónico</span>
        <ArrowRight size={16} />
      </a>

      {/* Suggested Content Guide */}
      <div
        style={{
          padding: '1.25rem',
          backgroundColor: 'var(--color-white)',
          border: '1px solid var(--color-gray-light)',
          borderRadius: 'var(--radius-md)',
          marginBottom: '1.5rem'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
          <Sparkles size={16} color="var(--color-teal)" />
          <span style={{ fontSize: '0.8125rem', fontWeight: 700, color: 'var(--color-navy)' }}>
            ¿Qué puedes incluir en tu mensaje?
          </span>
        </div>
        <ul style={{ margin: 0, paddingLeft: '1.25rem', fontSize: '0.875rem', color: 'var(--color-steel)', lineHeight: 1.65 }}>
          <li>Qué herramientas o plataformas utilizan hoy (Odoo, ERP, Mercado Libre, planillas, etc.).</li>
          <li>Dónde aparece la fricción, duplicación o trabajo manual en el día a día.</li>
          <li>Qué proceso específico te gustaría conectar, automatizar o adaptar.</li>
        </ul>
      </div>

      {/* Trust & Location Footnotes */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', borderTop: '1px solid var(--color-gray-light)', paddingTop: '1.25rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.8125rem', color: 'var(--color-steel)' }}>
          <Clock size={15} color="var(--color-teal)" />
          <span>Respuesta directa y técnica en menos de 24 horas.</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.8125rem', color: 'var(--color-steel)' }}>
          <MapPin size={15} color="var(--color-teal)" />
          <span>Santiago de Chile · Conversación directa con el fundador.</span>
        </div>
      </div>
    </div>
  );
};
