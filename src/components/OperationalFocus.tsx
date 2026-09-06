import React from 'react';
import { PackageCheck, ShoppingBag, Sliders } from 'lucide-react';

export const OperationalFocus: React.FC = () => {
  return (
    <section className="focus-section section-padding" id="que-resolvemos" aria-label="Qué resuelve MODOLAR">
      {/* Anchor alias for backwards-compatibility */}
      <span id="soluciones" style={{ display: 'none' }} aria-hidden="true" />
      <div className="container">
        <div className="focus-header">
          <span className="eyebrow eyebrow-teal">QUÉ RESOLVEMOS</span>
          <h2 className="h2-section" style={{ maxWidth: '680px' }}>
            Tecnología para operaciones que necesitan funcionar mejor.
          </h2>
        </div>

        <div className="focus-layout">
          <div className="focus-list">
            <article className="focus-item">
              <div className="focus-item-header">
                <span className="focus-item-number">01</span>
                <PackageCheck size={20} color="var(--color-navy)" />
                <h3 className="focus-item-title">Logística e inventario</h3>
              </div>
              <p className="body-text">
                Procesos de stock, pedidos, despacho, preparación, control de inventario físico, sincronización entre bodegas y trazabilidad práctica en el día a día.
              </p>
            </article>

            <article className="focus-item">
              <div className="focus-item-header">
                <span className="focus-item-number">02</span>
                <ShoppingBag size={20} color="var(--color-navy)" />
                <h3 className="focus-item-title">E-commerce y marketplaces</h3>
              </div>
              <p className="body-text">
                Publicación y actualización de catálogo, sincronización de stock con Mercado Libre, gestión unificada de pedidos y conexión directa con el ERP a través de múltiples canales.
              </p>
            </article>

            <article className="focus-item">
              <div className="focus-item-header">
                <span className="focus-item-number">03</span>
                <Sliders size={20} color="var(--color-navy)" />
                <h3 className="focus-item-title">Procesos internos</h3>
              </div>
              <p className="body-text">
                Transición de tareas manuales y planillas Excel a herramientas internas, automatización de pasos administrativos y sistemas auxiliares para operaciones comerciales y productivas de pymes.
              </p>
            </article>
          </div>

          <div className="focus-image-wrapper">
            <img
              src="/assets/dispatch_workstation.jpg"
              alt="Estación de trabajo operacional con software de preparación de pedidos, rotulado e inventario"
              className="focus-image"
              loading="lazy"
            />
            <div className="focus-image-caption">
              <strong>Software dentro de la operación</strong> — herramientas digitales que conviven directamente con personas, inventario y procesos en terreno.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
