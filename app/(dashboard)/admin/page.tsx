import UserCards from "@/app/components/UserCards";
import React from "react";

const AdminPage = () => {
  return (
    <div className="p-4 flex flex-col justify-between bg-amber-600 w-full gap-4 md:flex-row">
      {/* LEFT */}
      <div className="w-full lg:w-2/3">
        {/* USER CARDS */}
        <div className="flex justify-between flex-wrap gap-4">
          <UserCards type="student" />
          <UserCards type="teacher" />
          <UserCards type="parent" />
          <UserCards type="staff" />
        </div>
      </div>
      {/* RIGHT */}
      <div className="w-full lg:w-1/3">Right</div>
    </div>
  );
};

export default AdminPage;
