"use client"

import React from 'react';
import axios from 'axios';
import Link from 'next/link';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';

export default function ProfilePage() {
    const router = useRouter();
    const logout = async () =>{
        try {
            await axios.get("/api/users/logout");
            toast.success("Logout successful");
            router.push("/login");
        } catch (error: any) {
            console.log(error.message);
            toast.error(error.message)
        }
    }
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2 text-blue-700">
            <h1>Profile</h1>
            <hr />
            <p>Profile Page</p>
            <hr />
            <button onClick={logout} className='bg-blue-500 mt-4 hover:bg-blue-700 font-bold py-2 px-4 rounded text-white'>Logout</button>
        </div>
    );
}
