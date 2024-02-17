'use client';
import { useEffect, useState } from 'react';
import { supabase } from '../auth/supabase';
import Link from 'next/link';

export default function Profile() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            const { data, error } = await supabase.auth.getUser();
            if (error) {
                console.error('Error fetching user:', error.message);
                return;
            }
            setUser(data);
        };

        fetchUser();
    }, []);

    const handleLogout = async () => {
        await supabase.auth.signOut();
        window.location.href = '/login';
    };

    return (
        <div>
            <h1>Profile Page</h1>
            {user && (
                <div>
                    <p className="text-white">Email: {user.email}</p>
                    <p>User ID: {user.id}</p>
                </div>
            )}
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
}