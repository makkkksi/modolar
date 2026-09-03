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
    desc: 'Conocemos a fondo la operación en terreno, las herramientas actuales y los equipos involucrados en el día a día.'
  },
  {
    num: '02',
    title: 'Diagnosticar',
    desc: 'Identificamos fricciones críticas, tareas manuales repetitivas, cuellos de botella y riesgos de duplicación de datos.'
  },
  {
    num: '03',
    title: 'Diseñar',
    desc: 'Definimos la arquitectura e intervención tecnológica adecuada: adaptar lo existente, conectar plataformas o construir a medida.'
  },
  {
    num: '04',
    title: 'Implementar',
    desc: 'Desarrollamos, integramos o adaptamos las soluciones con pruebas rigurosas en paralelo para asegurar continuidad operativa.'
  },
  {
    num: '05',
    title: 'Optimizar',
    desc: 'Acompañamos la puesta en marcha, medimos tiempos de ciclo y evolucionamos las herramientas según el crecimiento del negocio.'
  }
];

export const Methodology: React.FC = () => {
  return (
    <section className="methodology-section section-padding" id="metodologia" aria-label="Metodología de trabajo continuo">
      <div className="container">
        <div style={{ maxWidth: '680px' }}>
          <span className="eyebrow eyebrow-teal">Metodología de ingeniería</span>
          <h2 className="h2-section">Cómo trabajamos</h2>
          <p className="lead-text" style={{ marginTop: '0.75rem' }}>
            Un proceso estructurado y transparente diseñado para intervenir sobre operaciones críticas sin interrumpir el flujo del negocio.
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
