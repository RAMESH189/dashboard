import React, { useEffect, useState } from "react";
// icons
import { GiHamburgerMenu } from "react-icons/gi";
import MenuItem from "./MenuItem";
import { RxDashboard } from "react-icons/rx";
import { IoMdCloudUpload, IoIosNotifications, IoMdClose } from "react-icons/io";
import { MdOutlineEventNote } from "react-icons/md";
import { BsFillCalendar2DateFill } from "react-icons/bs";
import { IoSettingsSharp } from "react-icons/io5";
import { FaFileInvoice } from "react-icons/fa";

export default function SideNav() {
  const [isClosed, setIsClosed] = useState(false);
  const [item, setItem] = useState("Upload");

  const handleNavClick = () => {
    setIsClosed(!isClosed);
  };

  const handleSelect = (item) => {
    setItem(item);
  };

  useEffect(() => {
    if (window.innerWidth < 770) {
      setIsClosed(true);
    } else {
      setIsClosed(false);
    }
  }, []);

  return (
    <>
      {isClosed ? (
        <div className="bg-transparent z-40 p-6 absolute text-gray-500 hover:text-blue-500 hover:scale-125 transition-all duration-200">
          <GiHamburgerMenu onClick={() => handleNavClick()} size={25} />
        </div>
      ) : (
        <div
          className={`h-screen flex-[0.15] z-40 p-6 absolute md:relative min-w-[200px] bg-white shadow-md md:shadow-none rounded-lg md:rounded-none transition duration-500`}
        >
          <div className="flex items-center gap-6 justify-betwen md:justify-center mb-10">
            <img src="/logo.svg" alt="logo" className="w-[80px] md:w-[120px]" />
            <IoMdClose
              size={20}
              className="md:hidden ml-7 text-gray-500 hover:text-red-500 hover:scale-110"
              onClick={() => handleNavClick()}
            />
          </div>
          <div className="flex flex-col gap-2">
            <MenuItem
              Icon={RxDashboard}
              item="Dashboard"
              handleSelect={handleSelect}
              selected={item === "Dashboard"}
            />
            <MenuItem
              Icon={IoMdCloudUpload}
              item="Upload"
              handleSelect={handleSelect}
              selected={item === "Upload"}
            />
            <MenuItem
              Icon={FaFileInvoice}
              item="Invoice"
              handleSelect={handleSelect}
              selected={item === "Invoice"}
            />
            <MenuItem
              Icon={MdOutlineEventNote}
              item="Schedule"
              handleSelect={handleSelect}
              selected={item === "Schedule"}
            />
            <MenuItem
              Icon={BsFillCalendar2DateFill}
              item="Calendar"
              handleSelect={handleSelect}
              selected={item === "Calendar"}
            />
            <MenuItem
              Icon={IoIosNotifications}
              item="Notification"
              handleSelect={handleSelect}
              selected={item === "Notification"}
            />
            <MenuItem
              Icon={IoSettingsSharp}
              item="settings"
              handleSelect={handleSelect}
              selected={item === "settings"}
            />
          </div>
        </div>
      )}
    </>
  );
}
