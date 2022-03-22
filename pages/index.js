import OutLetEdit from "../components/outletEdit";
import Sidebar from "../components/sideBar";
import Table from "../components/table";
import React from "react";
import Layout from "../components/layout";

export default function Home() {
  const [showOutletDetail, setShowOutletDetail] = React.useState(false);
  return (
    <>
      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
      />
      <Layout
        children={[
          <Table
            setShowOutletDetail={setShowOutletDetail}
            showOutletDetail={showOutletDetail}
          />,
          <OutLetEdit showOutletDetail={showOutletDetail} setShowOutletDetail={setShowOutletDetail} />,
        ]}
      ></Layout>
    </>
  );
}
