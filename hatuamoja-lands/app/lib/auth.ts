// Simplified authentication for demo purposes

export interface User {
  id: string
  email: string
  name: string
  role: 'admin' | 'editor'
}

const DEMO_ADMIN_USER: User = {
  id: '1',
  email: 'admin@hatuamoja.co.ke',
  name: 'Admin User',
  role: 'admin'
}

export function authenticate(email: string, password: string): User | null {
  // Demo authentication - in production, connect to your auth system
  if (email === 'admin@hatuamoja.co.ke' && password === 'admin123') {
    return DEMO_ADMIN_USER
  }
  return null
}

export function isAuthenticated(): boolean {
  // Check if user is logged in (demo)
  if (typeof window !== 'undefined') {
    return localStorage.getItem('admin-authenticated') === 'true'
  }
  return false
}

export function logout() {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('admin-authenticated')
    localStorage.removeItem('admin-user')
  }
}