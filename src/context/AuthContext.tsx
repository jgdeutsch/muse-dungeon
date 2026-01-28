"use client";

import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from "react";
import { onAuthStateChanged, signInWithPopup, signOut as fbSignOut, type User } from "firebase/auth";
import { auth, googleProvider } from "@/lib/firebase";

type AuthState = {
  user: User | null;
  loading: boolean;
  signIn: () => Promise<void>;
  signOut: () => Promise<void>;
};

const AuthContext = createContext<AuthState>({
  user: null,
  loading: true,
  signIn: async () => {},
  signOut: async () => {},
});

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => {
      setUser(u);
      setLoading(false);
    });
    return unsub;
  }, []);

  const signIn = useCallback(async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      console.log("Sign-in success:", result.user.displayName);
    } catch (e: unknown) {
      const err = e as { code?: string; message?: string };
      console.error("Sign-in error:", err.code, err.message);
      // If popup blocked, tell the user
      if (err.code === "auth/popup-blocked") {
        alert("Popup was blocked. Please allow popups for this site.");
      }
    }
  }, []);

  const signOut = useCallback(async () => {
    await fbSignOut(auth);
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
