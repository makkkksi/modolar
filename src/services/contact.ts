import { ContactFormData, ContactSubmissionResult } from '../types';

/**
 * Servicio desacoplado para la recepción y envío de consultas de operaciones.
 * Permite conectar fácilmente un webhook (Slack/Discord/n8n), CRM (Hubspot/Pipedrive)
 * o backend API (Next.js / Express / Cloudflare Workers).
 */
export async function submitContactOperation(
  data: ContactFormData
): Promise<ContactSubmissionResult> {
  // Validación preliminar en capa de servicio
  if (!data.nombre?.trim() || !data.empresa?.trim() || !data.correo?.trim() || !data.operacionDetalle?.trim()) {
    return {
      success: false,
      error: 'Por favor complete todos los campos obligatorios para revisar su consulta.'
    };
  }

  // Validación básica de formato de correo
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(data.correo)) {
    return {
      success: false,
      error: 'Por favor ingrese un correo electrónico válido.'
    };
  }

  try {
    // Si existe una variable de entorno con un webhook o endpoint configurado, se invoca:
    const endpoint = import.meta.env.VITE_CONTACT_API_URL;
    if (endpoint) {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ...data,
          submittedAt: new Date().toISOString(),
          origin: window.location.origin
        })
      });

      if (!response.ok) {
        throw new Error(`Error en el servidor (${response.status})`);
      }

      return { success: true };
    }

    // Simulación de red controlada (700ms) para experiencia de usuario realista
    await new Promise((resolve) => setTimeout(resolve, 750));
    
    // Log local informativo para desarrollo
    console.info('[MODOLAR Contact] Consulta operacional recibida con éxito:', {
      empresa: data.empresa,
      contacto: data.nombre,
      correo: data.correo,
      industria: data.industria,
      necesidad: data.necesidad,
      resumenOperacion: data.operacionDetalle.slice(0, 80) + '...'
    });

    return { success: true };
  } catch (err: unknown) {
    console.error('[MODOLAR Contact] Error enviando formulario:', err);
    return {
      success: false,
      error: err instanceof Error ? err.message : 'No fue posible enviar la consulta. Intente nuevamente.'
    };
  }
}
