import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export default function AuthPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className=" flex min-h-screen items-center justify-center md:justify-between px-4">
        <div className="hidden md:block p-20">
          <div className="w-64 h-64">
            <svg viewBox="0 0 24 24" className="w-full h-full fill-current">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </div>
        </div>
        
        <div className="max-w-md space-y-8 w-full">
          <div className="space-y-4">
            <h1 className="text-6xl font-bold tracking-tight">Happening now</h1>
            <h2 className="text-3xl font-bold">Join today.</h2>
          </div>
          
          <div className="space-y-4">
            <Button 
              variant="outline" 
              className="w-full bg-white text-black hover:bg-gray-100 justify-start px-4"
            >
              <Image
                src="/google.svg"
                alt="Google"
                width={20}
                height={20}
                className="mr-2"
              />
              Sign up with Google
            </Button>
            
            <Button 
              variant="outline"
              className="w-full bg-white text-black hover:bg-gray-100 justify-start px-4"
            >
              <Image
                src="/apple.svg"
                alt="Apple"
                width={20}
                height={20}
                className="mr-2"
              />
              Sign up with Apple
            </Button>
            
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-gray-700" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-black px-2 text-gray-400">or</span>
              </div>
            </div>
            
            <Button className="w-full bg-blue-500 hover:bg-blue-600">
              Create account
            </Button>
            
            <p className="text-xs text-gray-400">
              By signing up, you agree to the{" "}
              <Link href="#" className="text-blue-500 hover:underline">
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link href="#" className="text-blue-500 hover:underline">
                Privacy Policy
              </Link>
              , including{" "}
              <Link href="#" className="text-blue-500 hover:underline">
                Cookie Use
              </Link>
              .
            </p>
          </div>
          
          <div className="space-y-4">
            <p className="font-bold">Already have an account?</p>
            <Button 
              variant="outline" 
              className="w-full border-gray-700 text-blue-500 hover:bg-blue-950"
            >
              Sign in
            </Button>
          </div>
        </div>
      </div>
      
      <footer className="fixed bottom-0 w-full py-4 px-4 text-sm text-gray-500">
        <nav className="flex flex-wrap justify-center gap-4">
          {[
            "About",
            "Download the X app",
            "Help Center",
            "Terms of Service",
            "Privacy Policy",
            "Cookie Policy",
            "Accessibility",
            "Ads info",
            "Blog",
            "Careers",
            "Brand Resources",
            "Advertising",
            "Marketing",
            "X for Business",
            "Developers",
            "Directory",
            "Settings"
          ].map((item) => (
            <Link 
              key={item} 
              href="#" 
              className="hover:underline"
            >
              {item}
            </Link>
          ))}
          <span>© 2024 X Corp.</span>
        </nav>
      </footer>
    </div>
  )
}

