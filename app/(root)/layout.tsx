

interface RootLayoutProps{
    children: React.ReactNode
   }
   
   const Layout = ({children}:RootLayoutProps) => {
     return (
       <main>
         {children}
       </main>
     )
   }
   
   export default Layout