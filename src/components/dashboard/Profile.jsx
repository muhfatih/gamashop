import React from "react";
import { useAuth } from "src/core/contexts";

function Profile() {
  const { userData } = useAuth();
  return (
    <div className="w-full flex-sc col gap-8">
      <div className="w-full mb-12">
        <p className="text-5xl">Account Details</p>
        <div className="w-full h-0.5 bg-gray-200"></div>
      </div>

      <div className="w-full">
        <p className="text-lg">Name</p>
        <p className="font-semibold text-xl">{userData.name}</p>
      </div>

      <div className="w-full ">
        <p className="text-lg">Email</p>
        <p className="font-semibold text-xl">{userData.email}</p>
      </div>

      <div className="flex-cc mt-28 gap-4 w-full">
        <button
          style={{ borderWidth: "2px" }}
          className="w-full py-2 font-semibold border-black rounded-lg whitespace-nowrap"
        >
          Edit Profile
        </button>
        <button
          style={{ borderWidth: "2px" }}
          className="w-full py-2 font-semibold border-black rounded-lg whitespace-nowrap"
        >
          Verify Email
        </button>
        <button
          style={{ borderWidth: "2px" }}
          className="w-full py-2 font-semibold border-black rounded-lg whitespace-nowrap"
        >
          Change Password
        </button>
      </div>
    </div>
  );
}

export default Profile;
