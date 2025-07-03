
// googal 
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
//
// src/LoginPage.jsx
import { useState } from 'react';
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("❌ All fields are required");
      return;
    }

    try {
      const res = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      });

      const data = await res.json();

      if (res.ok) {
        alert("✅ Login successful!");
        // you can redirect here
      } else {
        alert("❌ " + (data.message || "Login failed"));
      }
    } catch (err) {
      console.error(err);
      alert("❌ Error occurred");
    }


  };

  // googal 
  const handleGoogleLogin = async (googleUser) => {
    const { name, email } = googleUser;
    console.log(email);
    try {
      const res = await fetch('http://localhost:5000/auth/google', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email }),
      });
      // const data = await res.json();
      // console.log(data);
      if (res.ok) {
        alert("✅ Google login successful");
      } else {
        alert("❌ Login failed");
      }
    } catch (err) {
      console.error(err);
      alert("❌ Error during Google Login");
    }
  };

  //googal          .................
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form onSubmit={handleLogin} className="bg-white p-6 rounded shadow w-80">
        <h2 className="text-xl mb-4 font-semibold">Login</h2>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border p-2 mb-2"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border p-2 mb-4"
        />

        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded">
          Login
        </button>

        {/* OR Divider */}
        <div className="text-center my-4 text-gray-500">OR</div>

        {/* ✅ Google Login Button */}
        <div className="flex justify-center">
          <GoogleLogin
            onSuccess={(credentialResponse) => {
              const decoded = jwtDecode(credentialResponse.credential);
              handleGoogleLogin(decoded);
            }}
            onError={() => {
              alert("❌ Google Sign-In Failed");
            }}
          />
        </div>

        <p className="mt-4 text-center text-sm">
          Don't have an account?{' '}
          <Link to="/register" className="text-blue-600 hover:underline">Register here</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;




