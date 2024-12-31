import Sidebar from "@/components/shared/Sidebar"




interface DashboardLayoutProps{
 children: React.ReactNode
}

const Layout = ({children}:DashboardLayoutProps) => {
  return (
    <main className="w-full min-h-screen flex">
       <aside className="lg:flex w-[400px] hidden h-full border-rborder-white/10 fixed"><Sidebar /></aside>
       <section className="lg:pl-[400px]">
       {children}
     </section>
    </main>
  )
}

export default Layout