import React, { useState } from 'react';
import { ContactFormData, FormStatus, IndustryOption, NeedOption } from '../types';
import { submitContactOperation } from '../services/contact';
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

const industryOptions: IndustryOption[] = [
  'Logística / Fulfillment',
  'Producción / Manufactura',
  'E-commerce',
  'Distribución',
  'Retail',
  'Otra'
];

const needOptions: NeedOption[] = [
  'Adaptar un ERP',
  'Integrar sistemas',
  'Automatizar un proceso',
  'Desarrollar software a medida',
  'Mejorar una operación existente',
  'Necesito orientación',
  'Otro'
];

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    nombre: '',
    empresa: '',
    cargo: '',
    correo: '',
    telefono: '',
    industria: '',
    sistemasActuales: '',
    necesidad: '',
    operacionDetalle: ''
  });

  const [status, setStatus] = useState<FormStatus>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  const validate = (): boolean => {
    const errors: Record<string, string> = {};

    if (!formData.nombre.trim()) {
      errors.nombre = 'El nombre es obligatorio.';
    }

    if (!formData.empresa.trim()) {
      errors.empresa = 'El nombre de la empresa es obligatorio.';
    }

    if (!formData.correo.trim()) {
      errors.correo = 'El correo electrónico es obligatorio.';
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.correo)) {
        errors.correo = 'Ingrese un correo electrónico válido.';
      }
    }

    if (!formData.operacionDetalle.trim()) {
      errors.operacionDetalle = 'Por favor descríbenos brevemente cómo funciona tu operación.';
    } else if (formData.operacionDetalle.trim().length < 15) {
      errors.operacionDetalle = 'Cuéntanos un poco más de detalle (mínimo 15 caracteres) para entender tu contexto.';
    }

    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear field-level error on edit
    if (fieldErrors[name]) {
      setFieldErrors((prev) => {
        const updated = { ...prev };
        delete updated[name];
        return updated;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!validate()) {
      setStatus('validation_error');
      return;
    }

    setStatus('loading');

    try {
      const result = await submitContactOperation(formData);

      if (result.success) {
        setStatus('success');
      } else {
        setStatus('server_error');
        setErrorMessage(result.error || 'Ocurrió un inconveniente al enviar su consulta. Intente nuevamente.');
      }
    } catch {
      setStatus('server_error');
      setErrorMessage('Error de conexión. Verifique su red e intente nuevamente.');
    }
  };

  if (status === 'success') {
    return (
      <div className="form-success-box" role="status" aria-live="polite">
        <div className="form-success-icon">
          <CheckCircle2 size={32} />
        </div>
        <h3 className="h3-title" style={{ marginBottom: '1rem', color: 'var(--color-navy)' }}>
          Gracias. Ya tenemos el contexto inicial.
        </h3>
        <p className="body-text" style={{ margin: '0 auto 2rem auto', maxWidth: '50ch' }}>
          Revisaremos tu consulta detalladamente y nos pondremos en contacto para conocer mejor tu operación y evaluar la intervención adecuada.
        </p>
        <button
          type="button"
          className="btn btn-secondary-dark"
          onClick={() => {
            setFormData({
              nombre: '',
              empresa: '',
              cargo: '',
              correo: '',
              telefono: '',
              industria: '',
              sistemasActuales: '',
              necesidad: '',
              operacionDetalle: ''
            });
            setStatus('idle');
          }}
        >
          Enviar otra consulta
        </button>
      </div>
    );
  }

  return (
    <div className="form-wrapper">
      <form onSubmit={handleSubmit} noValidate aria-label="Formulario de consulta operacional">
        {status === 'server_error' && (
          <div
            style={{
              padding: '1rem',
              backgroundColor: 'var(--color-error-bg)',
              border: '1px solid var(--color-error)',
              borderRadius: 'var(--radius-md)',
              color: 'var(--color-error)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.6rem',
              marginBottom: '1.5rem',
              fontSize: '0.875rem'
            }}
            role="alert"
          >
            <AlertCircle size={18} />
            <span>{errorMessage}</span>
          </div>
        )}

        <div className="form-grid">
          {/* Nombre */}
          <div className="form-group">
            <label htmlFor="input-nombre" className="form-label">
              Nombre <span style={{ color: 'var(--color-teal)' }}>*</span>
            </label>
            <input
              id="input-nombre"
              name="nombre"
              type="text"
              required
              value={formData.nombre}
              onChange={handleChange}
              placeholder="Tu nombre y apellido"
              className="form-input"
              aria-invalid={!!fieldErrors.nombre}
              aria-describedby={fieldErrors.nombre ? 'err-nombre' : undefined}
            />
            {fieldErrors.nombre && (
              <span id="err-nombre" className="form-error-msg">{fieldErrors.nombre}</span>
            )}
          </div>

          {/* Empresa */}
          <div className="form-group">
            <label htmlFor="input-empresa" className="form-label">
              Empresa <span style={{ color: 'var(--color-teal)' }}>*</span>
            </label>
            <input
              id="input-empresa"
              name="empresa"
              type="text"
              required
              value={formData.empresa}
              onChange={handleChange}
              placeholder="Nombre de tu empresa"
              className="form-input"
              aria-invalid={!!fieldErrors.empresa}
              aria-describedby={fieldErrors.empresa ? 'err-empresa' : undefined}
            />
            {fieldErrors.empresa && (
              <span id="err-empresa" className="form-error-msg">{fieldErrors.empresa}</span>
            )}
          </div>

          {/* Correo */}
          <div className="form-group">
            <label htmlFor="input-correo" className="form-label">
              Correo electrónico <span style={{ color: 'var(--color-teal)' }}>*</span>
            </label>
            <input
              id="input-correo"
              name="correo"
              type="email"
              required
              value={formData.correo}
              onChange={handleChange}
              placeholder="ejemplo@empresa.com"
              className="form-input"
              aria-invalid={!!fieldErrors.correo}
              aria-describedby={fieldErrors.correo ? 'err-correo' : undefined}
            />
            {fieldErrors.correo && (
              <span id="err-correo" className="form-error-msg">{fieldErrors.correo}</span>
            )}
          </div>

          {/* Cargo / Rol */}
          <div className="form-group">
            <label htmlFor="input-cargo" className="form-label">
              Cargo / rol <span className="form-label-optional">(opcional)</span>
            </label>
            <input
              id="input-cargo"
              name="cargo"
              type="text"
              value={formData.cargo}
              onChange={handleChange}
              placeholder="Ej. Gerente de Operaciones, TI, Logística"
              className="form-input"
            />
          </div>

          {/* Teléfono */}
          <div className="form-group">
            <label htmlFor="input-telefono" className="form-label">
              Teléfono <span className="form-label-optional">(opcional)</span>
            </label>
            <input
              id="input-telefono"
              name="telefono"
              type="tel"
              value={formData.telefono}
              onChange={handleChange}
              placeholder="+56 9 1234 5678"
              className="form-input"
            />
          </div>

          {/* Industria */}
          <div className="form-group">
            <label htmlFor="select-industria" className="form-label">
              Industria <span className="form-label-optional">(opcional)</span>
            </label>
            <select
              id="select-industria"
              name="industria"
              value={formData.industria}
              onChange={handleChange}
              className="form-select"
            >
              <option value="">Selecciona tu sector operacional</option>
              {industryOptions.map((ind) => (
                <option key={ind} value={ind}>{ind}</option>
              ))}
            </select>
          </div>

          {/* Sistemas Actuales */}
          <div className="form-group form-col-full">
            <label htmlFor="input-sistemas" className="form-label">
              Sistemas utilizados actualmente <span className="form-label-optional">(opcional)</span>
            </label>
            <input
              id="input-sistemas"
              name="sistemasActuales"
              type="text"
              value={formData.sistemasActuales}
              onChange={handleChange}
              placeholder="Ej. Odoo, Mercado Libre, ERP interno, marketplaces, planillas..."
              className="form-input"
            />
          </div>

          {/* Qué necesitas mejorar */}
          <div className="form-group form-col-full">
            <label htmlFor="select-necesidad" className="form-label">
              ¿Qué necesitas mejorar? <span className="form-label-optional">(opcional)</span>
            </label>
            <select
              id="select-necesidad"
              name="necesidad"
              value={formData.necesidad}
              onChange={handleChange}
              className="form-select"
            >
              <option value="">Selecciona el objetivo principal</option>
              {needOptions.map((opt) => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </select>
          </div>

          {/* Mensaje principal obligatorio */}
          <div className="form-group form-col-full">
            <label htmlFor="textarea-operacion" className="form-label" style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span>Cuéntanos sobre tu operación <span style={{ color: 'var(--color-teal)' }}>*</span></span>
              <span style={{ fontSize: '0.75rem', color: 'var(--color-steel)' }}>Principal campo de diagnóstico</span>
            </label>
            <textarea
              id="textarea-operacion"
              name="operacionDetalle"
              required
              rows={4}
              value={formData.operacionDetalle}
              onChange={handleChange}
              placeholder="¿Cómo funciona actualmente el proceso? ¿Qué herramientas utilizan hoy? ¿Dónde aparece el principal problema o cuello de botella?"
              className="form-textarea"
              aria-invalid={!!fieldErrors.operacionDetalle}
              aria-describedby={fieldErrors.operacionDetalle ? 'err-operacion' : undefined}
            />
            {fieldErrors.operacionDetalle && (
              <span id="err-operacion" className="form-error-msg">{fieldErrors.operacionDetalle}</span>
            )}
          </div>

          {/* Submit Button */}
          <div className="form-col-full" style={{ marginTop: '0.5rem' }}>
            <button
              type="submit"
              disabled={status === 'loading'}
              className="btn btn-primary-navy"
              style={{ width: '100%', padding: '0.95rem 1.5rem', fontSize: '1rem' }}
            >
              {status === 'loading' ? (
                <>
                  <Loader2 size={18} className="spin-icon" />
                  <span>Procesando consulta...</span>
                </>
              ) : (
                <>
                  <span>Enviar consulta</span>
                  <Send size={16} />
                </>
              )}
            </button>

            <div className="form-trust-copy">
              <CheckCircle2 size={15} color="var(--color-teal)" />
              <span>
                Revisamos cada consulta para entender el contexto antes de proponer una solución. Sin propuestas genéricas.
              </span>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
