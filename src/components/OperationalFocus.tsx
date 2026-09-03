import React from 'react';
import { PackageCheck, Factory, Store } from 'lucide-react';

export const OperationalFocus: React.FC = () => {
  return (
    <section className="focus-section section-padding" id="soluciones" aria-label="Foco operacional de MODOLAR">
      <div className="container">
        <div className="focus-header">
          <span className="eyebrow eyebrow-teal">Donde trabajamos</span>
          <h2 className="h2-section" style={{ maxWidth: '640px' }}>
            Tecnología para operaciones que no pueden detenerse.
          </h2>
        </div>

        <div className="focus-layout">
          <div className="focus-list">
            <article className="focus-item">
              <div className="focus-item-header">
                <span className="focus-item-number">01</span>
                <PackageCheck size={20} color="var(--color-navy)" />
                <h3 className="focus-item-title">Logística y fulfillment</h3>
              </div>
              <p className="body-text">
                Gestión y control de inventario en tiempo real, sincronización de pedidos multicanal, despacho, trazabilidad y conexión fluida con marketplaces y sistemas de gestión (ERP).
              </p>
            </article>

            <article className="focus-item">
              <div className="focus-item-header">
                <span className="focus-item-number">02</span>
                <Factory size={20} color="var(--color-navy)" />
                <h3 className="focus-item-title">Producción y manufactura</h3>
              </div>
              <p className="body-text">
                Control de procesos productivos en planta, captura de datos operacionales en terreno, trazabilidad de lotes, planificación de recursos e integración con líneas de ensamblaje.
              </p>
            </article>

            <article className="focus-item">
              <div className="focus-item-header">
                <span className="focus-item-number">03</span>
                <Store size={20} color="var(--color-navy)" />
                <h3 className="focus-item-title">Comercio y e-commerce</h3>
              </div>
              <p className="body-text">
                Integración bidireccional entre ERP, plataformas comerciales, catálogos masivos y marketplaces, asegurando coherencia de stock, precios y estados de entrega sin intervención manual duplicada.
              </p>
            </article>
          </div>

          <div className="focus-image-wrapper">
            <img
              src="/assets/production_operation.jpg"
              alt="Operación técnica y monitoreo en línea productiva industrial"
              className="focus-image"
              loading="lazy"
            />
            <div className="focus-image-caption">
              <strong>Entorno operacional real</strong> — software diseñado para integrarse con personas, máquinas y procesos en terreno.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
