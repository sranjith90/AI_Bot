/**
 * API service layer – central place for all HTTP calls.
 *
 * Usage:
 *   import { apiClient } from "@/services/api";
 *   const data = await apiClient.get<MyType>("/endpoint");
 *
 * For .NET backend integration:
 *   1. Set VITE_API_BASE_URL in your .env file pointing to the .NET server.
 *   2. Adjust the auth header logic below to use your token strategy (JWT, etc.).
 */

const BASE_URL = import.meta.env.VITE_API_BASE_URL ?? "/api";

/** Generic response wrapper */
export interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
}

/** Contact form payload */
export interface ContactPayload {
  name: string;
  email: string;
  company?: string;
  message: string;
}

/** Lead / demo request payload */
export interface DemoRequestPayload {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  useCase?: string;
}

/**
 * Core HTTP client.
 * Automatically attaches JSON headers and handles errors uniformly.
 */
async function request<T>(
  method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH",
  endpoint: string,
  body?: unknown
): Promise<T> {
  const headers: HeadersInit = {
    "Content-Type": "application/json",
    Accept: "application/json",
    // Add your auth header here when integrating with .NET:
    // Authorization: `Bearer ${getToken()}`,
  };

  const response = await fetch(`${BASE_URL}${endpoint}`, {
    method,
    headers,
    body: body ? JSON.stringify(body) : undefined,
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`API Error ${response.status}: ${errorText}`);
  }

  return response.json() as Promise<T>;
}

/** Exported API client with typed methods */
export const apiClient = {
  /** GET request */
  get: <T>(endpoint: string) => request<T>("GET", endpoint),

  /** POST request */
  post: <T>(endpoint: string, body: unknown) => request<T>("POST", endpoint, body),

  /** PUT request */
  put: <T>(endpoint: string, body: unknown) => request<T>("PUT", endpoint, body),

  /** PATCH request */
  patch: <T>(endpoint: string, body: unknown) => request<T>("PATCH", endpoint, body),

  /** DELETE request */
  delete: <T>(endpoint: string) => request<T>("DELETE", endpoint),
};

/** Contact form service */
export const contactService = {
  /** Send a contact form submission */
  sendMessage: (payload: ContactPayload) =>
    apiClient.post<ApiResponse<null>>("/contact", payload),
};

/** Demo / lead service */
export const demoService = {
  /** Request a product demo */
  requestDemo: (payload: DemoRequestPayload) =>
    apiClient.post<ApiResponse<null>>("/demo", payload),
};
