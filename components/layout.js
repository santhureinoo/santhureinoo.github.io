import OutLetEdit from "../components/outletEdit";
import Sidebar from "../components/sideBar";
import Table from "../components/table";
import React from "react";
import AdminNavbar from "../components/adminNav";

export default function Layout({ children }) {
  return (
    <>
      <Sidebar />
      <div className="flex flex-row">
        <div className="container md:ml-64">
          <AdminNavbar />
          <div className="flex flex-row">{children}</div>
        </div>
      </div>
    </>
  );
}
