// // HomePage.jsx
// const HomePage = () => {
//     return (
//         <div className="flex flex-col items-center justify-center h-screen bg-green-100">
//             <h1 className="text-3xl font-bold text-green-700 mb-4">🎉 Welcome to the
//                 Websphere solution private limited</h1>
//             <p className="text-gray-700">You have successfully logged in.</p>
//         </div>
//     );
// };

// export default HomePage;



// HomePage.jsx
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    alert("👋 Logged out successfully");
    navigate("/"); 
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-green-100">
      <h1 className="text-3xl font-bold text-green-700 mb-4">
        🎉 Welcome to the Websphere Solution Private Limited!
      </h1>

      <button
        onClick={handleLogout}
        className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
      >
        Logout
      </button>
    </div>
  );
};

export default HomePage;
