import { create } from "zustand"
import { persist } from "zustand/middleware"

// Mock user data - in a real app this would be in a secure database
const MOCK_USERS = [
  {
    id: "1",
    email: "demo@example.com",
    // Password: demo123
    passwordHash: "$2a$10$8Ux7YyXMxz6O6jR7UtR1g.NSZcpJ/YkPH.g/Jh1h.z3IXx8ZUxXy2",
    name: "Demo User",
  },
]

interface User {
  id: string
  email: string
  name: string
}

interface AuthState {
  user: User | null
  isLoading: boolean
  signIn: (email: string, password: string) => Promise<void>
  signOut: () => void
}

export const useAuth = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      isLoading: false,
      signIn: async (email: string, password: string) => {
        set({ isLoading: true })
        
        // Simulate network delay
        await new Promise((resolve) => setTimeout(resolve, 1000))
        
        const user = MOCK_USERS.find((u) => u.email === email)
        
        if (!user || password !== "demo123") {
          set({ isLoading: false })
          throw new Error("Invalid credentials")
        }
        
        const { passwordHash, ...userData } = user
        set({ user: userData, isLoading: false })
      },
      signOut: () => {
        set({ user: null })
      },
    }),
    {
      name: "auth-storage",
    }
  )
)