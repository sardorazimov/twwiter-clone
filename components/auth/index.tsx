'use client'
import Image from "next/image";
import { Button } from "../ui/button";
import { Mail } from "lucide-react";
import { signIn } from "next-auth/react";
import useRegisterModal from "@/hooks/useRegisterModal";
import useLoginModal from "@/hooks/useLoginModal";
import { useCallback } from "react";
import RegisterModal from "../modals/register-modal";
import LoginModal from "../modals/login-modal";


export default function Auth(){
   const registerModal = useRegisterModal()
	const loginModal = useLoginModal()

	const onOpenRegisterModal = useCallback(() => {
		registerModal.onOpen()
	}, [registerModal])

	const onOpenLoginModal = useCallback(() => {
		loginModal.onOpen()
	}, [loginModal])

 return(
    <>
    <RegisterModal/>
    <LoginModal/>
     <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center h-screen">
        <Image 
         src={'landing.jpg'}
         alt="Auth"
         width={450}
         height={500}
        />
        <div className="flex flex-col justify-center md:justify-betweengap-6 h-full md:h-[70vh]">
          <div className='block md:hidden'>
		   <Image src={'/images/x.svg'} alt='X' width={50} height={50} />
		  </div>
          <h1 className='text-6xl font-bold'>Happening now</h1>
          <div className="w-full md:w-[60%]">
          <h2 className='font-bold text-3xl mb-4'>Join today.</h2>
          <div className="flex flex-col space-y-2">
            <Button
            onClick={() => signIn('google')}
            >
             <span className="flex gap-2 items-center justify-center">
                <Mail/>
                Sign in with Google
             </span>
            </Button>
            <Button
            onClick={() => signIn('github')}
            >
             <span className="flex gap-2 items-center justify-center">
                <Mail/>
                Sign in with GitHub
             </span>
            </Button>
            <div className="flex items-center justify-center">
                <div className="h-px bg-gray-800 w-1/2"/>
                <p className="h-px bg-gray-800">or</p>
                <div className="h-px bg-gray-800 w-1/2"/>
            </div>
            <Button
              onClick={(onOpenRegisterModal)}
             className="">
                Create Account
             </Button>
             <div className="text-[10xp] text-gray-300">
                By signing up, you agree to our
               <p className="text-blue-500 hover:underline">Terms of Service</p> 
                and 
               <p className="text-blue-500 hover:underline">Privacy Policy</p>.
             </div>
          </div>
          </div>
          <div className="w-full md:w-[60%]">
            <h3 className="font-medium text-xl mb-4">
               Already have an account
            </h3>
            <Button
            onClick={() => (onOpenLoginModal)}
             className="">
                Sign in
             </Button>
          </div>
        </div>
     </div>
    </>
 )
}