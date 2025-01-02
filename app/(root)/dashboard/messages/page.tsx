import Messagelist from "./src/messagelist"
import Usermessage from "./src/usermessage"


const page = () => {
  return (
    <div className="grid grid-cols-2 xl:grid-cols-2 gap-1">
     <div className="">
      <Messagelist/>
     </div>
     <div className="">
       <Usermessage/>
     </div>
    </div>
  )
}

export default page