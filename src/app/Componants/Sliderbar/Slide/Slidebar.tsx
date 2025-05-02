"use client";

import { useState } from "react";
import Link from "next/link"; // ✅ استيراد Link من next/link
import {
  FaTh,
  FaSuitcase,
  FaCogs,
  FaRegCalendarAlt,
  FaRegBell,
  FaUserCog,
  FaChartBar,
  FaRegFileAlt,
  FaChevronRight,
  FaBars,
} from "react-icons/fa";
import { AiOutlineSetting } from "react-icons/ai";
import Image from "next/image";
import "./Slidebar.css";

export default function Sidebar() {
  const [expanded, setExpanded] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleSidebar = () => {
    setExpanded((prev) => !prev);
  };

  const toggleMobileSidebar = () => {
    setMobileOpen((prev) => !prev);
  };

  return (
    <>
      {/* السايدبار في الشاشات الكبيرة */}
      <div
        className={`h-screen ${
          expanded ? "w-48" : "w-20"
        } bg-white flex-col justify-between py-4 shadow-md transition-all duration-300 rounded-r-2xl hidden md:flex fixed z-40`}
      >
        <div className="flex flex-col items-center justify-start flex-1">
          <div className="flex justify-end w-full pr-2 mb-4">
            <button
              onClick={toggleSidebar}
              className="text-gray-500 hover:text-indigo-500 transition"
            >
              <FaChevronRight
                className={`transform transition-transform ${
                  expanded ? "rotate-180" : ""
                }`}
              />
            </button>
          </div>

          <div className="mb-6 flex items-center justify-center space-x-2">
            <div className="w-10 h-10 rounded-full overflow-hidden">
              <Image
                src="/images/Subtract.svg"
                alt="Logo"
                width={40}
                height={40}
                className="object-cover"
              />
            </div>
            {expanded && <p className="text-xs font-semibold mt-3">Base</p>}
          </div>

          <div className="flex flex-col items-start px-2 space-y-6 text-gray-400 text-xl">
            <Link href="/">
              <div className="icon-item">
                <FaTh />
                {expanded && <span className="text-sm">Dashboard</span>}
              </div>
            </Link>

            {/* ✅ Projects link */}
            <Link href="/dashboard-products" className="icon-item">
              <div className="flex items-center space-x-2">
                <FaSuitcase />
                {expanded && <span className="text-sm">Projects</span>}
              </div>
            </Link>

            <div className="icon-item">
              <FaCogs />
              {expanded && <span className="text-sm">Settings</span>}
            </div>
            <div className="icon-item">
              <FaRegFileAlt />
              {expanded && <span className="text-sm">Reports</span>}
            </div>
            <div className="icon-item">
              <FaRegCalendarAlt />
              {expanded && <span className="text-sm">Calendar</span>}
            </div>
            <div className="icon-item">
              <FaChartBar />
              {expanded && <span className="text-sm">Analytics</span>}
            </div>
            <div className="icon-item">
              <FaRegBell />
              {expanded && <span className="text-sm">Notifications</span>}
            </div>
            <div className="icon-item">
              <AiOutlineSetting />
              {expanded && <span className="text-sm">System</span>}
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-3 px-2">
          <div className="w-10 h-10 rounded-full overflow-hidden bg-pink-100">
            <Image
              src="/images/Subtract.svg"
              alt="Profile"
              width={40}
              height={40}
              className="object-cover"
            />
          </div>
          {expanded && (
            <>
              <span className="text-sm font-semibold">John Doe</span>
              <FaUserCog className="text-gray-400 hover:text-indigo-500 text-xl cursor-pointer" />
            </>
          )}
        </div>
      </div>

      {/* السايدبار في الشاشات الصغيرة */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 bg-white w-48 shadow-md flex flex-col py-4 md:hidden transition-all duration-300 rounded-r-2xl">
          <div className="flex justify-end px-4 mb-4">
            <button
              onClick={toggleMobileSidebar}
              className="text-xl text-gray-500"
            >
              ✕
            </button>
          </div>

          <div className="mb-6 flex items-center justify-center space-x-2">
            <div className="w-10 h-10 rounded-full overflow-hidden">
              <Image
                src="/images/Subtract.svg"
                alt="Logo"
                width={40}
                height={40}
                className="object-cover"
              />
            </div>
            <p className="text-xs font-semibold mt-3">Base</p>
          </div>

          <div className="flex flex-col items-start px-2 space-y-6 text-gray-400 text-xl">
            <div className="icon-item">
              <FaTh />
              <span className="text-sm">Dashboard</span>
            </div>

            {/* ✅ Projects link */}
            <Link href="/dashboard-products" className="icon-item">
              <div className="flex items-center space-x-2">
                <FaSuitcase />
                <span className="text-sm">Projects</span>
              </div>
            </Link>

            <div className="icon-item">
              <FaCogs />
              <span className="text-sm">Settings</span>
            </div>
            <div className="icon-item">
              <FaRegFileAlt />
              <span className="text-sm">Reports</span>
            </div>
            <div className="icon-item">
              <FaRegCalendarAlt />
              <span className="text-sm">Calendar</span>
            </div>
            <div className="icon-item">
              <FaChartBar />
              <span className="text-sm">Analytics</span>
            </div>
            <div className="icon-item">
              <FaRegBell />
              <span className="text-sm">Notifications</span>
            </div>
            <div className="icon-item">
              <AiOutlineSetting />
              <span className="text-sm">System</span>
            </div>
          </div>

          <div className="flex items-center space-x-3 px-4 mt-auto mb-4">
            <div className="w-10 h-10 rounded-full overflow-hidden bg-pink-100">
              <Image
                src="/images/Subtract.svg"
                alt="Profile"
                width={40}
                height={40}
                className="object-cover"
              />
            </div>
            <div>
              <span className="text-sm font-semibold">John Doe</span>
              <div className="flex items-center mt-2">
                <FaUserCog className="text-gray-400 hover:text-indigo-500 text-xl cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="md:hidden fixed top-4 left-4 z-50">
        <button
          onClick={toggleMobileSidebar}
          className="text-2xl text-gray-600 hover:text-indigo-600"
        >
          <FaBars />
        </button>
      </div>
    </>
  );
}
