import React, { createContext, useContext, useState, ReactNode } from 'react';
import { patients, doctors } from '@/data/dummyData';

type UserRole = 'patient' | 'doctor' | null;

interface User {
  id: number;
  name: string;
  email: string;
  role: UserRole;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string, role: UserRole) => boolean;
  register: (name: string, email: string, password: string, role: UserRole) => boolean;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = (email: string, password: string, role: UserRole): boolean => {
    // Dummy authentication - accepts any credentials
    if (email && password && role) {
      const dummyUser: User = {
        id: role === 'patient' ? patients[0].id : doctors[0].id,
        name: role === 'patient' ? patients[0].name : doctors[0].name,
        email: email,
        role: role,
      };
      setUser(dummyUser);
      return true;
    }
    return false;
  };

  const register = (name: string, email: string, password: string, role: UserRole): boolean => {
    // Dummy registration - always succeeds
    if (name && email && password && role) {
      const dummyUser: User = {
        id: Date.now(),
        name: name,
        email: email,
        role: role,
      };
      setUser(dummyUser);
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated: !!user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
