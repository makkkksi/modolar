import React from 'react';

export const EditorialStatement: React.FC = () => {
  return (
    <section className="editorial-section section-padding" aria-label="Filosofía central de intervención">
      <div className="container">
        <div className="editorial-grid">
          <div>
            <div className="editorial-divider" aria-hidden="true" />
            <h2 className="editorial-h2">
              No siempre necesitas cambiar tu sistema.<br />
              A veces necesitas hacerlo funcionar mejor.
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <p className="lead-text">
              Muchas empresas ya cuentan con ERP, marketplaces, sistemas internos y herramientas que funcionan correctamente en gran parte de su operación.
            </p>
            <p className="body-text">
              El problema aparece en los espacios entre esas herramientas. MODOLAR identifica esas fricciones y define qué conviene adaptar, integrar, automatizar o construir.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
