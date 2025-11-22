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
        <div className="w-[14%]  md:w-[8%] lg:w-[16%] xl:w-[14%] p-5 overflow-auto">

          <Link href={"/"} className="flex items-center justify-center gap-2">
          <Image src="/taughtlevel.png" width={100} height={100} alt="taughtlevel Logo"/>
          </Link>

          <Menu />
        </div>

        {/* RIGHT */}
        <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%]  py-5 bg-[#f7f8fa] overflow-auto">
          <Navbar />
          {children}</div>
      </div>
    </html>
  );
}
