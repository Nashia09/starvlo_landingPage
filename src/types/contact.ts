export interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  message: string;
}

export interface ContactFormErrors {
  name?: string;
  email?: string;
  message?: string;
  general?: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  address: {
    street: string;
    suite?: string;
    city: string;
    state: string;
    zipCode: string;
  };
}

export interface ContactSubmissionResponse {
  success: boolean;
  message: string;
  id?: string;
}

export type ContactFormStatus = 'idle' | 'submitting' | 'success' | 'error';
