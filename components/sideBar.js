import { useState } from "react";
import AdminNavbar from "./adminNav";
import Icon from "@material-tailwind/react/Icon";
import H6 from "@material-tailwind/react/Heading6";
import Link from "next/link";

export default function Sidebar() {
  return (
    <>
      <AdminNavbar />
      <div
        className={`h-screen fixed top-0 md:left-0 overflow-y-auto flex-row flex-nowrap overflow-hidden shadow-xl bg-white w-48 z-10 py-4 px-6 transition-all duration-300`}
      >
        <div className="flex-col items-stretch min-h-full flex-nowrap px-0 relative">
          <a
            href="https://material-tailwind.com?ref=mtd"
            target="_blank"
            rel="noreferrer"
            className="mt-2 w-full inline-block"
          >
            <H6 color="gray">
              Welcome,
              <br />
              Admin
            </H6>
          </a>
          <div className="flex flex-col">
            <hr className="my-4 min-w-full" />

            <ul className="flex-col min-w-full flex list-none">
              <li className="rounded-lg mb-4">
                <Link href="/">
                  <a>
                    <Icon name="dashboard" size="2xl" />
                    <span className="align-top">Dashboard</span>
                  </a>
                </Link>
              </li>
              <li className="rounded-lg mb-2">
                <Link href="/settings">
                  <a>
                    <Icon name="settings" size="2xl" />
                    <span className="align-top">Settings</span>
                  </a>
                </Link>
              </li>
              <li className="rounded-lg mb-2 ">
                <Link href="/tables">
                  <a>
                    <Icon name="toc" size="2xl" />
                    <span className="align-top">Tables</span>
                  </a>
                </Link>
              </li>
              <li className="rounded-lg mb-2 text-gray-700">
                <Link href="/maps">
                  <a>
                    <Icon name="map" size="2xl" />
                    <span className="align-top">Maps</span>
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
