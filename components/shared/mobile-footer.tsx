'use client'

import { Home, Search, Bell, Mail, User } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navItems = [
  { icon: Home, label: 'Home', href: '/dashboard' },
  { icon: Search, label: 'Explore', href: '/dashboard/search' },
  { icon: Bell, label: 'Notifications', href: '/dashboard/notifications' },
  { icon: Mail, label: 'Messages', href: '/dashboard/messages' },
  { icon: User, label: 'Messages', href: '/dashbaord/profile' },
]

export function MobileFooter() {
  const pathname = usePathname()

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-black border-t border-gray-800 md:hidden">
      <div className="flex justify-around">
        {navItems.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-col items-center py-2 px-3 text-sm ${
                isActive ? 'text-primary bg-white/10' : 'text-gray-500 hover:text-gray-300'
              }`}
            >
              <item.icon className="h-6 w-6 mb-1" />
              <span>{item.label}</span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}

