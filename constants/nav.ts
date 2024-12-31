import { Home, User, Bell, Mail, Bookmark, List, Circle, Search } from "lucide-react"

export const navItems = [
  { name: 'Home', href: '/', icon: Home },
  {name: 'Search', href: '/', icon: Search},
  { name: 'Profile', href: '/dashboard/profile', icon: User },
  { name: 'Notifications', href: '/notifications', icon: Bell },
  { name: 'Messages', href: '/messages', icon: Mail },
  { name: 'Bookmarks', href: '/bookmarks', icon: Bookmark },
  { name: 'Lists', href: '/lists', icon: List },
  { name: 'More', href: '/more', icon: Circle },
  { name: 'Ai', href: '/bookmarks', icon: Bookmark },
  { name: 'Communty', href: '/lists', icon: List },
  { name: 'Devlopers', href: '/more', icon: Circle },
]

