import React from 'react';

export const NavyPhilosophy: React.FC = () => {
  return (
    <section className="navy-section section-padding" aria-label="Filosofía operacional">
      <div className="container">
        <div className="navy-inner">
          <span className="eyebrow eyebrow-dark">Enfoque MODOLAR</span>
          <h2 className="navy-h2">
            Primero entendemos la operación.<br />
            Después definimos la tecnología.
          </h2>
          <p className="navy-body">
            No comenzamos recomendando una plataforma ni forzando migraciones traumáticas. Analizamos en profundidad los procesos reales, las herramientas en uso, las personas que las operan y las restricciones diarias de tu negocio para determinar qué intervención tecnológica tiene verdadero sentido técnico y económico.
          </p>
        </div>
      </div>
    </section>
  );
};
