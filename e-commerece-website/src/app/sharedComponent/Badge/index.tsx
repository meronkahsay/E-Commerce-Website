import React from "react";

interface RedBadgeProps {
  text:String
}

function RedBadge({text}:RedBadgeProps)
 {
return(
  <div className="flex  gap-4 items-center">
    <div className="bg-red-500 px-3 py-4 rounded-[4] ml-0.5" >
    
    </div>
    <p className="text-red-500 font-semibold">{text}</p>
  </div>
)
}
export default RedBadge;