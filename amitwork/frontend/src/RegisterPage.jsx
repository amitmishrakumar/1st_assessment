
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Link } from "react-router-dom";

import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
  event.preventDefault();

  if (!name || !email || !password) {
    alert("❌ All fields are required");
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("❌ Please enter a valid email address");
    return;
  }

  const strongPassword = /^(?=.*[0-9!@#$%^&*])(?=.{6,})/;
  if (!strongPassword.test(password)) {
    alert("❌ Password must be at least 6 char and include at least one number");
    return;
  }

    console.log(name, email, password);
  
  try {
    const result = await fetch('http://localhost:5000/register', {
      method: 'POST',
      body: JSON.stringify({ name, email, password }),
      headers: {
        'Content-Type': 'application/json'
      },
    });

    const data = await result.json();

    console.log(data);

    if (result.ok) {
      alert("✅ Registered successfully!");
      navigate("/login");
    } else {
      alert("❌ Registration failed  / User already exists");
    }
  } catch (error) {
    console.error("Error during registration:", error);
    alert("❌ Something went wrong");
  }
};



  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow w-80">
        <h2 className="text-xl mb-4">Register</h2>
        <input name="name" onChange={(e) => setName(e.target.value)} placeholder="Name" className="w-full border mb-2 p-2" />
        <input name="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="w-full border mb-2 p-2" />
        <input name="password" onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" className="w-full border mb-4 p-2" />
        <button className="w-full bg-blue-500 text-white py-2 rounded">Register</button>
        <p className="mt-4 text-center text-sm">
          Already have an account?{' '}
          <Link to="/login" className="text-blue-600 hover:underline font-medium">
            Login here
          </Link>
        </p>
      </form>

    </div>
  );
};



export default RegisterPage;

