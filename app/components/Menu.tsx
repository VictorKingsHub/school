import Link from "next/link";
import { role } from "../lib/data";

// Icons
import { IoHomeOutline, IoStatsChart, IoSettingsOutline, IoChevronForwardOutline } from "react-icons/io5";
import { FaChalkboardTeacher } from "react-icons/fa";
import { PiStudentBold } from "react-icons/pi";
import { MdFamilyRestroom, MdOutlineSubject, MdClass, MdOutlineQuiz, MdAssignment, MdEmojiEvents, MdMessage, MdCampaign, MdLogout } from "react-icons/md";
import { BsCalendarEvent } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";

const menuItems = [
  {
    title: "MENU",
    items: [
      {
        icon: <IoHomeOutline size={20} />,
        label: "Home",
        href: "/",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: <FaChalkboardTeacher size={20} />,
        label: "Teachers",
        href: "/list/teachers",
        visible: ["admin", "teacher"],
      },
      {
        icon: <PiStudentBold size={20} />,
        label: "Students",
        href: "/list/students",
        visible: ["admin", "teacher"],
      },
      {
        icon: <MdFamilyRestroom size={20} />,
        label: "Parents",
        href: "/list/parents",
        visible: ["admin", "teacher"],
      },
      {
        icon: <MdOutlineSubject size={20} />,
        label: "Subjects",
        href: "/list/subjects",
        visible: ["admin"],
      },
      {
        icon: <MdClass size={20} />,
        label: "Classes",
        href: "/list/classes",
        visible: ["admin", "teacher"],
      },
      // {
      //   icon: <GiNotebook size={20} />,
      //   label: "Lessons",
      //   href: "/list/lessons",
      //   visible: ["admin", "teacher"],
      // },
      {
        icon: <MdOutlineQuiz size={20} />,
        label: "Exams",
        href: "/list/exams",
        visible: ["admin", "teacher", "student", "parent"],
      },
      // {
      //   icon: <MdAssignment size={20} />,
      //   label: "Assignments",
      //   href: "/list/assignments",
      //   visible: ["admin", "teacher", "student", "parent"],
      // },
      {
        icon: <IoStatsChart size={20} />,
        label: "Results",
        href: "/list/results",
        visible: ["admin", "teacher", "student", "parent"],
      },
      // {
      //   icon: <MdEmojiEvents size={20} />,
      //   label: "Attendance",
      //   href: "/list/attendance",
      //   visible: ["admin", "teacher", "student", "parent"],
      // },
      // {
      //   icon: <BsCalendarEvent size={20} />,
      //   label: "Events",
      //   href: "/list/events",
      //   visible: ["admin", "teacher", "student", "parent"],
      // },
      // {
      //   icon: <MdMessage size={20} />,
      //   label: "Messages",
      //   href: "/list/messages",
      //   visible: ["admin", "teacher", "student", "parent"],
      // },
      {
        icon: <MdCampaign size={20} />,
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
        icon: <CgProfile size={20} />,
        label: "Profile",
        href: "/profile",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: <IoSettingsOutline size={20} />,
        label: "Settings",
        href: "/settings",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: <MdLogout size={20} />,
        label: "Logout",
        href: "/logout",
        visible: ["admin", "teacher", "student", "parent"],
      },
    ],
  },
];

const Menu = () => {
  return (
    <div className="mt-4 text-sm">
      {menuItems.map((i) => (
        <div className="flex flex-col gap-2" key={i.title}>
          <span className="hidden lg:block text-gray-900 font-light mt-4">
            {i.title}
          </span>

          {i.items.map((item) => {
            if (item.visible.includes(role)) {
              return (
                <Link
                  href={item.href}
                  key={item.label}
                  className="
                    group
                    flex items-center justify-between 
                    lg:justify-start
                    gap-4 text-gray-500 
                    py-2 md:px-2 
                    rounded-md 
                    hover:bg-lamaSkyLight
                    transition-colors
                  "
                >
                  {/* Left Section */}
                  <div className="flex items-center gap-4">
                    {item.icon}
                    <span className="hidden lg:block">{item.label}</span>
                  </div>

                  {/* Hover Arrow */}
                  <IoChevronForwardOutline
                    size={18}
                    className="
                      hidden lg:block 
                      opacity-0 
                      translate-x-2
                      group-hover:opacity-100 
                      group-hover:translate-x-0 
                      transition-all duration-300
                      text-gray-400
                    "
                  />
                </Link>
              );
            }
          })}
        </div>
      ))}
    </div>
  );
};

export default Menu;
