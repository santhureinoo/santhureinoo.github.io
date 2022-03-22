import Table from "../components/table";
import Layout from "../components/layout";

export default function Home() {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
      />
      <Layout
        children={
          <div className="flex-1"> 
              <Table/>
          </div>

        }
      ></Layout>
    </>
  );
}
