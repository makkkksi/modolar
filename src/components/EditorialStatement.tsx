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
              Muchas empresas ya cuentan con ERP, marketplaces, sistemas internos y procesos consolidados a lo largo de los años.
            </p>
            <p className="body-text">
              Nuestro trabajo no consiste en imponer plataformas desde cero, sino en comprender a fondo cómo operan esas piezas en el día a día, identificar con precisión dónde surgen las fricciones y duplicaciones, y definir la intervención tecnológica exacta que destrabe la operación.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
