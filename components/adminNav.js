import Button from "@material-tailwind/react/Button";
import Icon from "@material-tailwind/react/Icon";
import NavbarInput from "@material-tailwind/react/NavbarInput";
import Image from "@material-tailwind/react/Image";
import Dropdown from "@material-tailwind/react/Dropdown";
import DropdownItem from "@material-tailwind/react/DropdownItem";
import ProfilePicture from "../assets/img/team-1-800x800.jpg";

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
