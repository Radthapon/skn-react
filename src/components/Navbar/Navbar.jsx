import React from 'react'

const Navbar = () => {
  return (
    <div className="fixed z-[1000] m-auto w-[94%] sm:w-[84%] top-0 left-0 right-0 transition-all bg-white">
            <div className="px-7 flex py-4 items-center rounded-b-2xl shadow-md">

                {/* Logo */}
                <div className="">
                    <img src="/logo-skn.jpg" width={120}
                    height={120} alt="logo"/>
                </div>

                {/* Menu */}
                <div className="hidden lg:flex ml-auto">
                    <ul className="flex flex-row gap-3 xl:gap-5 text-[15px] xl:text-[16px]">
                        <li><a href="/">หน้าหลัก</a></li>
                        <li><a href="/about">เกี่ยวกับเรา</a></li>
                        <li><a href="/news">ข่าวสารและกิจกรรม</a></li>
                        <li><a href="">การพัฒนาสู่ความยั่งยืน</a></li>
                        <li><a href="/corporate">นักลงทุนสัมพันธ์</a></li>
                        <li><a href="/contact">ติดต่อเรา</a></li>
                        <li><a href="">EN</a></li>
                    </ul>
                </div>

                {/* mobie menu */}
                <div className="lg:hidden ml-auto">
                    <img 
                    src="/menu-open.png" 
                    alt="open" 
                    width={30} 
                    height={30}
                    className="cursor-pointer"
                    />
                </div>
            </div>
        </div>
  )
}

export default Navbar