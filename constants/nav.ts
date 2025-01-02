import { Home, User, Bell, Mail, Bookmark, List, Circle, Search } from "lucide-react"

export const navItems = [
  { name: 'Home', href: '/dashboard', icon: Home },
  {name: 'Expolre', href: '/dashboard/search', icon: Search},
  { name: 'Notifications', href: '/dashboard/notifications', icon: Bell },
  { name: 'Messages', href: '/dashboard/messages', icon: Mail },
  { name: 'Bookmarks', href: '/dashboard/bookmarks', icon: Bookmark },
  { name: 'Lists', href: '/dashboard/lists', icon: List },
  { name: 'More', href: '/dashboard/more', icon: Circle },
  { name: 'Ai', href: '/dashboard/ai', icon: Bookmark },
  { name: 'Communty', href: '/dashboard/community', icon: List },
  { name: 'Profile', href: '/dashboard/profile', icon: User },
  { name: 'Devlopers', href: '/dashhboard/more', icon: Circle },
]

