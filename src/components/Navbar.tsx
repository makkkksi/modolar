import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when mobile drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  const closeMobile = () => setMobileMenuOpen(false);

  return (
    <>
      <header
        className={`navbar ${scrolled ? 'navbar-scrolled' : 'navbar-transparent'}`}
        role="banner"
      >
        <div className="container navbar-inner">
          <a href="#" className="navbar-logo-link" aria-label="MODOLAR - Inicio">
            <img
              src={scrolled ? '/assets/modolar-logo-horizontal-navy.png' : '/assets/modolar-logo-horizontal-white.png'}
              alt="MODOLAR"
              className="navbar-logo-img"
              width="180"
              height="26"
            />
          </a>

          <nav className="navbar-links" aria-label="Navegación principal">
            <a href="#soluciones" className="navbar-link">Dónde trabajamos</a>
            <a href="#metodologia" className="navbar-link">Cómo trabajamos</a>
            <a href="#casos" className="navbar-link">Casos</a>
            <a href="#sobre-modolar" className="navbar-link">MODOLAR</a>
            <a href="#contacto" className="navbar-link">Contacto</a>
          </nav>

          <div className="navbar-cta">
            <a
              href="#contacto"
              className={`btn ${scrolled ? 'btn-primary-navy' : 'btn-primary-light'}`}
            >
              <span>Conversemos</span>
              <ArrowRight size={15} />
            </a>
          </div>

          <button
            type="button"
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          className="mobile-menu-overlay"
          onClick={closeMobile}
          aria-hidden="true"
        >
          <div
            id="mobile-navigation"
            className="mobile-menu-drawer"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label="Menú de navegación móvil"
          >
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2.5rem' }}>
                <img
                  src="/assets/modolar-logo-horizontal-navy.png"
                  alt="MODOLAR"
                  style={{ height: '24px', width: 'auto' }}
                />
                <button
                  type="button"
                  onClick={closeMobile}
                  aria-label="Cerrar menú"
                  style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--color-navy)', padding: '0.5rem' }}
                >
                  <X size={24} />
                </button>
              </div>

              <nav style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <a
                  href="#soluciones"
                  onClick={closeMobile}
                  style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--color-navy)' }}
                >
                  Dónde trabajamos
                </a>
                <a
                  href="#metodologia"
                  onClick={closeMobile}
                  style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--color-navy)' }}
                >
                  Cómo trabajamos
                </a>
                <a
                  href="#casos"
                  onClick={closeMobile}
                  style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--color-navy)' }}
                >
                  Casos
                </a>
                <a
                  href="#sobre-modolar"
                  onClick={closeMobile}
                  style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--color-navy)' }}
                >
                  MODOLAR
                </a>
                <a
                  href="#contacto"
                  onClick={closeMobile}
                  style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--color-navy)' }}
                >
                  Contacto
                </a>
              </nav>
            </div>

            <div style={{ paddingTop: '2rem', borderTop: '1px solid var(--color-gray-light)' }}>
              <a
                href="#contacto"
                onClick={closeMobile}
                className="btn btn-primary-navy"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                <span>Conversemos</span>
                <ArrowRight size={16} />
              </a>
              <p style={{ fontSize: '0.75rem', color: 'var(--color-steel)', marginTop: '1rem', textAlign: 'center' }}>
                Consultoría independiente con base en Santiago de Chile
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
