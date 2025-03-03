import { createContext, useContext, useEffect, useState } from 'react';
import { supabase } from '../supabaseClient';

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // ✅ Persist session
    const checkUser = async () => {
      try {
        const { data: { session } } = await supabase.auth.getSession();
        if (session) {
          setUser(session.user);
          localStorage.setItem('supabaseSession', JSON.stringify(session)); // Save session
        } else {
          setUser(null);
        }
      } catch (error) {
        console.error('Error checking auth:', error);
      }
      setLoading(false);
    };

    checkUser();

    // ✅ Restore session on refresh
    const storedSession = localStorage.getItem('supabaseSession');
    if (storedSession) {
      setUser(JSON.parse(storedSession).user);
      setLoading(false);
    }

    // Listen for auth state changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user || null);
      if (session) {
        localStorage.setItem('supabaseSession', JSON.stringify(session)); // Update session
      } else {
        localStorage.removeItem('supabaseSession'); // Clear session
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  const value = { user, setUser, loading };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
