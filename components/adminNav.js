export default function AdminNavbar({ showSidebar, setShowSidebar }) {
  return (
    <nav className=" py-6 px-3">
      <div className="container max-w-full mx-auto flex items-center justify-between md:pr-8 md:pl-10">
        <div className="flex justify-between items-center w-full">
          <h4 className="uppercase text-sm tracking-wider mt-1">Equipment</h4>
        </div>
      </div>
    </nav>
  );
}
