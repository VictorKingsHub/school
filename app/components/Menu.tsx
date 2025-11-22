import { CgProfile } from "react-icons/cg";
import { CiCalendar, CiSettings } from "react-icons/ci";
import { FaChalkboardTeacher } from "react-icons/fa";
import { GiLightningFrequency } from "react-icons/gi";
import { IoBookOutline, IoHomeOutline } from "react-icons/io5";
import { LuMessageSquareText } from "react-icons/lu";
import { MdFlightClass, MdOutlineAssignment } from "react-icons/md";
import { PiExamLight, PiStudentThin } from "react-icons/pi";
import { RiLogoutCircleLine, RiParentLine } from "react-icons/ri";
import { RxResume } from "react-icons/rx";
import { SiFuturelearn } from "react-icons/si";
import { TfiAnnouncement } from "react-icons/tfi";
import Image from "next/image";

const menuItems = [
  {
    title: "MENU",
    items: [
      {
        icon: <IoHomeOutline />,
        label: "Home",
        href: "/",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: <FaChalkboardTeacher />,
        label: "Teachers",
        href: "/list/teachers",
        visible: ["admin", "teacher"],
      },
      {
        icon: <PiStudentThin />,
        label: "Students",
        href: "/list/students",
        visible: ["admin", "teacher"],
      },
      {
        icon: <RiParentLine />,
        label: "Parents",
        href: "/list/parents",
        visible: ["admin", "teacher"],
      },
      {
        icon: <IoBookOutline />,
        label: "Subjects",
        href: "/list/subjects",
        visible: ["admin"],
      },
      {
        icon: <MdFlightClass />,
        label: "Classes",
        href: "/list/classes",
        visible: ["admin", "teacher"],
      },
      {
        icon: <SiFuturelearn />,
        label: "Lessons",
        href: "/list/lessons",
        visible: ["admin", "teacher"],
      },
      {
        icon: <PiExamLight />,
        label: "Exams",
        href: "/list/exams",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: <MdOutlineAssignment />,
        label: "Assignments",
        href: "/list/assignments",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: <RxResume />,
        label: "Results",
        href: "/list/results",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: <GiLightningFrequency />,
        label: "Attendance",
        href: "/list/attendance",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: <CiCalendar />,
        label: "Events",
        href: "/list/events",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: <LuMessageSquareText />,
        label: "Messages",
        href: "/list/messages",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: <TfiAnnouncement />,
        label: "Announcements",
        href: "/list/announcements",
        visible: ["admin", "teacher", "student", "parent"],
      },
    ],
  },
  {
    title: "OTHER",
    items: [
      {
        icon: <CgProfile />,
        label: "Profile",
        href: "/profile",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: <CiSettings />,
        label: "Settings",
        href: "/settings",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: <RiLogoutCircleLine />,
        label: "Logout",
        href: "/logout",
        visible: ["admin", "teacher", "student", "parent"],
      },
    ],
  },
];

import React from "react";
import Link from "next/link";

const Menu = () => {
  return (
    <div>
      {menuItems.map((item) => (
        <div key={item.title} className="flex flex-col gap-2">
          <span className=" hidden lg:block text-gray-400 font-light my-4">
            {item.title}
          </span>
          {item.items.map((item) => (
            <Link
              href={item.href}
              key={item.label}
              className="flex flex-row items-center justify-center lg:justify-start gap-4 text-gray-500 py-1"
            >
              <span> {item.icon}</span>
              <span>{item.label}</span>
            </Link>
          ))}
        </div>
      ))}
      <h1>Menu</h1>
    </div>
  );
};

export default Menu;
