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
            <p style={{ fontSize: '0.8125rem', color: '#8395a7', marginTop: '0.75rem', lineHeight: 1.6 }}>
              Estudio tecnológico independiente especializado en integración de sistemas, automatización, adaptación de ERP y software interno.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="footer-nav">
            <div>
              <div className="footer-col-title">Navegación</div>
              <ul className="footer-links">
                <li><a href="#que-resolvemos" className="footer-link">Qué resolvemos</a></li>
                <li><a href="#metodologia" className="footer-link">Cómo trabajamos</a></li>
                <li><a href="#proyectos" className="footer-link">Proyectos</a></li>
                <li><a href="#sobre-modolar" className="footer-link">MODOLAR</a></li>
                <li><a href="#contacto" className="footer-link">Contacto</a></li>
              </ul>
            </div>

            <div>
              <div className="footer-col-title">Capacidades</div>
              <ul className="footer-links">
                <li><span style={{ color: '#8a9ba8', fontSize: '0.875rem' }}>Integraciones y APIs</span></li>
                <li><span style={{ color: '#8a9ba8', fontSize: '0.875rem' }}>Automatización de procesos</span></li>
                <li><span style={{ color: '#8a9ba8', fontSize: '0.875rem' }}>Adaptación de ERP</span></li>
                <li><span style={{ color: '#8a9ba8', fontSize: '0.875rem' }}>Software interno a medida</span></li>
                <li><span style={{ color: '#8a9ba8', fontSize: '0.875rem' }}>Consultoría tecnológica</span></li>
              </ul>
            </div>

            <div>
              <div className="footer-col-title">Contacto directo</div>
              <ul className="footer-links">
                <li>
                  <a
                    href="mailto:maximiliano.santibanezh@gmail.com?subject=Consulta%20operacional%20-%20MODOLAR"
                    className="footer-link"
                    style={{ color: 'var(--color-teal)', wordBreak: 'break-all', fontSize: '0.8125rem' }}
                  >
                    maximiliano.santibanezh@gmail.com →
                  </a>
                </li>
                <li>
                  <span style={{ color: '#8a9ba8', fontSize: '0.8125rem' }}>
                    Santiago de Chile · Respuesta directa
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
