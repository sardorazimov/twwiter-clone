'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Bookmark, Heart, MessageCircle, Send, Share2 } from 'lucide-react'

interface Comment {
  id: number
  user: string
  content: string
}

export default function TwitterPost() {
  const [liked, setLiked] = useState(false)
  const [bookmarked, setBookmarked] = useState(false)
  const [comments, setComments] = useState<Comment[]>([])
  const [newComment, setNewComment] = useState('')

  const handleLike = () => setLiked(!liked)
  const handleBookmark = () => setBookmarked(!bookmarked)

  const handleAddComment = () => {
    if (newComment.trim()) {
      setComments([...comments, { id: Date.now(), user: 'You', content: newComment.trim() }])
      setNewComment('')
    }
  }

  return (
    <Card className="w-full lg:w-[700px] mt-24  ">
      <CardHeader className="flex flex-row items-center gap-4">
        <Avatar>
          <AvatarImage src="/profile.jpg" alt="@johndoe" />
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
        <div>
          <p className="font-semibold">Coll</p>
          <p className="text-sm text-muted-foreground">Doei</p>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-base">
          Just had an amazing breakthrough in my project! 🎉 Check out this stunning view from my coding spot. #Coding #Innovation #ViewFromMyDesk
        </p>
        <div className="relative w-full aspect-[4/3] rounded-md overflow-hidden">
          <Image
            src="/landing.png"
            alt="View from the coding desk"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="flex justify-between items-center text-muted-foreground">
          <Button variant="ghost" size="sm" onClick={handleLike} className={liked ? 'text-red-500' : ''}>
            <Heart className="w-4 h-4 mr-2" />
            {liked ? 'Liked' : 'Like'}
          </Button>
          <Button variant="ghost" size="sm">
            <MessageCircle className="w-4 h-4 mr-2" />
            Comment
          </Button>
          <Button variant="ghost" size="sm" onClick={handleBookmark} className={bookmarked ? 'text-blue-500' : ''}>
            <Bookmark className="w-4 h-4 mr-2" />
            {bookmarked ? 'Saved' : 'Save'}
          </Button>
          <Button variant="ghost" size="sm">
            <Share2 className="w-4 h-4 mr-2" />
            Share
          </Button>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col gap-4">
        <div className="flex w-full gap-2">
          <Input
            placeholder="Add a comment..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          />
          <Button onClick={handleAddComment}>
            <Send className="w-4 h-4" />
            <span className="sr-only">Send comment</span>
          </Button>
        </div>
        {comments.map((comment) => (
          <div key={comment.id} className="flex items-start gap-2 w-full">
            <Avatar className="w-8 h-8">
              <AvatarFallback>{comment.user[0]}</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <p className="font-semibold text-sm">{comment.user}</p>
              <p className="text-sm">{comment.content}</p>
            </div>
          </div>
        ))}
      </CardFooter>
    </Card>
  )
}

