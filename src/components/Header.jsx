import React from "react";
import shoppy from "../assets/images/downloadNotion-removebg.png";
import { NavLink } from "react-router-dom";
const Header = (props) => {
	// console.log('header : ', props.data[0]);
	return (
		<>
			<div className="flex flex-row p-4 right-0 relative text-lg w-full h-16 text-white  drop-shadow-xl backdrop-blur-sm text-center justify-between ">
				<div className="flex gap-3 text-xl text-white">
					<img src={shoppy} alt="logo" className="w-8 h-8" />
					<p className="font-semibold">Dashtoon </p>
				</div>
				<div className="flex flex-row gap-6">
					<div>
						{/* <div className="relative">
							<div className="text-white font-thin px-4	 rounded-lg shadow-2xl">
								Transition
							</div>
							<div className="absolute top-0 right-0 -mr-1 -mt-1 w-4 h-4 rounded-full bg-blue-700 animate-ping"></div>
							<div className="absolute top-0 right-0 -mr-1 -mt-1 w-4 h-4 rounded-full bg-blue-700"></div>
						</div> */}
					</div>
					<div className="flex flex-row gap-2">
						<div>
							<NavLink to="/about">About</NavLink>
						</div>
						<NavLink to="/">
							<div className="relative">
								<div className="text-white font-thin px-4	 rounded-lg shadow-2xl">
									<img src={shoppy} alt="logo" className="w-8 h-8" />
								</div>
								{/* <div
									className={`absolute top-0 right-0 -mr-1 -mt-2 w-6 h-6  rounded-full bg-red-500  ${
										props.data.length !== 0 ? `animate-ping` : ``
									}`}
								></div>
								<div className="absolute top-0 right-0 -mr-1 -mt-2 w-6 h-6 rounded-full text-center text-sm bg-red-500">
									{props.data.length}
								</div> */}
							</div>
						</NavLink>
					</div>
				</div>
			</div>
		</>
	);
};

export default Header;