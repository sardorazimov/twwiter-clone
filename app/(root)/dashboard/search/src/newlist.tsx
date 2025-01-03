import { Inbox } from "lucide-react"


const Newlist = () => {
  return (
    <div className="flex flex-col w-full h-auto">
     <div className="flex w-full justify-between h-20 hover:bg-white/5 border-b border-white/10">
     <div className="flex pl-4 flex-col  text-white/70">
     <span>#global</span>
     <h2 className=" text-xl text-zinc-100 font-light">
        Global Hipodrom 2025
     </h2>
     <p>
        İzmir'deki 2025'in ilk yarısına girecek olan Hipodrom 
     </p>
     </div>
     <div className="flex h-full items-center pr-3 cursor-pointer ">
      <Inbox/>
     </div>
     </div>
     <div className="flex w-full justify-between h-20 hover:bg-white/5 border-b border-white/10">
     <div className="flex pl-4 flex-col  text-white/70">
     <span>#global</span>
     <h2 className=" text-xl text-zinc-100 font-light">
        Global Hipodrom 2025
     </h2>
     <p>
        İzmir'deki 2025'in ilk yarısına girecek olan Hipodrom 
     </p>
     </div>
     <div className="flex h-full items-center pr-3 cursor-pointer ">
      <Inbox/>
     </div>
     </div>
     <div className="flex w-full justify-between h-20 hover:bg-white/5 border-b border-white/10">
     <div className="flex pl-4 flex-col  text-white/70">
     <span>#global</span>
     <h2 className=" text-xl text-zinc-100 font-light">
        Global Hipodrom 2025
     </h2>
     <p>
        İzmir'deki 2025'in ilk yarısına girecek olan Hipodrom 
     </p>
     </div>
     <div className="flex h-full items-center pr-3 cursor-pointer ">
      <Inbox/>
     </div>
     </div>
    </div>
  )
}

export default Newlist