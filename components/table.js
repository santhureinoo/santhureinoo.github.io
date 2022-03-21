import Card from "@material-tailwind/react/Card";
import CardHeader from "@material-tailwind/react/CardHeader";
import CardBody from "@material-tailwind/react/CardBody";
import Button from "@material-tailwind/react/Button";
import Image from "@material-tailwind/react/Image";
import Progress from "@material-tailwind/react/Progress";
import Icon from "@material-tailwind/react/Icon";
import InputIcon from "@material-tailwind/react/InputIcon";
import Dropdown from "@material-tailwind/react/Dropdown";
import DropdownItem from "@material-tailwind/react/DropdownItem";
import DropdownLink from "@material-tailwind/react/DropdownLink";
import CardFooter from "@material-tailwind/react/CardFooter";
import Label from "@material-tailwind/react/Label";
import Team1 from "../assets/img/team-1-800x800.jpg";
import Team2 from "../assets/img/team-2-800x800.jpg";
import Team3 from "../assets/img/team-3-800x800.jpg";
import Team4 from "../assets/img/team-4-470x470.png";
import Pager from "./pagers";

export default function Table({ setShowOutletDetail, showOutletDetail }) {
  return (
    <>
      <Card>
        <CardBody>
          <div className="overflow-x-auto">
            <div className="flex flex-row gap-x-60 justify-between">
              <InputIcon
                type="text"
                color="lightBlue"
                size="regular"
                outline={true}
                placeholder="Search"
                iconFamily="material-icons"
                iconName="search"
              />
              <div className="flex flex-row justify-evenly">
                <Button
                  color="lightBlue"
                  buttonType="filled"
                  size="regular"
                  rounded={false}
                  block={false}
                  iconOnly={false}
                  ripple="light"
                  onClick={(e) => setShowOutletDetail(!showOutletDetail)}
                >
                  <Icon name="add" />
                  Add New Equipment
                </Button>
              </div>
            </div>
            <table className="items-center w-full bg-transparent border-collapse">
              <thead>
                <tr>
                  <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                    Project
                  </th>
                  <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                    Budget
                  </th>
                  <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                    Status
                  </th>
                  <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left"></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                    Argon Design System
                  </th>
                  <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                    $2,500 USD
                  </th>
                  <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                    <i className="fas fa-circle fa-sm text-orange-500 mr-2"></i>{" "}
                    pending
                  </th>
                  <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                    <Button
                      buttonType="link"
                      size="sm"
                      ripple="dark"
                      onClick={(e) => setShowOutletDetail(!showOutletDetail)}
                    >
                      <Icon name={"menu"}></Icon>
                    </Button>
                  </th>
                </tr>
                <tr>
                  <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                    Black Dashboard Sketch
                  </th>
                  <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                    $1,800 USD
                  </th>
                  <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                    <i className="fas fa-circle fa-sm text-blue-gray-900 mr-2"></i>{" "}
                    completed
                  </th>

                  <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                    <Button
                      buttonType="link"
                      size="sm"
                      ripple="dark"
                      onClick={(e) => setShowOutletDetail(!showOutletDetail)}
                    >
                      <Icon name={"menu"}></Icon>
                    </Button>
                  </th>
                </tr>
                <tr>
                  <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                    React Material Dashboard
                  </th>
                  <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                    $4,400 USD
                  </th>
                  <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                    <i className="fas fa-circle fa-sm text-teal-500 mr-2"></i>{" "}
                    on schedule
                  </th>
                  <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                    <Button
                      buttonType="link"
                      size="sm"
                      ripple="dark"
                      onClick={(e) => setShowOutletDetail(!showOutletDetail)}
                    >
                      <Icon name={"menu"}></Icon>
                    </Button>
                  </th>
                </tr>
                <tr>
                  <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                    React Material Dashboard
                  </th>
                  <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                    $2,200 USD
                  </th>
                  <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                    <i className="fas fa-circle fa-sm text-blue-gray-900 mr-2"></i>{" "}
                    completed
                  </th>
                  <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                    <Button
                      buttonType="link"
                      size="sm"
                      ripple="dark"
                      onClick={(e) => setShowOutletDetail(!showOutletDetail)}
                    >
                      <Icon name={"menu"}></Icon>
                    </Button>
                  </th>
                </tr>
              </tbody>
            </table>
          </div>
        </CardBody>
        <CardFooter>
          <div className="flex justify-end">
            <Pager />
          </div>
        </CardFooter>
      </Card>
    </>
  );
}
