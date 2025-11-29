import Link from "next/link";
import Image from "next/image"
import Menu from "../components/Menu";
import Navbar from "../components/Navbar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <div className="h-screen flex ">
        {/* LEFT */}
        <div className="w-[15%]  md:w-[15%] lg:w-[15%] p-5 overflow-auto">

          <Link href={"/"} className="flex items-center justify-center gap-2">
          <Image src="/taughtlevel.png" width={100} height={100} alt="taughtlevel Logo"/>
          </Link>

          <Menu />
        </div>

        {/* RIGHT */}
        <div className="w-[85%] md:w-[85%] lg:w-[85%]  py-5 bg-[#f7f8fa] overflow-auto px-3 flex flex-col gap-2">
          <Navbar />
          {children}</div>
      </div>
    </html>
  );
}
