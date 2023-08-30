import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from './data/logo.png';
import { loginUser } from './components/Utilities/apiUtils';
import { useStateContext } from './contexts/ContextProvider';

const SignIn = ({ handleSignIn }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {setTokens} = useStateContext();
  
  useEffect(() => {
    navigate("/");
  }, [])

  const handleButtonClick = () => {
    // Perform authentication logic here, e.g., calling an API endpoint
    console.log({
      email: email,
      password: password
    });

    if (email && password) {
      loginUser({
        email: email,
        password: password
      }, (tokens) => {
        setTokens(tokens)
        console.log(tokens);
        handleSignIn();
        navigate("/dashboard")
      })
    } else {
      alert('Invalid email or password. Please try again.');
    }
  };

  return (
    <div className="flex flex-col lg:flex-row h-screen">
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center bg-gray-100">
        <img src={logo} alt="Logo" className="w-44 h-22 mb-4" />
        <div className="p-4 w-5/6 lg:w-3/4 xl:w-2/3 mx-auto">
          <h2 className="text-5xl font-bold mb-2 text-center font-lato">Welcome back</h2>
          <h3 className="text-lg text-gray-500 mb-4 text-center font-lato">Sign into your account</h3>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 font-lato">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="border border-gray-300 bg-white px-2 py-1 w-full rounded-lg font-lato"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block mb-2 font-lato">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="border border-gray-300 bg-white px-2 py-1 w-full rounded-lg font-lato"
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex items-center mb-4">
            <input type="checkbox" id="rememberMe" className="mr-2" />
            <label htmlFor="rememberMe" className="font-lato">Remember me</label>
          </div>
          <button
            className="bg-black text-white py-2 px-4 rounded-lg hover:bg-gray-900 w-full font-lato"
            onClick={handleButtonClick}
          >
            Sign In
          </button>
        </div>
      </div>
      <div className="w-full lg:w-1/2">
        <img
          src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8OHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
          alt="Login"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default SignIn;
