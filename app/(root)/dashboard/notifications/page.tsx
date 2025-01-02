import Asidesidebar from "@/components/shared/asidesidebar"
import NotificationsPage from "./src/Notifications"


const page = () => {
  return (
    <main className="min-h-screen flex w-full">
      <div className="lg:w-[700px] w-full min-h-screen lg:border-r">
        <NotificationsPage/>
      </div>
      <div className="lg:pl-[700px] fixed">
         <Asidesidebar/>
      </div>
    </main>
  )
}

export default page