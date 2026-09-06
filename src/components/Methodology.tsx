import React from 'react';

interface Step {
  num: string;
  title: string;
  desc: string;
}

const steps: Step[] = [
  {
    num: '01',
    title: 'Entender',
    desc: 'Conocemos el proceso, las herramientas existentes y las personas involucradas en la operación diaria.'
  },
  {
    num: '02',
    title: 'Diagnosticar',
    desc: 'Identificamos duplicaciones, tareas manuales y puntos de fricción donde la información se traba.'
  },
  {
    num: '03',
    title: 'Diseñar',
    desc: 'Definimos qué conviene integrar, adaptar, automatizar o construir con un alcance pragmático.'
  },
  {
    num: '04',
    title: 'Implementar',
    desc: 'Desarrollamos la solución con un alcance claro, validando su funcionamiento paso a paso.'
  },
  {
    num: '05',
    title: 'Optimizar',
    desc: 'Ajustamos la herramienta según su uso real en terreno y las necesidades del equipo.'
  }
];

export const Methodology: React.FC = () => {
  return (
    <section className="methodology-section section-padding" id="metodologia" aria-label="Metodología de trabajo">
      <div className="container">
        <div style={{ maxWidth: '680px' }}>
          <span className="eyebrow eyebrow-teal">Metodología de trabajo</span>
          <h2 className="h2-section">Cómo trabajamos</h2>
          <p className="lead-text" style={{ marginTop: '0.75rem' }}>
            Un proceso directo y estructurado para intervenir en tus procesos sin alterar la continuidad de tu equipo.
          </p>
        </div>

        <div className="methodology-steps">
          <div className="methodology-track" aria-hidden="true" />

          {steps.map((s) => (
            <div key={s.num} className="methodology-step">
              <div className="methodology-dot" aria-label={`Paso ${s.num}`}>
                {s.num}
              </div>
              <div>
                <h3 className="methodology-step-title">{s.title}</h3>
                <p className="methodology-step-desc">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
