'use client'

import useAction from '@/hooks/use-action'

import { deleteNotifications } from '@/actions/user.action'
import { useSession } from 'next-auth/react'

import { Button } from '../ui/button'
import { toast } from '@/hooks/use-toast'

const ClearBtn = () => {
	const { isLoading, onError, setIsLoading } = useAction()
	const { data } = useSession()

	const onClear = async () => {
		setIsLoading(true)
		const res = await deleteNotifications({ id: data?.currentUser?._id! })
		if (res?.serverError || res?.validationErrors || !res?.data) {
			return onError('Something went wrong')
		}
		if (res.data.failure) {
			return onError(res.data.failure)
		}
		if (res.data.status === 200) {
			toast({ title: 'Success', description: 'Notifications cleared' })
			setIsLoading(false)
		}
	}

	return (
		<div className='mt-4 flex justify-center'>
			<Button  onClick={onClear} disabled={isLoading}>
                Clear Notifications {isLoading? <span className='animate-spin inline-flex h-4 w-4 ml-2 text-gray-700' /> : null}
 
            </Button>
		</div>
	)
}

export default ClearBtn