import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../api/authApi";

export default function LoginPage({ onLoginSuccess }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const { data } = await loginUser({
        username: username.trim().toLowerCase(),
        password,
      });
      onLoginSuccess({ username: data.username, role: data.role });
      navigate("/");
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-black p-4">
      {/* Animated background gradient */}
      <div className="fixed inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent"></div>
      </div>
      
      <div className="relative w-full max-w-md rounded-2xl bg-gray-950/90 backdrop-blur-xl border border-gray-800 shadow-2xl shadow-purple-900/20 p-8 transition-all duration-500 hover:border-gray-700">
        <div className="mb-8 text-center">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-purple-600 to-blue-600 shadow-lg shadow-purple-500/30">
            <svg className="h-7 w-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
          <h1 className="text-3xl font-light tracking-tight bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Welcome Back
          </h1>
          <p className="mt-2 text-sm font-light text-gray-400">
            Sign in to continue your reading journey
          </p>
        </div>

        {error && (
          <div className="mb-6 rounded-xl bg-red-950/50 backdrop-blur-sm border border-red-800/50 px-4 py-3 animate-in slide-in-from-top-2 fade-in duration-300">
            <div className="flex items-center gap-2">
              <svg className="h-4 w-4 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-sm text-red-400 font-light">{error}</span>
            </div>
          </div>
        )}

        <form onSubmit={submit} className="space-y-5">
          <div className="space-y-1.5">
            <label className="block text-sm font-light text-gray-300">
              Username
            </label>
            <div className="relative group">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <svg className="h-4 w-4 text-gray-500 group-focus-within:text-purple-400 transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <input
                className="w-full rounded-xl border border-gray-800 bg-gray-900/50 pl-9 pr-3 py-2.5 text-gray-200 placeholder:text-gray-600 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/30 focus:bg-gray-900 transition-all duration-200"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                autoComplete="username"
                placeholder="Enter your username"
                required
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="block text-sm font-light text-gray-300">
              Password
            </label>
            <div className="relative group">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <svg className="h-4 w-4 text-gray-500 group-focus-within:text-purple-400 transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <input
                type="password"
                className="w-full rounded-xl border border-gray-800 bg-gray-900/50 pl-9 pr-3 py-2.5 text-gray-200 placeholder:text-gray-600 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/30 focus:bg-gray-900 transition-all duration-200"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
                placeholder="Enter your password"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="group relative w-full rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 px-4 py-2.5 font-medium text-white shadow-lg shadow-purple-500/25 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/40 hover:from-purple-700 hover:to-blue-700 active:scale-[0.98]"
          >
            <span className="relative flex items-center justify-center gap-2 text-sm tracking-wide">
              <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
              </svg>
              Sign In
            </span>
          </button>
        </form>

        <div className="mt-6 text-center">
          <Link 
            to="/forgot-password" 
            className="group inline-flex items-center gap-1 text-sm font-light text-gray-400 transition-all duration-200 hover:text-purple-400"
          >
            <span>Forgot password?</span>
            <svg className="h-3 w-3 transition-transform duration-200 group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        <div className="mt-8 pt-6 text-center border-t border-gray-800">
          <p className="text-xs font-light text-gray-500">
            Secure access for library members only
          </p>
        </div>
      </div>
    </div>
  );
}
