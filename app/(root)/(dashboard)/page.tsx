import { getPosts } from '@/actions/post.action'
import Form from '@/components/shared/Form'
import Header from '@/components/shared/header'
import Pagination from '@/components/shared/pagination'
import PostItem from '@/components/shared/post-iteam'
import { authOptions } from '@/lib/user-options'

import { IPost, SearchParams } from '@/ts'
import { getServerSession } from 'next-auth'

interface Props {
	searchParams: SearchParams
}
export default async function Page({ searchParams }: Props) {
    const session = await getServerSession(authOptions);

	const res = await getPosts({
		page: parseInt(`${searchParams.page}`) || 1,
	})
    const posts = res?.data?.posts || [];
    const isNext = res?.data?.isNext || false;
    const user = session?.currentUser ? JSON.parse(JSON.stringify(session.currentUser)) : null;

    return (
        <>
            <Header label="Home" />
            <Form placeholder="What's on your mind?" user={user} />
            {Array.isArray(posts) && posts.map(post => (
                <PostItem key={post._id} post={post} user={user} />
            ))}
            <Pagination isNext={isNext} pageNumber={searchParams?.page ? +searchParams.page : 1} />
        </>
    );
}