import React, { useContext, useState, useEffect, createContext } from "react";
import { supabase } from "../libs/client";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }: any) {
  const [user, setUser] = useState<any>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const session: any = supabase.auth.session();

    setUser(session?.user ?? null);
    setLoading(false);

    const { data: listener } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        setUser(session?.user ?? null);
        setLoading(false);
      }
    );

    return () => {
      listener?.unsubscribe();
    };
  }, []);

  const value = {
    signUp: (data: any) => supabase.auth.signUp(data),
    signIn: (data: any) => supabase.auth.signIn(data),
    signOut: () => supabase.auth.signOut(),
    user,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
