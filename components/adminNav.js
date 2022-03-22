import H6 from "@material-tailwind/react/Heading6";

export default function AdminNavbar({ showSidebar, setShowSidebar }) {
  return (
    <nav className=" py-6 px-3 md:ml-48">
      <div className="container max-w-full mx-auto flex items-center justify-between md:pr-8 md:pl-10">
        <div className="flex justify-between items-center w-full">
          <H6 color="gray"><b>Equipment</b></H6>
        </div>
      </div>
    </nav>
  );
}
