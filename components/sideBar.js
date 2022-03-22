import { useState } from "react";
import AdminNavbar from "./adminNav";
import Icon from "@material-tailwind/react/Icon";
import Link from "next/link";

export default function Sidebar() {
  return (
    <>
      <div
        className={`fixed top-0 bottom-0 md:left-0 overflow-y-auto flex-row flex-nowrap overflow-hidden shadow-xl bg-white w-48 z-10 py-4 px-6 transition-all duration-300`}
      >
        <div className="flex-col items-stretch min-h-full flex-nowrap px-0 relative">
          <a
            href="https://material-tailwind.com?ref=mtd"
            target="_blank"
            rel="noreferrer"
            className="mt-2 w-full inline-block"
          >
            <h4 className="text-black mt-3 mb-6">
              <b>Welcome,</b>
              <br /> Admin
            </h4>
          </a>
          <div className="flex flex-col">
            <hr className="my-4 min-w-full" />

            <ul className="flex-col min-w-full flex list-none">
              <li className="rounded-lg mb-4">
                <Link href="/">
                  <a>
                    <Icon name="groups" size="2xl" />
                    <span className="align-top pl-4">Customer</span>
                  </a>
                </Link>
              </li>
              <li className="rounded-lg mb-2">
                <Link href="/settings">
                  <a>
                    <Icon name="work" size="2xl" />
                    <span className="align-top pl-4">Outlet</span>
                  </a>
                </Link>
              </li>
              <li className="rounded-lg mb-2 ">
                <Link href="/tables">
                  <a>
                    <Icon name="handyman" size="2xl" />
                    <span className="align-top pl-4">Equipment</span>
                  </a>
                </Link>
              </li>
              <li className="rounded-lg mb-2">
                <Link href="/maps">
                  <a>
                    <Icon name="person" size="2xl" />
                    <span className="align-top pl-4">Users</span>
                  </a>
                </Link>
              </li>
              <li className="rounded-lg mb-2">
                <Link href="/maps">
                  <a>
                    <Icon name="wallet" size="2xl" />
                    <span className="align-top pl-4">Biling</span>
                  </a>
                </Link>
              </li>
              <li className="rounded-lg mb-2">
                <Link href="/maps">
                  <a>
                    <Icon name="more_horiz" size="2xl" />
                    <span className="align-top pl-4">More Outlet</span>
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
