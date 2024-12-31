"use client";

import { navItems } from "@/constants/nav";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";

const Sidebar = () => {
  const pathname = usePathname();
  return (
    <div className="w-[450px] border-r h-full  border-white/10 ">
      <div className="">
        <div className="flex flex-col mt-10 space-y-6">
          <div>
            {/* Logo */}
            <nav className="flex flex-col space-y-2 mx-20">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "flex items-center rounded-lg text-white px-3 py-2 text-xl font-medium hover:bg-accent hover:text-accent-foreground",
                    pathname === item.href
                      ? "bg-accent text-accent-foreground"
                      : ""
                  )}
                >
                  <item.icon className="mr-2 h-6 w-6" />
                  <span className="hidden md:inline mx-3 font-extralight">{item.name}</span>
                </Link>
              ))}
            </nav>
            <div className="mt-20"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
