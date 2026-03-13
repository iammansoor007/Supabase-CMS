'use client';

import { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [isAdminRoute, setIsAdminRoute] = useState(false);

    useEffect(() => {
        // Only run on client
        if (typeof window !== 'undefined') {
            // Check if we're on an admin route
            setIsAdminRoute(window.location.pathname.startsWith('/admin'));
        }
    }, []);

    useEffect(() => {
        // Only check auth on admin pages and on client
        if (!isAdminRoute || typeof window === 'undefined') {
            setLoading(false);
            return;
        }

        async function checkAuth() {
            try {
                const res = await fetch('/api/auth/me');
                if (res.ok) {
                    const data = await res.json();
                    setUser(data.user);
                }
            } catch (error) {
                console.error('Auth check failed:', error);
            } finally {
                setLoading(false);
            }
        }
        
        checkAuth();
    }, [isAdminRoute]);

    // Don't render anything on server for admin routes
    if (typeof window === 'undefined' && isAdminRoute) {
        return null;
    }

    return (
        <AuthContext.Provider value={{ user, loading, isAdminRoute }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    // Return safe defaults if context doesn't exist or not on client
    if (!context) {
        return { user: null, loading: false, isAdminRoute: false };
    }
    return context;
}