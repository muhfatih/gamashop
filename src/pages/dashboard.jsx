import React from 'react'
import UserOnlyRoute from '../core/routeblocks/UserOnlyRoute'
import DashboardLayout from "./../components/_layouts/DashboardLayout";
import Profile from 'src/components/dashboard/Profile'
import Products from 'src/components/dashboard/Products';
import { FaUserCircle } from 'react-icons/fa';
import { useTabs, TabPanel } from "react-headless-tabs"



const Dashboard = () => {
	const tabs = ['Profile', 'Orders', 'Wishlist', 'Setting']
	const [selectedTab, setSelectedTab] = useTabs(tabs);

	return (
		<UserOnlyRoute redirect="/login">
			<DashboardLayout>
				<div className="w-full h-16 bg-gray-100" style={{ boxShadow: 'inset 0px 8px 4px -8px rgba(0, 0, 0, 0.2), inset 0px -8px 4px -8px rgba(0, 0, 0, 0.2)' }}>
					<div className="container grid grid-cols-2 h-full">
						<p className="m-auto font-bold text-3xl whitespace-nowrap">DASHBOARD</p>
						<div className="w-full flex gap-8">
							{tabs.map((item, i) => (
								<div className="flex-cc h-full w-16">
									<button onClick={() => setSelectedTab(item)} className={`hoverMenu ${selectedTab === item ? 'bg-black text-white px-4 py-1 rounded-md' : ''}`} key={i}>{item}</button>
								</div>
							))}
						</div>
					</div>
				</div>

				<div className="px-64 py-16 flex-cs gap-12 h-full">
					<div className="flex-cc col w-1/3 bg-gray-200 p-12 rounded-lg">
						<div className="w-full rounded-full">
							<FaUserCircle className="full text-gray-400" />
						</div>
						<p className="text-3xl font-semibold mt-4">Full Name</p>
						<p className="">fullname@gmail.com</p>

						<button className="flex-cc bg-primary-red w-full h-10 mt-16 text-white text-xl font-bold rounded-md">Logout</button>
					</div>
					<div className="w-2/3">
						<TabPanel hidden={selectedTab !== "Profile"} ><Profile /></TabPanel>
						<TabPanel hidden={selectedTab !== "Orders"}><Products /></TabPanel>
						<TabPanel hidden={selectedTab !== "Wishlist"}><Profile /></TabPanel>
						<TabPanel hidden={selectedTab !== "Setting"}><Profile /></TabPanel>
					</div>
				</div>

			</DashboardLayout>
		</UserOnlyRoute>
	)
}

export default Dashboard
