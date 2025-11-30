"use client";

import dynamic from "next/dynamic";
import React, { JSX, useState } from "react";
import { IoCloseOutline} from "react-icons/io5";
import { RiDeleteBin5Line } from "react-icons/ri";

// LAZY LOADING
const TeacherForm = dynamic(() => import("./forms/TeacherForm"), {
  loading: () => <h1>Loading...</h1>,
});
const StudentForm = dynamic(() => import("./forms/StudentForm"), {
  loading: () => <h1>Loading...</h1>,
});

// FORM MAP
const forms: {
  [key: string]: (type: "create" | "update",  data?: unknown) => JSX.Element;
} = {
  teacher: (type, data) => <TeacherForm type={type} data={data} />,
  student: (type, data) => <StudentForm type={type} data={data} />,
};

const FormModal = ({
  table,
  type,
  data,
  id,
}: {
  table:
    | "teacher"
    | "student"
    | "parent"
    | "subject"
    | "class"
    | "lesson"
    | "exam"
    | "assignment"
    | "result"
    | "attendance"
    | "event"
    | "announcement";
  type: "create" | "update" | "delete";
  data?: unknown;
  id?: number;
}) => {
  const size = type === "create" ? "w-8 h-8" : "w-7 h-7";
  const bgColor =
    type === "create"
      ? "bg-lamaYellow"
      : type === "update"
      ? "bg-lamaSky"
      : "bg-lamaPurple";

  const [open, setOpen] = useState(false);

  // 🔥 Normal function that returns JSX
  const renderForm = () => {
    if (type === "delete" && id) {
      return (
        <form className="p-4 flex flex-col gap-4">
          <span className="text-center font-medium">
            All data will be lost. Are you sure you want to delete this {table}?
          </span>
          <button className="bg-red-700 text-white py-2 px-4 rounded-md border-none w-max self-center">
            Delete

          </button>
        </form>
      );
    }

    if (type === "create" || type === "update") {
      return forms[table]?.(type, data) ?? (
        <p className="text-center">Form not found!</p>
      );
    }

    return <p className="text-center">Form not found!</p>;
  };

  return (
    <>
      <button
        className={`${size} flex items-center justify-center rounded-full ${bgColor}`}
        onClick={() => setOpen(true)}
      >
        <RiDeleteBin5Line />

      </button>

      {/* MODAL OVERLAY */}
      {open && (
        <div className="w-screen h-screen fixed left-0 top-0 bg-black bg-opacity-60 z-50 flex items-center justify-center">
          <div className="bg-white p-4 rounded-md relative w-[90%] md:w-[70%] lg:w-[60%] xl:w-[50%] 2xl:w-[40%]">
            {renderForm()}

            {/* CLOSE BUTTON */}
            <div
              className="absolute top-4 right-4 cursor-pointer"
              onClick={() => setOpen(false)}
            >
              <IoCloseOutline />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FormModal;
