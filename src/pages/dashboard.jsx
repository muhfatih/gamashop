import React from "react";
import UserOnlyRoute from "../core/routeblocks/UserOnlyRoute";
import DashboardLayout from "./../components/_layouts/DashboardLayout";
import Profile from "src/components/dashboard/Profile";
import Products from "src/components/dashboard/Products";
import { FaUserCircle } from "react-icons/fa";
import { useTabs, TabPanel } from "react-headless-tabs";
import { useAuth } from "src/core/contexts";

const Dashboard = () => {
  const tabs = ["Profile", "Orders", "Wishlist", "Setting"];
  const [selectedTab, setSelectedTab] = useTabs(tabs);
  const { userData, authMethods } = useAuth();
  console.log(userData);

  return (
    <UserOnlyRoute redirect="/login">
      <DashboardLayout>
        <div
          className="w-full h-16 bg-gray-100"
          style={{
            boxShadow:
              "inset 0px 8px 4px -8px rgba(0, 0, 0, 0.2), inset 0px -8px 4px -8px rgba(0, 0, 0, 0.2)",
          }}
        >
          <div className="container grid grid-cols-2 h-full">
            <p className="m-auto text-3xl font-bold whitespace-nowrap">
              DASHBOARD
            </p>
            <div className="flex gap-8 w-full">
              {tabs.map((item, i) => (
                <div key={i} className="flex-cc w-16 h-full">
                  <button
                    onClick={() => setSelectedTab(item)}
                    className={`hoverMenu ${
                      selectedTab === item
                        ? "bg-black text-white px-4 py-1 rounded-md"
                        : ""
                    }`}
                    key={i}
                  >
                    {item}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex-cs gap-12 px-64 py-16 h-full">
          <div className="flex-cc col p-12 w-1/3 bg-gray-200 rounded-lg">
            <div className="w-full rounded-full">
              <FaUserCircle className="text-gray-400 full" />
            </div>
            <p className="mt-4 text-3xl font-semibold">{userData.name}</p>
            <p className="">{userData.email}</p>

            <button
              onClick={() => authMethods.logout()}
              className="flex-cc mt-16 w-full h-10 text-xl font-bold text-white rounded-md bg-primary-red"
            >
              Logout
            </button>
          </div>
          <div className="w-2/3">
            <TabPanel hidden={selectedTab !== "Profile"}>
              <Profile />
            </TabPanel>
            <TabPanel hidden={selectedTab !== "Orders"}>
              <Products />
            </TabPanel>
            <TabPanel hidden={selectedTab !== "Wishlist"}>
              <Profile />
            </TabPanel>
            <TabPanel hidden={selectedTab !== "Setting"}>
              <Profile />
            </TabPanel>
          </div>
        </div>
      </DashboardLayout>
    </UserOnlyRoute>
  );
};

export default Dashboard;
