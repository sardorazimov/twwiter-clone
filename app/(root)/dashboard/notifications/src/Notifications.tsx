import { Bell, Heart, MessageCircle, UserPlus } from 'lucide-react'
import Image from 'next/image'

const notifications = [
  {
    id: 1,
    type: 'like',
    user: { username: 'user1', avatar: '/hero.jpg' },
    content: 'liked your post.',
    time: '1h',
  },
  {
    id: 2,
    type: 'comment',
    user: { username: 'user2', avatar: '/hero.jpg' },
    content: 'commented: "Beautiful flowers!"',
    time: '2h',
  },
  {
    id: 3,
    type: 'follow',
    user: { username: 'user3', avatar: '/hero.jpg' },
    content: 'started following you.',
    time: '1d',
  },
]

export default function NotificationsPage() {
  return (
    <div className="lg:w-[700px] w-full sm:w-full mx-auto px-4">
      <h1 className="text-2xl font-bold mb-4">Notifications</h1>
      <div className="space-y-4 w-full">
        {notifications.map((notification) => (
          <div key={notification.id} className="flex items-center w-full space-x-3 p-3 border border-white/10 rounded-xl  shadow">
            <div className="flex-shrink-0">
              <img
                src={notification.user.avatar}
                alt={notification.user.username}
                
                className=" w-8 h-8 rounded-full"
              />
            </div>
            <div className="flex-grow">
              <p className="text-sm">
                <span className="font-semibold">{notification.user.username}</span>{' '}
                {notification.content}
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">{notification.time}</p>
            </div>
            <div className="flex-shrink-0">
              {notification.type === 'like' && <Heart className="h-5 w-5 text-red-500" />}
              {notification.type === 'comment' && <MessageCircle className="h-5 w-5 text-blue-500" />}
              {notification.type === 'follow' && <UserPlus className="h-5 w-5 text-green-500" />}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

