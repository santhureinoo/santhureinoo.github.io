import Card from "@material-tailwind/react/Card";
import CardBody from "@material-tailwind/react/CardBody";
import Button from "@material-tailwind/react/Button";
import Icon from "@material-tailwind/react/Icon";
import InputIcon from "@material-tailwind/react/InputIcon";
import CardFooter from "@material-tailwind/react/CardFooter";
import Pager from "./pagers";
import OutLetEdit from "./outletEdit";
import React from "react";
import { DummyTableData } from "../common/constant";

export default function Table() {
  const [showOutletDetail, setShowOutletDetail] = React.useState(false);
  function getTableRows() {
    const rows = [];
    for (var i = 0; i < 15; i++) {
      rows.push(<tr>
        <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
          {DummyTableData.EID}
        </th>
        <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
          {DummyTableData.Customer}
        </th>
        <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
          <i className="fas fa-circle fa-sm text-orange-500 mr-2"></i>
          {DummyTableData.Outlet}
        </th>
        <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
          <i className="fas fa-circle fa-sm text-orange-500 mr-2"></i>
          {DummyTableData.EType}
        </th>
        <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
          <i className="fas fa-circle fa-sm text-orange-500 mr-2"></i>
          {DummyTableData.EName}
        </th>
        <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
          <i className="fas fa-circle fa-sm text-orange-500 mr-2"></i>
          {DummyTableData.ValidAsOf}
        </th>
        <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
          <button onClick={(e) => setShowOutletDetail(!showOutletDetail)}  className="bg-grey-light hover:bg-grey text-grey-darkest font-bold py-2 px-4 rounded inline-flex items-center">
          <Icon name={"more_verti"}></Icon>
          </button>
        </th>
      </tr>
      )
    }
    return rows;
  }
  return (
    <>
      <Card>
        <CardBody>
          <div className="overflow-x-auto">
            <div className="flex flex-row justify-between">
              <div className="w-56">
                <InputIcon
                  type="text"
                  color="lightBlue"
                  size="regular"
                  outline={true}
                  placeholder="Search"
                  iconFamily="material-icons"
                  iconName="search"
                />
              </div>

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
            <table className="items-center w-full bg-transparent border-collapse">
              <thead>
                <tr>
                  <th className="px-2 text-gray-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                    Equipment ID
                  </th>
                  <th className="px-2 text-gray-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                    Customer
                  </th>
                  <th className="px-2 text-gray-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                    Outlet
                  </th>
                  <th className="px-2 text-gray-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                    Equipment Type
                  </th>
                  <th className="px-2 text-gray-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                    Equipment Name
                  </th>
                  <th className="px-2 text-gray-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                    Valid as Of
                  </th>
                  <th className="px-2 text-gray-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left"></th>
                </tr>
              </thead>
              <tbody>
                {getTableRows()}
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
      <OutLetEdit setShowOutletDetail={setShowOutletDetail} showOutletDetail={showOutletDetail}></OutLetEdit>
    </>
  );
}
