"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";

export default function LoginPage() {
  const router = useRouter();
  const [user, setUser] = React.useState({
    email: "",
    password: "",
  });

  const [buttonDisabled, setButttonDisabled] = React.useState(false);

  const [loading, setLoading] = React.useState(false);

  const onLogin = async () => {
    try {
      setLoading(true);
      const response = await axios.post("/api/users/login", user);
      console.log("Login success", response.data);
      toast.success("Login success")
      router.push("/profile");
    } catch (error: any) {
      console.log("Login failed", error.message);
      toast.error(error.message);
      
    } finally {
      setLoading(false);
    }
  };

  useEffect(() =>{
    if (
      user.email.length > 0 &&
      user.password.length > 0
    ) {
      setButttonDisabled(false)
    } else {
      setButttonDisabled(true)
    }
  }, [user])

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1>{loading ? "Processing..." : "Login"}</h1>
      <hr />

      <label htmlFor="email">email</label>
      <input
      className="p-2 border border-black rounded-xl"
        id="email"
        type="text"
        placeholder="email"
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
      />
      <label htmlFor="password">password</label>
      <input
      className="p-2 border border-black rounded-xl"
        id="password"
        type="text"
        placeholder="password"
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
      />
      <button onClick={onLogin} className="border border-gray-500 p-2 rounded-lg my-4 focus:outline-none focus:border-black" type="submit">Login</button>
      <Link href="/signup">Visit signup page</Link>
    </div>
  );
}
