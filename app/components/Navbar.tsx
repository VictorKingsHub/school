import { CgProfile } from "react-icons/cg"
import { GrAnnounce } from "react-icons/gr"
import { IoSearch } from "react-icons/io5"
import { LuMessageCircleMore } from "react-icons/lu"

const Navbar = () => {
  return (
    <div className='flex items-center justify-between p-4'>
      {/* SEARCH BAR */}
      <div className='hidden md:flex items-center gap-2 text-xs rounded-full ring-[1.5px] ring-gray-300 px-2'>
        <IoSearch />
        <input type="text" placeholder="Search..." className="w-[200px] p-2 bg-transparent outline-none"/>
      </div>
      {/* ICONS AND USER */}
      <div className='flex items-center gap-6 justify-end w-full'>
        <div className='bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer'>
          <LuMessageCircleMore />
        </div>
        <div className='bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer relative'>
          <GrAnnounce />
          <div className='absolute -top-3 -right-3 w-5 h-5 flex items-center justify-center bg-purple-500 text-white rounded-full text-xs'>1</div>
        </div>
        <div className='flex flex-col'>
          <span className="text-xs leading-3 font-medium">John Doe</span>
          <span className="text-[10px] text-gray-500 text-right">Admin</span>
        </div>
        <CgProfile className="w-8 h-8"/>
      </div>
    </div>
  )
}

export default Navbar