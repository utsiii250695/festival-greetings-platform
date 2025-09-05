import { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

export default function AdminLogin() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Simple password check (we'll improve this later)
    if (password === 'admin123') {
      // Store login status in sessionStorage
      sessionStorage.setItem('adminLoggedIn', 'true');
      router.push('/admin');
    } else {
      setError('Invalid password');
    }
    setLoading(false);
  };

  return (
    <>
      <Head>
        <title>Admin Login - Festival Greetings</title>
      </Head>
      
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          <h1 className="text-2xl font-bold text-center mb-6">Admin Login</h1>
          
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500"
                placeholder="Enter admin password"
                required
              />
            </div>
            
            {error && (
              <div className="mb-4 text-red-600 text-sm">{error}</div>
            )}
            
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-orange-600 text-white py-2 px-4 rounded-lg hover:bg-orange-700 disabled:bg-gray-400 transition-colors"
            >
              {loading ? 'Logging in...' : 'Login'}
            </button>
          </form>
          
          <div className="mt-4 text-sm text-gray-600 text-center">
            Default password: admin123
          </div>
        </div>
      </div>
    </>
  );
}