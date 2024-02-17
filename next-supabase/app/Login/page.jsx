'use client'
import React, { useState } from 'react';
import { supabase } from '../auth/supabase';

import Link from 'next/link';

function login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);


    const handleLogin = async () => {
        try {
            setError('')

            if (!email || !password) {
                setError('Email and password are required.');
                return;
            }

            const { user, error } = await supabase.auth.signInWithPassword({
                email,
                password,
            });

            if (error) {
                alert('Error logging in: ' + error.message);
            }
            window.location.href = '/profile';
        }
        catch (error) {
            setError(error.message);
        }

    };
    const handleGithubLogin = async () => {
        try {
            const { error } = await supabase.auth.signInWithOAuth({
                provider: "github"
            });

            if (error) {
                throw error;
            }

        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-green-700 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8 border rounded-md bg-white">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Login in to your account</h2>
                </div>
                <form className="mt-8 space-y-6" >
                    <div className="rounded-md shadow-sm -space-y-px">
                        <div className="mb-10 px-5">
                            <label htmlFor="email-address" className=" text-black">Enter Email address</label>
                            <input
                                id="email-address"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                className="  relative block w-full rounded-md px-3 py-2 border border-black  placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Email address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="px-5">
                            <label htmlFor="password" className=" text-black py-28">Password</label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                required
                                className=" relative block w-full rounded-md px-3 py-2 border border-black placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                    </div>
                    <div>
                        <button
                            onClick={handleLogin}


                            type="submit"
                            className="group relative w-full flex justify-center py-2 px-3 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Log in
                        </button>
                        <button
                            onClick={handleGithubLogin}


                            type="submit"
                            className="group mt-10 relative w-full flex justify-center py-2 px-3 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Log in with github
                        </button>
                    </div>
                </form>
                {error && <p className="mt-2 text-center text-sm text-red-600">{error}</p>}
            </div>


        </div>
    );
}

export default login;