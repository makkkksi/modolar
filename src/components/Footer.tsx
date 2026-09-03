import React from 'react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer-top">
          {/* Brand Col */}
          <div className="footer-brand">
            <img
              src="/assets/modolar-logo-horizontal-white.png"
              alt="MODOLAR"
              className="footer-logo"
              width="180"
              height="28"
            />
            <p className="footer-claim">
              Tecnología que se adapta a tu operación.
            </p>
            <p style={{ fontSize: '0.8125rem', color: '#8395a7', marginTop: '0.75rem' }}>
              Consultoría tecnológica especializada en optimización operacional, adaptación de ERP e integración de sistemas.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="footer-nav">
            <div>
              <div className="footer-col-title">Navegación</div>
              <ul className="footer-links">
                <li><a href="#soluciones" className="footer-link">Soluciones</a></li>
                <li><a href="#metodologia" className="footer-link">Cómo trabajamos</a></li>
                <li><a href="#casos" className="footer-link">Casos de experiencia</a></li>
                <li><a href="#sobre-modolar" className="footer-link">Sobre MODOLAR</a></li>
                <li><a href="#contacto" className="footer-link">Contacto</a></li>
              </ul>
            </div>

            <div>
              <div className="footer-col-title">Enfoque</div>
              <ul className="footer-links">
                <li><span style={{ color: '#8a9ba8', fontSize: '0.875rem' }}>Adaptación de ERP</span></li>
                <li><span style={{ color: '#8a9ba8', fontSize: '0.875rem' }}>Integración de Marketplaces</span></li>
                <li><span style={{ color: '#8a9ba8', fontSize: '0.875rem' }}>Software operacional a medida</span></li>
                <li><span style={{ color: '#8a9ba8', fontSize: '0.875rem' }}>Automatización logística</span></li>
              </ul>
            </div>

            <div>
              <div className="footer-col-title">Contacto</div>
              <ul className="footer-links">
                <li>
                  <a href="#contacto" className="footer-link" style={{ color: 'var(--color-teal)' }}>
                    Iniciar conversación operacional →
                  </a>
                </li>
                <li>
                  <span style={{ color: '#8a9ba8', fontSize: '0.8125rem' }}>
                    Consultoría tecnológica desde Chile
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div>
            © {currentYear} MODOLAR SpA. Todos los derechos reservados.
          </div>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <span>Privacidad y confidencialidad operacional garantizada</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
