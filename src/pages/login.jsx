import React from "react";
import GuestOnlyRoute from "src/core/routeblocks/GuestOnlyRoute";
import Splash from "./../images/Splash.png";
import { Link } from 'react-router-dom'

const Login = () => {
	return (
		<GuestOnlyRoute redirect="/dashboard">
			<div className="absolute flex items-start flex-row justify-center relative p-20 w-screen h-screen">
					<div className="relative w-3/12 flex flex-col items-start h-515px">
						<h1 className="relative font-bold text-5xl text-black mt-8">
							Login
							</h1>
						<h1 className="relative left-0 text-sm leading-5 mt-12 min-h-21px">
							Email
							</h1>
						<input type="text" className="relative mt-2 h-42px w-full border-2 border-black rounded-lg p-2 pl-3" placeholder="Kontrakan@gmail.com">
							</input>
						<h1 className="relative font-family-poppins left-0 text-sm leading-5 mt-4 min-h-21px">
							Password
							</h1>
						<input type="password" className="relative mt-2 h-42px w-full border-2 border-black rounded-lg p-2 pl-3" placeholder="Kontrakan@gmail.com">
							</input>
						<button type="button" className="mt-8 w-full h-10 text-white font-bold tracking-wide bg-gradient-to-r from-green-400 to-blue-400 rounded-lg">
							Login
							</button>
						<div className="relative flex items-start flex-row justify-between mt-12 ">
							<div className="font-bold text-xs">
								Don't have an account?
								</div>
							<button type="button" className="text-xs ml-20">
								Forgot password?
								</button>
							</div>
						 
						 <Link to="/signup" className="w-full h-full">
							 <button type="button" className="w-full mt-4 h-10 text-white font-bold tracking-wide bg-gradient-to-r from-gray-600 to-black rounded-lg">
								 Register
								</button>
							</Link>	
							
						 <Link to="/dashboard" className="w-full h-full mt-6">Back</Link>	
					</div>
					<div className="relative w-464px h-532px ml-20 flex flex-col rounded-lg">
						<img src={Splash} alt="Splash" className="w-full h-90px relative ml-38px mt-38px"></img>
				</div>
			</div>
		</GuestOnlyRoute>
	);
}

export default Login;
