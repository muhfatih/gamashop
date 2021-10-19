import React from "react";
import GuestOnlyRoute from "src/core/routeblocks/GuestOnlyRoute";
import Splash from "./../images/Splash.png";
import { Link } from 'react-router-dom'

const Login = () => {
	return (
		<GuestOnlyRoute redirect="/dashboard">
			<div className="flex items-start flex-row justify-center relative p-20 w-screen h-screen">
					<div className="w-3/12 h-515px flex flex-col items-start">
						<h1 className="font-bold text-5xl text-black mt-8">
							Login
							</h1>
						<h1 className="text-sm mt-12">
							Email
							</h1>
						<input type="text" className="mt-2 w-full border-2 border-black rounded-lg p-2 pl-3" placeholder="Masukkan Email">
							</input>
						<h1 className="text-sm mt-4">
							Password
							</h1>
						<input type="password" className="mt-2 h-42px w-full border-2 border-black rounded-lg p-2 pl-3" placeholder="Masukkan Password">
							</input>
						<button type="button" className="mt-8 w-full h-10 transition ease-in-out duration-700 hover:-translate-y-1 hover:shadow-xl transform  text-white font-bold tracking-wide bg-gradient-to-r from-green-400 to-blue-400 rounded-lg">
							Login
							</button>
						<div className="flex items-start flex-row justify-between mt-8 full">
							<div className="font-bold text-xs">
								Don't have an account?
								</div>
							<button type="button" className="text-xs">
								Forgot password?
								</button>
							</div>
						<Link to="/signup" className="full"> 
						<button type="button" className="w-full mt-6 h-10 transition ease-in-out duration-700 hover:-translate-y-1 hover:shadow-xl text-white font-bold tracking-wide bg-gradient-to-r from-gray-600 to-black rounded-lg">
								<p>Register</p>
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
