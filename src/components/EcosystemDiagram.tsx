import React, { useState } from 'react';
import { RefreshCw, Database, ShoppingBag, Radio, Server, CheckCircle2 } from 'lucide-react';

interface SystemNode {
  id: string;
  name: string;
  category: string;
  y: number;
  info: string;
}

const systems: SystemNode[] = [
  { id: 'meli', name: 'Mercado Libre', category: 'Marketplace', y: 65, info: 'Sincronización de pedidos, catálogo y stock disponible sin duplicación.' },
  { id: 'odoo', name: 'Odoo ERP', category: 'Gestión empresarial', y: 145, info: 'Recepción de ventas, órdenes de compra, inventario y movimientos contables.' },
  { id: 'ecommerce', name: 'E-commerce', category: 'Venta online', y: 225, info: 'Flujo directo de pedidos hacia la cola de preparación en bodega.' },
  { id: 'apis', name: 'APIs y Datos', category: 'Servicios externos', y: 305, info: 'Conexión bidireccional mediante webhooks, bases de datos y servicios cloud.' },
  { id: 'interno', name: 'Sistema Existente', category: 'Herramientas locales', y: 385, info: 'Herramientas internas, planillas y software que tu empresa ya utiliza.' }
];

export const EcosystemDiagram: React.FC = () => {
  const [activeNode, setActiveNode] = useState<string>('odoo');

  const selectedSystem = systems.find((s) => s.id === activeNode) || systems[1];

  return (
    <section className="ecosystem-section section-padding" aria-label="Arquitectura del ecosistema MODOLAR">
      <div className="container">
        <div className="ecosystem-header">
          <h2 className="h2-section" style={{ marginBottom: '1rem' }}>
            Hacemos que tus sistemas<br />
            trabajen mejor juntos.
          </h2>
          <p className="lead-text" style={{ margin: '0 auto' }}>
            Conectamos las herramientas que tu empresa ya utiliza para reducir trabajo manual y mantener la información sincronizada.
          </p>
        </div>

        <div className="diagram-card">
          <div className="diagram-svg-container">
            <svg
              viewBox="0 0 940 450"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ width: '100%', height: 'auto', display: 'block' }}
              aria-label="Diagrama de flujo de datos entre canales, MODOLAR y la operación física"
            >
              <defs>
                {/* Subtle gradient for connections */}
                <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#4D6175" stopOpacity="0.25" />
                  <stop offset="50%" stopColor="#18A999" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#132238" stopOpacity="0.3" />
                </linearGradient>

                <filter id="shadowFilter" x="-10%" y="-10%" width="120%" height="120%">
                  <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#132238" floodOpacity="0.06" />
                </filter>
              </defs>

              {/* Connection Paths from Left Nodes to MODOLAR Core (x: 470, y: 225) */}
              {systems.map((sys) => {
                const isActive = activeNode === sys.id;
                const pathD = `M 235 ${sys.y} C 340 ${sys.y}, 370 225, 430 225`;
                return (
                  <g key={`path-${sys.id}`}>
                    <path
                      d={pathD}
                      stroke={isActive ? '#18A999' : 'url(#lineGrad)'}
                      strokeWidth={isActive ? 2.5 : 1.5}
                      strokeDasharray={isActive ? 'none' : '4 4'}
                      opacity={isActive ? 1 : 0.65}
                      style={{ transition: 'all 0.3s ease' }}
                    />
                    {/* Subtle data flow indicator */}
                    <circle r={isActive ? 4 : 3} fill="#18A999">
                      <animateMotion
                        path={pathD}
                        dur={isActive ? '2.4s' : '4s'}
                        repeatCount="indefinite"
                      />
                    </circle>
                  </g>
                );
              })}

              {/* Connection Path from MODOLAR Core (x: 510, y: 225) to OPERACIÓN (x: 740, y: 225) */}
              <path
                d="M 510 225 L 730 225"
                stroke="#18A999"
                strokeWidth="2"
              />
              <circle r="4" fill="#18A999">
                <animateMotion
                  path="M 510 225 L 730 225"
                  dur="2s"
                  repeatCount="indefinite"
                />
              </circle>

              {/* Left System Nodes */}
              {systems.map((sys) => {
                const isSelected = activeNode === sys.id;
                return (
                  <g
                    key={sys.id}
                    onClick={() => setActiveNode(sys.id)}
                    style={{ cursor: 'pointer', outline: 'none' }}
                    className="diagram-node-btn"
                    role="button"
                    tabIndex={0}
                    aria-label={`Seleccionar sistema ${sys.name}`}
                    onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setActiveNode(sys.id); }}
                  >
                    <rect
                      x="20"
                      y={sys.y - 25}
                      width="215"
                      height="50"
                      rx="8"
                      fill={isSelected ? '#132238' : '#FFFFFF'}
                      stroke={isSelected ? '#18A999' : '#DDE5ED'}
                      strokeWidth={isSelected ? '2' : '1'}
                      filter="url(#shadowFilter)"
                      style={{ transition: 'all 0.25s ease' }}
                    />
                    <circle
                      cx="38"
                      cy={sys.y}
                      r="4"
                      fill={isSelected ? '#18A999' : '#4D6175'}
                    />
                    <text
                      x="52"
                      y={sys.y - 2}
                      fill={isSelected ? '#FFFFFF' : '#132238'}
                      fontSize="12.5"
                      fontWeight="700"
                      fontFamily="Manrope, sans-serif"
                    >
                      {sys.name}
                    </text>
                    <text
                      x="52"
                      y={sys.y + 13}
                      fill={isSelected ? '#7EEBE0' : '#718096'}
                      fontSize="9.5"
                      fontWeight="600"
                      fontFamily="Manrope, sans-serif"
                    >
                      {sys.category}
                    </text>
                  </g>
                );
              })}

              {/* Central MODOLAR Core Node */}
              <g filter="url(#shadowFilter)">
                <rect
                  x="430"
                  y="170"
                  width="110"
                  height="110"
                  rx="16"
                  fill="#132238"
                  stroke="#18A999"
                  strokeWidth="2"
                />
                {/* Official Vector Isotipo M inside Core */}
                <g transform="translate(453, 192) scale(0.16)">
                  <path
                    fill="#FFFFFF"
                    fillRule="evenodd"
                    d="M 309,199 L 257,234 L 257,341 L 309,341 Z M 95,199 L 95,341 L 146,341 L 146,234 Z M 2,2 L 2,341 L 53,341 L 54,104 L 203,208 L 349,103 L 350,341 L 402,341 L 402,3 L 201,144 Z"
                  />
                </g>
                <text
                  x="485"
                  y="262"
                  fill="#FFFFFF"
                  fontSize="11"
                  fontWeight="800"
                  letterSpacing="0.1em"
                  textAnchor="middle"
                  fontFamily="Manrope, sans-serif"
                >
                  MODOLAR
                </text>
              </g>

              {/* Right OPERACIÓN Node */}
              <g filter="url(#shadowFilter)">
                <rect
                  x="730"
                  y="170"
                  width="190"
                  height="110"
                  rx="12"
                  fill="#FFFFFF"
                  stroke="#132238"
                  strokeWidth="1.5"
                />
                <circle cx="755" cy="198" r="5" fill="#18A999" />
                <text
                  x="770"
                  y="202"
                  fill="#132238"
                  fontSize="13.5"
                  fontWeight="800"
                  fontFamily="Manrope, sans-serif"
                >
                  PROCESO INTERNO
                </text>
                <text
                  x="755"
                  y="226"
                  fill="#4D6175"
                  fontSize="11"
                  fontWeight="500"
                  fontFamily="Manrope, sans-serif"
                >
                  • Bodega y preparación
                </text>
                <text
                  x="755"
                  y="244"
                  fill="#4D6175"
                  fontSize="11"
                  fontWeight="500"
                  fontFamily="Manrope, sans-serif"
                >
                  • Despacho y estados
                </text>
                <text
                  x="755"
                  y="262"
                  fill="#4D6175"
                  fontSize="11"
                  fontWeight="500"
                  fontFamily="Manrope, sans-serif"
                >
                  • Sin digitación manual
                </text>
              </g>
            </svg>
          </div>

          {/* Interactive Inspection Details */}
          <div
            style={{
              marginTop: '2rem',
              padding: '1.25rem 1.75rem',
              backgroundColor: 'var(--color-gray-surface)',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--color-gray-light)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '1rem'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <CheckCircle2 size={18} color="var(--color-teal)" />
              <div>
                <span style={{ fontSize: '0.8125rem', fontWeight: 700, color: 'var(--color-navy)', marginRight: '0.5rem' }}>
                  Flujo activo: {selectedSystem.name}
                </span>
                <span style={{ fontSize: '0.8125rem', color: 'var(--color-steel)' }}>
                  {selectedSystem.info}
                </span>
              </div>
            </div>

            <span style={{ fontSize: '0.75rem', color: 'var(--color-steel-light)', fontWeight: 600 }}>
              Selecciona cualquier sistema para ver el flujo
            </span>
          </div>
        </div>

        {/* Real Tools Strip (Strictly without Shopify or SAP per user instructions) */}
        <div className="ecosystem-tools-wrap">
          <div className="ecosystem-tools-title">
            Trabajamos con el ecosistema que tu operación ya utiliza
          </div>
          <div className="ecosystem-tools-badges">
            <div className="tool-badge">
              <Database size={16} color="var(--color-teal)" />
              <span>Odoo (ERP & Almacén)</span>
            </div>
            <div className="tool-badge">
              <ShoppingBag size={16} color="var(--color-teal)" />
              <span>Mercado Libre</span>
            </div>
            <div className="tool-badge">
              <Radio size={16} color="var(--color-teal)" />
              <span>Marketplaces multicanal</span>
            </div>
            <div className="tool-badge">
              <Server size={16} color="var(--color-teal)" />
              <span>APIs REST & Webhooks</span>
            </div>
            <div className="tool-badge">
              <RefreshCw size={16} color="var(--color-teal)" />
              <span>Plataformas y bases internas</span>
            </div>
          </div>
          <p style={{ fontSize: '0.75rem', color: 'var(--color-steel-light)', marginTop: '1rem' }}>
            Adaptamos e integramos las herramientas existentes sin dependencias obligatorias de licencias propietarias.
          </p>
        </div>
      </div>
    </section>
  );
};
