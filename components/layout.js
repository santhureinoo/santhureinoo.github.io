import OutLetEdit from "../components/outletEdit";
import Sidebar from "../components/sideBar";
import Table from "../components/table";
import React from "react";
import AdminNavbar from "../components/adminNav";

export default function Layout({ children }) {
  return (
    <>
      <Sidebar />
      <div className="container max-w-full flex  md:ml-48">
        {children}
      </div>
    </>
  );
}
