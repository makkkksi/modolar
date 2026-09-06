import React from 'react';

export const NavyPhilosophy: React.FC = () => {
  return (
    <section className="navy-section section-padding" aria-label="Filosofía operacional">
      <div className="container">
        <div className="navy-inner">
          <h2 className="navy-h2">
            Primero entendemos la operación.<br />
            Después definimos la tecnología.
          </h2>
          <p className="navy-body">
            No comenzamos recomendando una plataforma. Primero entendemos cómo funciona el proceso, qué herramientas existen y dónde aparece la fricción. Después decidimos si tiene sentido adaptar, integrar, automatizar o desarrollar.
          </p>
        </div>
      </div>
    </section>
  );
};
