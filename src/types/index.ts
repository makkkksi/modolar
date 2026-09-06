export type IndustryOption =
  | 'Logística / Fulfillment'
  | 'Producción / Manufactura'
  | 'E-commerce'
  | 'Distribución'
  | 'Retail'
  | 'Otra';

export type NeedOption =
  | 'Conectar sistemas'
  | 'Automatizar un proceso'
  | 'Adaptar un ERP'
  | 'Desarrollar una herramienta interna'
  | 'Revisar una operación / proceso'
  | 'No estoy seguro todavía'
  | 'Otro';

export interface ContactFormData {
  nombre: string;
  empresa: string;
  cargo?: string;
  correo: string;
  telefono?: string;
  industria: IndustryOption | '';
  sistemasActuales?: string;
  necesidad: NeedOption | '';
  operacionDetalle: string;
}

export type FormStatus = 'idle' | 'loading' | 'validation_error' | 'server_error' | 'success';

export interface ContactSubmissionResult {
  success: boolean;
  message?: string;
  error?: string;
}
