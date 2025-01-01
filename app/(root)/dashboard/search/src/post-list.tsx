'use client'

import { Heart, MessageCircle, MoreHorizontal, Repeat2, Share } from 'lucide-react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { VerifiedIcon } from './virified-icon'

interface Post {
  id: string
  author: {
    name: string
    username: string
    avatar: string
    verified?: boolean
  }
  content: string
  timestamp: string
  image?: string
  stats?: {
    replies?: number
    retweets?: number
    likes?: number
  }
}

const posts: Post[] = [
  {
    id: '1',
    author: {
      name: 'Utku Altunöz',
      username: 'utkualtunoz',
      avatar: '/hero.jpg',
      verified: true
    },
    content: 'Davranışsal ekonomi ile alakalı 1 kitap, birçok bildiri ve makale yazmış bir akademisyen olarak çorbanın 100 TL, tostun 200 TL olduğu, tatil fırsatıyla otobüs biletlerinin uçak bileti seviyesine geldiği...',
    timestamp: '9s',
    stats: {
      replies: 12,
      retweets: 4,
      likes: 23
    }
  },
  {
    id: '2',
    author: {
      name: 'Bloomberg',
      username: 'Bloomb',
      avatar: '/hero.jpg',
      verified: true
    },
    content: 'Çalışma yaşamında 2025 pazarlık olacak bb.ht/m5nffm',
    timestamp: '31m',
    stats: {
      replies: 45,
      retweets: 121,
      likes: 380
    }
  },
  {
    id: '3',
    author: {
      name: 'AlShabab Saud',
      username: 'AlShaba',
      avatar: '/hero.jpg',
      verified: false
    },
    content: 'İlk gülüş, Fatih Terim 😊🤍',
    timestamp: '53d',
    image: '/hero.jpg',
    stats: {
      replies: 234,
      retweets: 1205,
      likes: 5632
    }
  }
]

export function PostList() {
  return (
    <div className="divide-y divide-white/10">
      {posts.map((post) => (
        <article key={post.id} className="p-4 hover:bg-white/10 transition-colors">
          <div className="flex gap-4">
            <div className="flex-shrink-0">
              <img
                src={post.author.avatar}
                alt={post.author.name}
               
                className="rounded-full w-8 h-8"
              />
            </div>
            <div className="flex-grow min-w-0">
              <div className="flex items-center gap-2 text-sm">
                <span className="font-bold truncate">{post.author.name}</span>
                {post.author.verified && <VerifiedIcon />}
                <span className="text-gray-500">@{post.author.username}</span>
                <span className="text-gray-500">·</span>
                <span className="text-gray-500">{post.timestamp}</span>
                <Button variant="ghost" size="icon" className="ml-auto rounded-full h-8 w-8">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </div>
              <p className="mt-1 text-[15px] break-words">{post.content}</p>
              {post.image && (
                <div className="mt-3 rounded-xl overflow-hidden">
                  <Image
                    src={post.image}
                    alt="Post image"
                    width={500}
                    height={300}
                    className="w-full object-cover"
                  />
                </div>
              )}
              {post.stats && (
                <div className="flex justify-between mt-3 max-w-md text-gray-500">
                  <Button variant="ghost" size="sm" className="hover:text-blue-500 gap-2">
                    <MessageCircle className="h-4 w-4" />
                    {post.stats.replies}
                  </Button>
                  <Button variant="ghost" size="sm" className="hover:text-green-500 gap-2">
                    <Repeat2 className="h-4 w-4" />
                    {post.stats.retweets}
                  </Button>
                  <Button variant="ghost" size="sm" className="hover:text-pink-500 gap-2">
                    <Heart className="h-4 w-4" />
                    {post.stats.likes}
                  </Button>
                  <Button variant="ghost" size="sm" className="hover:text-blue-500">
                    <Share className="h-4 w-4" />
                  </Button>
                </div>
              )}
            </div>
          </div>
        </article>
      ))}
    </div>
  )
}

